# 🛡️ VPS Manager — Portfolio Demo (Native Web & Android Security Squadron)

Instância de demonstração profissional e interativa do **VPS Manager**, adaptada para execução **Web Nativa** (Desktop, Tablet e Mobile) e **Android Capacitor**, com dados mock higienizados, animação de abertura cinematográfica, **37 WebGL Shaders**, **5 galerias fotográficas rotativas**, interface **VisionOS Liquid Glass** e **Samsung Knox Biometrics**.

---

## ✨ Destaques da Versão Demo de Portfolio

1. **Abertura Cinematográfica Suave**:
   - Tela base de ignição com verificação simulada de subsistemas Zero-Trust, Knox Keystore e compilação WebGL.
   - Transição fluida com revelação em cascata (*staggered entrance*) do dock visionOS, cabeçalho e cartões de telemetria com contadores animados em tempo real.
2. **Dados Mock Sanitizados (Privacidade Total do Admin)**:
   - Todos os IPs reais e domínios proprietários foram substituídos por pools seguros e canônicos de documentação/teste (Tailscale Mock Subnet `100.64.0.0/10` e RFC 5737 `198.51.100.0/24` / `203.0.113.0/24`).
3. **Ponte Mock Autônoma para Navegador (`js/web-demo-mock.js`)**:
   - Funciona 100% no navegador sem requisições externas ou falhas de rede.
   - Simulação interativa de comandos no **Terminal SSH Root** (`top`, `docker ps`, `fail2ban-client status`, `iptables -L -n`, `free -h`, `df -h /`, `ss -tulnp`, `uname -a`).
   - Chat inteligente com os 4 agentes autônomos (**Sentinel**, **Guardian**, **Cyber OSINT Hunter** e **CERT Gateway**).
   - Feed dinâmico de eventos de segurança simulados em tempo real na barra de alertas do Kernel e lista cronológica de logs.
   - Leitor integrado em Markdown dos 3 Livros de Auditoria e SRE.
4. **Motor Gráfico WebGL com 37 Shaders e 5 Galerias**:
   - Renderização fluida a 60 FPS com OGL e Three.js, controle de FPS inteligente e alternador aleatório.

---

## 🤖 Mapeamento dos 4 Agentes Autônomos (SRE & Ciberdefesa)

| # | Agente | ID n8n | Canal Discord Mapeado | Função Operacional |
|---|---|---|---|---|
| 1 | 🖥️ **Sentinel — VPS Manager** | `xAj3So16VZKY9WGx` | `#🖥️┃vps-manager` | Telemetria SRE de CPU, RAM, NVMe, status de 8 contêineres Docker e repositórios Git |
| 2 | 🛡️ **Guardian — Segurança & Backups** | `xAj3So16VZKY9WGx` | `#🛡️┃segurança-e-backups` | Defesa Zero-Trust no Kernel Linux (ipset O(1)), 5.618 IPs bloqueados e cold backups |
| 3 | 🕵️ **Cyber OSINT & Abuse Hunter** | `fKMt8yAiVhdy6b1G` | `#🕵️┃cyber-osint-response` | Correlação de ameaças com Shodan, mapeamento de CVEs e catálogo global de atacantes |
| 4 | ⚖️ **International CERT & RFC 2142** | `fKMt8yAiVhdy6b1G` | `#⚖️┃logs-denuncias-internacionais` | Autos formais de infração cibernética despachados para CISA, CERT.br, NCSC e provedores |

---

## 🚀 Como Executar a Demo Web

Basta servir o diretório em qualquer servidor estático local ou de produção:

```bash
# Opção 1: Via npx serve (Node.js)
npx serve . -p 8080

# Opção 2: Via Python 3
python3 -m http.server 8080

# Opção 3: Via PHP
php -S 0.0.0.0:8080
```

Abra `http://localhost:8080` no navegador para vivenciar a experiência completa.

---

## 📱 Execução no Android (Capacitor)

```bash
# 1. Gerar www/ e sincronizar assets
node scripts/build-www.js

# 2. Compilar APK Debug nativo (JDK 17)
cd android && ./gradlew clean assembleDebug

# 3. Instalar via ADB
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 📌 Governança Git & Identidade

- **Autor Oficial**: `Mateus Celestino <202405039459@alunos.estacio.br>`
- **Repositório Demo**: `@MateusCelestinoProX/vps-manager-android-demo`
