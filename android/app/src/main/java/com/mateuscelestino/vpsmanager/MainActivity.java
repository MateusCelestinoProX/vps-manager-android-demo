package com.mateuscelestino.vpsmanager;

import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    private final Handler mHandler = new Handler(Looper.getMainLooper());

    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(SamsungBiometricPlugin.class);
        registerPlugin(VpsBridgePlugin.class);
        super.onCreate(savedInstanceState);
        applyFullScreenImmersive();
    }

    @Override
    public void onStart() {
        super.onStart();
        applyFullScreenImmersive();
    }

    @Override
    public void onResume() {
        super.onResume();
        applyFullScreenImmersive();
    }

    @Override
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        applyFullScreenImmersive();
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) {
            applyFullScreenImmersive();
        }
    }

    private void applyFullScreenImmersive() {
        mHandler.post(() -> {
            try {
                Window window = getWindow();
                if (window == null) return;

                // Suporte completo a notch, punch-hole e câmeras frontais sem bordas pretas
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
                    WindowManager.LayoutParams params = window.getAttributes();
                    params.layoutInDisplayCutoutMode =
                        WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
                    window.setAttributes(params);
                }

                // Ocupa 100% da tela sem insets do sistema
                WindowCompat.setDecorFitsSystemWindows(window, false);
                window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
                window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
                window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
                window.addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
                window.clearFlags(WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN);
                window.setStatusBarColor(Color.TRANSPARENT);
                window.setNavigationBarColor(Color.TRANSPARENT);

                // Oculta permanentemente a barra de notificações (relógio, bateria, ícones) e gestos/navegação
                WindowInsetsControllerCompat insetsController =
                    WindowCompat.getInsetsController(window, window.getDecorView());
                if (insetsController != null) {
                    insetsController.hide(WindowInsetsCompat.Type.systemBars());
                    insetsController.setSystemBarsBehavior(
                        WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
                    );
                }

                // Flags de fallback e listener para persistência absoluta caso o Android tente restaurar
                View decorView = window.getDecorView();
                if (decorView != null) {
                    int flags = View.SYSTEM_UI_FLAG_FULLSCREEN
                            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                            | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                            | View.SYSTEM_UI_FLAG_LAYOUT_STABLE;
                    decorView.setSystemUiVisibility(flags);

                    decorView.setOnSystemUiVisibilityChangeListener(visibility -> {
                        if ((visibility & View.SYSTEM_UI_FLAG_FULLSCREEN) == 0) {
                            applyFullScreenImmersive();
                        }
                    });
                }

                if (bridge != null && bridge.getWebView() != null) {
                    bridge.getWebView().setFitsSystemWindows(false);
                }
            } catch (Exception ignored) {}
        });
    }
}
