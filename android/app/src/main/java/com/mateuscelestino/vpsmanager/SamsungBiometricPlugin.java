package com.mateuscelestino.vpsmanager;

import androidx.annotation.NonNull;
import androidx.biometric.BiometricManager;
import androidx.biometric.BiometricPrompt;
import androidx.core.content.ContextCompat;
import androidx.fragment.app.FragmentActivity;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.concurrent.Executor;

@CapacitorPlugin(name = "SamsungBiometric")
public class SamsungBiometricPlugin extends Plugin {

    @PluginMethod
    public void isAvailable(PluginCall call) {
        JSObject ret = new JSObject();
        try {
            BiometricManager biometricManager = BiometricManager.from(getContext());
            int authenticators = BiometricManager.Authenticators.BIOMETRIC_STRONG | BiometricManager.Authenticators.BIOMETRIC_WEAK;
            int canAuth = biometricManager.canAuthenticate(authenticators);

            switch (canAuth) {
                case BiometricManager.BIOMETRIC_SUCCESS:
                    ret.put("available", true);
                    ret.put("hasEnrolled", true);
                    ret.put("code", "SUCCESS");
                    break;
                case BiometricManager.BIOMETRIC_ERROR_NONE_ENROLLED:
                    ret.put("available", true);
                    ret.put("hasEnrolled", false);
                    ret.put("code", "NONE_ENROLLED");
                    ret.put("message", "Nenhuma digital cadastrada no Samsung Pass.");
                    break;
                case BiometricManager.BIOMETRIC_ERROR_NO_HARDWARE:
                    ret.put("available", false);
                    ret.put("hasEnrolled", false);
                    ret.put("code", "NO_HARDWARE");
                    ret.put("message", "Sensor biométrico não encontrado.");
                    break;
                case BiometricManager.BIOMETRIC_ERROR_HW_UNAVAILABLE:
                    ret.put("available", false);
                    ret.put("hasEnrolled", false);
                    ret.put("code", "HW_UNAVAILABLE");
                    ret.put("message", "Sensor biométrico indisponível.");
                    break;
                default:
                    ret.put("available", false);
                    ret.put("hasEnrolled", false);
                    ret.put("code", "UNKNOWN");
                    ret.put("message", "Status biométrico: " + canAuth);
                    break;
            }
            call.resolve(ret);
        } catch (Exception e) {
            ret.put("available", false);
            ret.put("hasEnrolled", false);
            ret.put("code", "ERROR");
            ret.put("message", e.getMessage());
            call.resolve(ret);
        }
    }

    @PluginMethod
    public void authenticate(PluginCall call) {
        getActivity().runOnUiThread(() -> {
            try {
                if (!(getActivity() instanceof FragmentActivity)) {
                    JSObject err = new JSObject();
                    err.put("success", false);
                    err.put("error", "Activity não suporta BiometricPrompt");
                    call.resolve(err);
                    return;
                }

                FragmentActivity fragmentActivity = (FragmentActivity) getActivity();
                Executor executor = ContextCompat.getMainExecutor(fragmentActivity);

                String title = call.getString("title", "Desbloqueio com Digital");
                String subtitle = call.getString("subtitle", "Samsung Pass / Biometria Ultrassônica");
                String description = call.getString("description", "Posicione sua digital no sensor para desbloquear");
                String negativeButtonText = call.getString("negativeButtonText", "Cancelar");

                BiometricPrompt.PromptInfo promptInfo = new BiometricPrompt.PromptInfo.Builder()
                        .setTitle(title)
                        .setSubtitle(subtitle)
                        .setDescription(description)
                        .setNegativeButtonText(negativeButtonText)
                        .setAllowedAuthenticators(BiometricManager.Authenticators.BIOMETRIC_STRONG | BiometricManager.Authenticators.BIOMETRIC_WEAK)
                        .setConfirmationRequired(false)
                        .build();

                BiometricPrompt biometricPrompt = new BiometricPrompt(fragmentActivity, executor, new BiometricPrompt.AuthenticationCallback() {
                    @Override
                    public void onAuthenticationError(int errorCode, @NonNull CharSequence errString) {
                        super.onAuthenticationError(errorCode, errString);
                        JSObject ret = new JSObject();
                        ret.put("success", false);
                        ret.put("errorCode", errorCode);
                        ret.put("error", errString.toString());
                        boolean isCanceled = (errorCode == BiometricPrompt.ERROR_USER_CANCELED ||
                                             errorCode == BiometricPrompt.ERROR_NEGATIVE_BUTTON ||
                                             errorCode == BiometricPrompt.ERROR_CANCELED);
                        ret.put("isCanceled", isCanceled);
                        call.resolve(ret);
                    }

                    @Override
                    public void onAuthenticationSucceeded(@NonNull BiometricPrompt.AuthenticationResult result) {
                        super.onAuthenticationSucceeded(result);
                        JSObject ret = new JSObject();
                        ret.put("success", true);
                        ret.put("message", "Autenticação biométrica realizada com sucesso!");
                        call.resolve(ret);
                    }

                    @Override
                    public void onAuthenticationFailed() {
                        super.onAuthenticationFailed();
                    }
                });

                biometricPrompt.authenticate(promptInfo);

            } catch (Exception e) {
                JSObject ret = new JSObject();
                ret.put("success", false);
                ret.put("error", e.getMessage());
                call.resolve(ret);
            }
        });
    }
}
