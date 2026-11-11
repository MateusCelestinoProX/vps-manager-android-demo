package com.mateuscelestino.vpsmanager;

import android.Manifest;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.text.TextUtils;

import androidx.core.app.NotificationCompat;
import androidx.core.content.ContextCompat;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@CapacitorPlugin(name = "VpsBridge")
public class VpsBridgePlugin extends Plugin {

    private final ExecutorService executor = Executors.newCachedThreadPool();

    private static class HttpResult {
        int code;
        String body;
    }

    private HttpResult executeHttp(
            String urlStr,
            String method,
            String jsonBody,
            String authHeader,
            String acceptHeader,
            String userAgent,
            int timeoutMs
    ) throws Exception {
        URL url = new URL(urlStr);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod(method);
        conn.setConnectTimeout(Math.min(12000, timeoutMs));
        conn.setReadTimeout(timeoutMs);
        conn.setUseCaches(false);
        conn.setRequestProperty("Accept", acceptHeader != null ? acceptHeader : "application/json");
        if (!TextUtils.isEmpty(userAgent)) {
            conn.setRequestProperty("User-Agent", userAgent);
        }
        if (!TextUtils.isEmpty(authHeader)) {
            conn.setRequestProperty("Authorization", authHeader);
        }
        if (jsonBody != null && ("POST".equalsIgnoreCase(method) || "PUT".equalsIgnoreCase(method) || "PATCH".equalsIgnoreCase(method))) {
            conn.setDoOutput(true);
            conn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
            byte[] bytes = jsonBody.getBytes(StandardCharsets.UTF_8);
            try (OutputStream os = conn.getOutputStream()) {
                os.write(bytes);
                os.flush();
            }
        }

        int code = conn.getResponseCode();
        InputStream stream = (code >= 200 && code < 400) ? conn.getInputStream() : conn.getErrorStream();
        StringBuilder sb = new StringBuilder();
        if (stream != null) {
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(stream, StandardCharsets.UTF_8))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    sb.append(line).append('\n');
                }
            }
        }
        conn.disconnect();
        HttpResult res = new HttpResult();
        res.code = code;
        res.body = sb.toString().trim();
        return res;
    }

    @PluginMethod
    public void getStatus(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("hasDiscordToken", !TextUtils.isEmpty(BuildConfig.DISCORD_BOT_TOKEN));
        ret.put("hasN8nToken", !TextUtils.isEmpty(BuildConfig.N8N_MCP_TOKEN));
        ret.put("n8nBaseUrl", BuildConfig.N8N_BASE_URL);
        ret.put("vpsSentinelUrl", BuildConfig.VPS_SENTINEL_URL);
        ret.put("vpsOsintUrl", BuildConfig.VPS_OSINT_URL);
        call.resolve(ret);
    }

    @PluginMethod
    public void fetchDiscordMessages(PluginCall call) {
        String channelId = call.getString("channelId", "");
        if (TextUtils.isEmpty(channelId)) {
            call.reject("channelId obrigatorio");
            return;
        }
        int limit = call.getInt("limit", 25);
        String tokenOverride = call.getString("botToken", "");
        String token = !TextUtils.isEmpty(tokenOverride) ? tokenOverride : BuildConfig.DISCORD_BOT_TOKEN;
        if (TextUtils.isEmpty(token)) {
            JSObject err = new JSObject();
            err.put("ok", false);
            err.put("status", 401);
            err.put("error", "DISCORD_BOT_TOKEN nao configurado");
            call.resolve(err);
            return;
        }
        final String authHeader = token.startsWith("Bot ") ? token : ("Bot " + token);

        executor.execute(() -> {
            try {
                String url = "https://discord.com/api/v10/channels/" + channelId + "/messages?limit=" + limit;
                HttpResult res = executeHttp(
                        url,
                        "GET",
                        null,
                        authHeader,
                        "application/json",
                        "DiscordBot (https://agencyx.ai, 1.0.0)",
                        15000
                );
                JSObject ret = new JSObject();
                ret.put("status", res.code);
                if (res.code >= 200 && res.code < 300) {
                    ret.put("ok", true);
                    ret.put("messages", new JSArray(res.body.isEmpty() ? "[]" : res.body));
                } else {
                    ret.put("ok", false);
                    ret.put("error", res.body);
                }
                call.resolve(ret);
            } catch (Exception e) {
                JSObject err = new JSObject();
                err.put("ok", false);
                err.put("error", e.getMessage() != null ? e.getMessage() : "Erro Discord API");
                call.resolve(err);
            }
        });
    }

    @PluginMethod
    public void sendDiscordMessage(PluginCall call) {
        String channelId = call.getString("channelId", "");
        String content = call.getString("content", "");
        if (TextUtils.isEmpty(channelId) || TextUtils.isEmpty(content)) {
            call.reject("channelId e content sao obrigatorios");
            return;
        }
        String tokenOverride = call.getString("botToken", "");
        String token = !TextUtils.isEmpty(tokenOverride) ? tokenOverride : BuildConfig.DISCORD_BOT_TOKEN;
        if (TextUtils.isEmpty(token)) {
            JSObject err = new JSObject();
            err.put("ok", false);
            err.put("error", "DISCORD_BOT_TOKEN nao configurado");
            call.resolve(err);
            return;
        }
        final String authHeader = token.startsWith("Bot ") ? token : ("Bot " + token);

        executor.execute(() -> {
            try {
                JSONObject payload = new JSONObject();
                payload.put("content", content);
                String url = "https://discord.com/api/v10/channels/" + channelId + "/messages";
                HttpResult res = executeHttp(
                        url,
                        "POST",
                        payload.toString(),
                        authHeader,
                        "application/json",
                        "DiscordBot (https://agencyx.ai, 1.0.0)",
                        15000
                );
                JSObject ret = new JSObject();
                ret.put("status", res.code);
                if (res.code >= 200 && res.code < 300) {
                    ret.put("ok", true);
                    ret.put("message", new JSObject(res.body));
                } else {
                    ret.put("ok", false);
                    ret.put("error", res.body);
                }
                call.resolve(ret);
            } catch (Exception e) {
                JSObject err = new JSObject();
                err.put("ok", false);
                err.put("error", e.getMessage() != null ? e.getMessage() : "Erro ao enviar mensagem");
                call.resolve(err);
            }
        });
    }

    @PluginMethod
    public void callN8nAgent(PluginCall call) {
        String agentId = call.getString("agentId", "");
        String message = call.getString("message", "");
        if (TextUtils.isEmpty(agentId) || TextUtils.isEmpty(message)) {
            call.reject("agentId e message sao obrigatorios");
            return;
        }
        String baseOverride = call.getString("n8nBaseUrl", "");
        String tokenOverride = call.getString("mcpToken", "");
        String baseUrl = (!TextUtils.isEmpty(baseOverride) ? baseOverride : BuildConfig.N8N_BASE_URL).replaceAll("/+$", "");
        String token = !TextUtils.isEmpty(tokenOverride) ? tokenOverride : BuildConfig.N8N_MCP_TOKEN;
        if (TextUtils.isEmpty(token)) {
            JSObject err = new JSObject();
            err.put("ok", false);
            err.put("error", "N8N_MCP_TOKEN nao configurado");
            call.resolve(err);
            return;
        }

        executor.execute(() -> {
            try {
                JSONObject rpc = new JSONObject();
                rpc.put("jsonrpc", "2.0");
                rpc.put("id", System.currentTimeMillis());
                rpc.put("method", "tools/call");

                JSONObject requestObj = new JSONObject();
                requestObj.put("type", "message");
                requestObj.put("message", message);

                JSONObject args = new JSONObject();
                args.put("agentId", agentId);
                args.put("request", requestObj);

                JSONObject params = new JSONObject();
                params.put("name", "call_agent");
                params.put("arguments", args);
                rpc.put("params", params);

                HttpResult res = executeHttp(
                        baseUrl + "/mcp-server/http",
                        "POST",
                        rpc.toString(),
                        "Bearer " + token,
                        "application/json, text/event-stream",
                        "VPS-Manager-Android/2.0",
                        120000
                );

                JSObject ret = new JSObject();
                ret.put("status", res.code);
                if (res.code < 200 || res.code >= 300) {
                    ret.put("ok", false);
                    ret.put("error", res.body);
                    call.resolve(ret);
                    return;
                }

                String extracted = extractN8nAgentResponse(res.body);
                if (!TextUtils.isEmpty(extracted)) {
                    ret.put("ok", true);
                    ret.put("response", extracted);
                } else {
                    ret.put("ok", false);
                    ret.put("error", "Resposta vazia do n8n MCP");
                    ret.put("raw", res.body);
                }
                call.resolve(ret);
            } catch (Exception e) {
                JSObject err = new JSObject();
                err.put("ok", false);
                err.put("error", e.getMessage() != null ? e.getMessage() : "Erro n8n MCP");
                call.resolve(err);
            }
        });
    }

    private String extractN8nAgentResponse(String raw) {
        if (TextUtils.isEmpty(raw)) return "";
        String[] lines = raw.split("\\r?\\n");
        String best = "";
        for (String line : lines) {
            String candidate = line.startsWith("data: ") ? line.substring(6).trim() : line.trim();
            if (!candidate.startsWith("{")) continue;
            try {
                JSONObject parsed = new JSONObject(candidate);
                JSONObject result = parsed.optJSONObject("result");
                if (result == null) continue;

                JSONObject structured = result.optJSONObject("structuredContent");
                if (structured != null) {
                    String resp = structured.optString("response", "");
                    if (!TextUtils.isEmpty(resp)) return resp.trim();
                }

                JSONArray contentArr = result.optJSONArray("content");
                if (contentArr != null && contentArr.length() > 0) {
                    JSONObject first = contentArr.optJSONObject(0);
                    if (first != null) {
                        String text = first.optString("text", "");
                        if (!TextUtils.isEmpty(text)) {
                            try {
                                JSONObject inner = new JSONObject(text);
                                String innerResp = inner.optString("response", "");
                                if (!TextUtils.isEmpty(innerResp)) return innerResp.trim();
                            } catch (Exception ignored) {
                                best = text.trim();
                            }
                        }
                    }
                }
            } catch (Exception ignored) {}
        }
        return best;
    }

    @PluginMethod
    public void vpsRequest(PluginCall call) {
        String service = call.getString("service", "sentinel");
        String path = call.getString("path", "/api/vps/overview");
        String method = call.getString("method", "GET");
        String baseOverride = call.getString("baseUrl", "");
        JSObject bodyObj = call.getObject("body", null);

        String baseUrl;
        if (!TextUtils.isEmpty(baseOverride)) {
            baseUrl = baseOverride;
        } else if ("osint".equalsIgnoreCase(service)) {
            baseUrl = BuildConfig.VPS_OSINT_URL;
        } else {
            baseUrl = BuildConfig.VPS_SENTINEL_URL;
        }
        baseUrl = baseUrl.replaceAll("/+$", "");
        if (!path.startsWith("/")) {
            path = "/" + path;
        }
        final String fullUrl = baseUrl + path;
        final String bodyJson = bodyObj != null ? bodyObj.toString() : null;

        executor.execute(() -> {
            try {
                HttpResult res = executeHttp(
                        fullUrl,
                        method,
                        bodyJson,
                        null,
                        "application/json",
                        "VPS-Manager-Android/2.0",
                        20000
                );
                JSObject ret = new JSObject();
                ret.put("status", res.code);
                ret.put("ok", res.code >= 200 && res.code < 300);
                if (!TextUtils.isEmpty(res.body)) {
                    if (res.body.startsWith("{")) {
                        ret.put("data", new JSObject(res.body));
                    } else if (res.body.startsWith("[")) {
                        ret.put("data", new JSArray(res.body));
                    } else {
                        ret.put("text", res.body);
                    }
                }
                call.resolve(ret);
            } catch (Exception e) {
                JSObject err = new JSObject();
                err.put("ok", false);
                err.put("error", e.getMessage() != null ? e.getMessage() : "Falha na comunicacao com VPS");
                call.resolve(err);
            }
        });
    }

    @PluginMethod
    public void requestNotificationPermission(PluginCall call) {
        JSObject ret = new JSObject();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            Context ctx = getContext();
            boolean granted = ContextCompat.checkSelfPermission(ctx, Manifest.permission.POST_NOTIFICATIONS) == PackageManager.PERMISSION_GRANTED;
            if (!granted && getActivity() != null) {
                getActivity().requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, 1099);
            }
            ret.put("granted", granted);
        } else {
            ret.put("granted", true);
        }
        ret.put("ok", true);
        call.resolve(ret);
    }

    @PluginMethod
    public void notifySecurityAlert(PluginCall call) {
        String title = call.getString("title", "Alerta de Seguranca VPS");
        String body = call.getString("body", "Atividade anomala interceptada pelo Firewall Permanente.");
        int notifId = call.getInt("id", (int) (System.currentTimeMillis() % 100000));

        try {
            Context ctx = getContext();
            NotificationManager nm = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
            String channelId = "vps_realtime_security";

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                NotificationChannel channel = new NotificationChannel(
                        channelId,
                        "VPS Sentinel Realtime Security",
                        NotificationManager.IMPORTANCE_HIGH
                );
                channel.setDescription("Notificacoes em tempo real de bloqueios e ameacas do Firewall");
                channel.enableVibration(true);
                channel.enableLights(true);
                if (nm != null) {
                    nm.createNotificationChannel(channel);
                }
            }

            Intent intent = new Intent(ctx, MainActivity.class);
            intent.setFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP | Intent.FLAG_ACTIVITY_CLEAR_TOP);
            int pendingFlags = PendingIntent.FLAG_UPDATE_CURRENT;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                pendingFlags |= PendingIntent.FLAG_IMMUTABLE;
            }
            PendingIntent pi = PendingIntent.getActivity(ctx, 0, intent, pendingFlags);

            NotificationCompat.Builder builder = new NotificationCompat.Builder(ctx, channelId)
                    .setSmallIcon(android.R.drawable.stat_notify_error)
                    .setContentTitle(title)
                    .setContentText(body)
                    .setStyle(new NotificationCompat.BigTextStyle().bigText(body))
                    .setPriority(NotificationCompat.PRIORITY_HIGH)
                    .setAutoCancel(true)
                    .setContentIntent(pi);

            if (nm != null) {
                nm.notify(notifId, builder.build());
            }

            JSObject ret = new JSObject();
            ret.put("ok", true);
            ret.put("id", notifId);
            call.resolve(ret);
        } catch (Exception e) {
            JSObject err = new JSObject();
            err.put("ok", false);
            err.put("error", e.getMessage() != null ? e.getMessage() : "Falha ao emitir notificacao");
            call.resolve(err);
        }
    }
}
