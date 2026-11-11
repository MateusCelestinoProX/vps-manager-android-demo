/**
 * VPS MANAGER ANDROID — WEB NATIVE PORTFOLIO DEMO ENGINE
 * Autonomous mock bridge simulating native Android Capacitor plugins:
 * - VpsBridge (Tailscale HTTP proxy, SSH execution, OSINT, Discord Webhooks)
 * - SamsungBiometric (Knox Vault biometric authentication)
 * - Realtime Security Stream Simulator
 */

(function () {
  'use strict';

  console.log('🛡️ Web Demo Mock Engine inicializado — Modo Portfolio Ativo');

  // Realistic Linux System Outputs for Terminal Console
  const TERMINAL_COMMANDS = {
    'help': `Comandos disponíveis no Terminal Root da VPS Demo:
  • uptime            Tempo de atividade e load average
  • free -m / -h      Uso detalhado de memória RAM e Swap
  • df -h /           Espaço em disco NVMe
  • docker ps         Status dos containers de produção
  • fail2ban-client   Status das jails e IPs banidos
  • iptables -L -n    Regras de firewall e estatísticas de DROP
  • ss -tulnp         Portas e sockets em escuta no host
  • osint status      Sumário da inteligência de ameaças
  • cert-status       Autos de infração emitidos (RFC 2142)
  • clear             Limpar console do terminal`,

    'uptime': ` 22:45:10 up 62 days, 14:18,  1 user,  load average: 0.12, 0.08, 0.05`,

    'free -m': `               total        used        free      shared  buff/cache   available
Mem:            7984        3412        2180         142        2392        4280
Swap:           4096         520        3576`,

    'free -h': `               total        used        free      shared  buff/cache   available
Mem:           7.8Gi       3.3Gi       2.1Gi       142Mi       2.3Gi       4.2Gi
Swap:          4.0Gi       520Mi       3.5Gi`,

    'df -h /': `Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        98G   38G   56G  41% /`,

    'uname -a': `Linux vps-sentinel-demo 6.8.0-1017-oracle #19-Ubuntu SMP PREEMPT_DYNAMIC ARM64 aarch64 GNU/Linux`,

    'whoami': `root`,

    'docker ps': `CONTAINER ID   IMAGE                          COMMAND                  CREATED        STATUS                    PORTS                                      NAMES
a1b2c3d4e5f6   n8nio/n8n:latest               "tini -- /docker-ent…"   14 days ago    Up 14 days (healthy)      127.0.0.1:5678->5678/tcp                   n8n-agents-core
b2c3d4e5f6a1   redis:7-alpine                 "docker-entrypoint.s…"   62 days ago    Up 62 days (healthy)      127.0.0.1:6379->6379/tcp                   redis-sentinel
c3d4e5f6a1b2   postgres:16-alpine             "docker-entrypoint.s…"   62 days ago    Up 62 days (healthy)      127.0.0.1:5432->5432/tcp                   postgres-audit
d4e5f6a1b2c3   caddy:2-alpine                 "caddy run --config …"   62 days ago    Up 62 days (healthy)      0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp   caddy-ingress
e5f6a1b2c3d4   agencyx/sentinel-api:latest    "node /app/server.js"    21 days ago    Up 21 days (healthy)      100.64.0.42:5059->5059/tcp                 sentinel-vps-api
f6a1b2c3d4e5   agencyx/osint-hunter:latest    "python3 /app/main.py"   21 days ago    Up 21 days (healthy)      100.64.0.42:5060->5060/tcp                 osint-cert-api
0a1b2c3d4e5f   crazymax/fail2ban:latest       "/init"                  62 days ago    Up 62 days (healthy)                                                 fail2ban-ipset
1b2c3d4e5f6a   agencyx/discord-bridge:latest  "node /app/bridge.js"    18 days ago    Up 18 days (healthy)                                                 discord-security-bridge`,

    'fail2ban-client status': `Status
|- Number of jail:      4
\`- Jail list:          sshd, recidive, caddy-auth, portscan-drop`,

    'fail2ban-client status sshd': `Status for the jail: sshd
|- Filter
|  |- Currently failed: 3
|  |- Total failed:     14,892
|  \`- File list:        /var/log/auth.log
\`- Actions
   |- Currently banned: 5,618 (Modo Permanente Bantime = -1)
   |- Total banned:     5,618
   \`- Banned IP list:   198.51.100.77 203.0.113.88 198.51.100.142 ... [5.618 IPs no IPSET]`,

    'ss -tulnp': `Netid State  Recv-Q Send-Q    Local Address:Port    Peer Address:PortProcess
tcp   LISTEN 0      4096       127.0.0.1:5678            0.0.0.0:*    users:(("node",pid=1120,fd=19))
tcp   LISTEN 0      511        127.0.0.1:6379            0.0.0.0:*    users:(("redis-server",pid=840,fd=6))
tcp   LISTEN 0      244        127.0.0.1:5432            0.0.0.0:*    users:(("postgres",pid=912,fd=7))
tcp   LISTEN 0      4096     100.64.0.42:5059            0.0.0.0:*    users:(("node",pid=1450,fd=22))
tcp   LISTEN 0      4096     100.64.0.42:5060            0.0.0.0:*    users:(("python3",pid=1502,fd=4))
tcp   LISTEN 0      4096          0.0.0.0:443             0.0.0.0:*    users:(("caddy",pid=604,fd=8))
tcp   LISTEN 0      128           0.0.0.0:22              0.0.0.0:*    users:(("sshd",pid=710,fd=3))`
  };

  // Agent Chat Intelligent Responder for Demo
  const AGENT_RESPONSES = {
    sentinel: (msg) => {
      const q = msg.toLowerCase();
      if (q.includes('cpu') || q.includes('load') || q.includes('recurso')) {
        return `📊 **Status de Telemetria CPU & Host:**
- **CPU:** 2 vCPUs ARM Neoverse N1 operando em **14.2%** de carga média.
- **Load Averages:** \`0.12, 0.08, 0.05\` (estabilidade total).
- **RAM:** 3.4 GB utilizados de 8.0 GB (42.7%).
- **Swap:** 520 MB utilizados de 4.0 GB.
- **Kernel I/O:** Latência NVMe abaixo de 0.4ms.`;
      }
      if (q.includes('docker') || q.includes('container')) {
        return `🐳 **Topologia Docker em Produção (8/8 Containers Ativos):**
- \`n8n-agents-core\`: **Up 14d (healthy)** — Porta 5678 (Tailscale isolado)
- \`redis-sentinel\`: **Up 62d (healthy)** — Cache de sessões e rate-limit
- \`postgres-audit\`: **Up 62d (healthy)** — Dossiês e trilhas de auditoria
- \`sentinel-vps-api\`: **Up 21d (healthy)** — Porta 5059 (:5059)
- \`osint-cert-api\`: **Up 21d (healthy)** — Porta 5060 (:5060)
- \`caddy-ingress\`: **Up 62d (healthy)** — TLS 1.3 automático`;
      }
      return `🖥️ **Sentinel SRE Responde:**
Análise em tempo real do host \`vps-sentinel-demo\` (Tailscale IP: \`100.64.0.42\`).
Todos os subsistemas operam dentro das margens ideais de segurança e latência. Não foram detectadas anomalias nos processos de sistema nem no tráfego de loopback.`;
    },

    guardian: (msg) => {
      const q = msg.toLowerCase();
      if (q.includes('firewall') || q.includes('iptables') || q.includes('ban')) {
        return `🛡️ **Status de Defesa de Perímetro (Zero-Trust Kernel):**
- **IPs Permanentemente Bloqueados:** \`5.618 IPs\` no IPSET do Kernel Linux.
- **Complexidade de Busca:** \`O(1)\` sem perda de pacotes ou degradação de CPU.
- **Fail2ban:** 4 jails ativas com \`bantime = -1\` (bloqueio perpétuo).
- **Tráfego Interceptado:** 142 tentativas de varredura descartadas nas últimas 24h.`;
      }
      if (q.includes('backup') || q.includes('segurança')) {
        return `💾 **Relatório de Integridade & Backups Frios:**
- **Último Cold Backup:** Realizado às 04:00 UTC (\`backup_vps_sentinel_daily.tar.gz\`).
- **Assinatura SHA-256:** Validada com sucesso no hardware keystore.
- **Armazenamento:** Cópia criptografada redundante em volume isolado.`;
      }
      return `🛡️ **Guardian Responde:**
Perímetro do Kernel Linux blindado contra varreduras de portas e força bruta SSH. O conjunto de regras no IPSET continua ativo e rejeita conexões hostis antes de chegarem à camada de aplicação.`;
    },

    osint: (msg) => {
      return `🕵️ **Cyber OSINT Threat Hunter Responde:**
- **Catálogo Global de Invasores:** 4.829 nós hostis indexados.
- **ASNs Críticos sob Monitoramento:** 142 provedores de alto risco.
- **Enriquecimento Forense:** Consultas Shodan, RIPE NCC, ARIN e APNIC executadas automaticamente.
- **Último Lote AGX-BATCH:** 15 IPs atacantes submetidos à correlação de ameaças com sucesso.`;
    },

    cert: (msg) => {
      return `⚖️ **International CERT & RFC 2142 Gateway Responde:**
- **Autos Formais Registrados:** 84 notificações internacionais emitidas (\`AGX-CERT-2026-*\`).
- **Destinatários Notificados:** CISA / US-CERT, CNCERT, CERT.br, NCSC-UK e ISPs de trânsito.
- **Evidências Anexadas:** Logs brutos de kernel, cabeçalhos TCP SYN e relatórios de sondagem.`;
    }
  };

  // Mock Native Bridge implementation
  window.WebMockBridge = {
    async getStatus() {
      return {
        ok: true,
        mode: 'portfolio-demo',
        isNative: false,
        isWebMock: true,
        uptime: '62 dias, 14 horas',
        ip: '100.64.0.42',
        hostname: 'vps-sentinel-demo',
        tailscale: 'mock-connected (100.64.0.0/10)',
        activeAgents: 4,
        iptablesBans: 5618,
        timestamp: new Date().toISOString()
      };
    },

    async vpsRequest(args) {
      const { service, path, method, body } = args || {};
      const cleanPath = String(path || '').split('?')[0];

      // Terminal execution simulation
      if (cleanPath === '/api/vps/system/exec') {
        const cmd = ((body && body.command) || '').trim();
        const output = TERMINAL_COMMANDS[cmd] ||
          (cmd.startsWith('fail2ban') ? TERMINAL_COMMANDS['fail2ban-client status sshd'] :
          (cmd.startsWith('docker') ? TERMINAL_COMMANDS['docker ps'] :
          (cmd.startsWith('iptables') ? `Chain INPUT (policy DROP 5618 packets, 248K bytes)\n pkts bytes target     prot opt in     out     source               destination\n 5618  248K DROP       0    --  enp0s6 *       0.0.0.0/0            0.0.0.0/0            match-set PERMANENT_BANS src\n 1492  118K ACCEPT     0    --  lo     *       0.0.0.0/0            0.0.0.0/0\n  840 68420 ACCEPT     0    --  tailscale0 *   0.0.0.0/0            0.0.0.0/0` :
          `[DEMO ROOT SSH: OK]\nComando: ${cmd}\nRetorno: Executado com código de saída 0 no ambiente de demonstração.`)));

        return {
          ok: true,
          command: cmd,
          stdout: output,
          stderr: '',
          code: 0
        };
      }

      // Deep Audit simulation
      if (cleanPath === '/api/vps/security/audit-deep') {
        return {
          ok: true,
          timestamp: new Date().toISOString(),
          score: 100,
          status: 'SECURE_PASS',
          checks: [
            { name: 'SSHD Root Password Auth', result: 'DISABLED (Keys Only)', status: 'PASS' },
            { name: 'Kernel IPSET Drop Filter', result: 'ACTIVE (5.618 IPs)', status: 'PASS' },
            { name: 'Fail2ban Recidive Jail', result: 'ACTIVE (Bantime = -1)', status: 'PASS' },
            { name: 'Tailscale ACL Zero-Trust', result: 'ENFORCED', status: 'PASS' },
            { name: 'Samsung Knox Hardware Vault', result: 'VERIFIED', status: 'PASS' },
            { name: 'Daily Encrypted Cold Backup', result: 'VALIDATED SHA-256', status: 'PASS' }
          ]
        };
      }

      // Check Git Repositories
      if (cleanPath === '/api/vps/repos/check') {
        return {
          ok: true,
          timestamp: new Date().toISOString(),
          repos: [
            { name: 'vps-manager-android', branch: 'main', clean: true, commits_ahead: 0 },
            { name: 'agencyx-core', branch: 'main', clean: true, commits_ahead: 0 },
            { name: 'osint-cert-hunter', branch: 'main', clean: true, commits_ahead: 0 },
            { name: 'sentinel-kernel-shield', branch: 'main', clean: true, commits_ahead: 0 }
          ]
        };
      }

      // Block IP simulation
      if (cleanPath === '/api/vps/firewall/block') {
        const target = (body && body.target) || '198.51.100.99';
        return {
          ok: true,
          message: `IP ${target} inserido com sucesso no ipset permanente do Kernel`,
          target,
          permanent_count: 5619
        };
      }

      // Unblock IP simulation
      if (cleanPath === '/api/vps/firewall/unblock') {
        const target = (body && body.target) || '';
        return {
          ok: true,
          message: `IP ${target} removido do ipset`,
          target
        };
      }

      // Default mock fallback
      return { ok: true, simulated: true, path: cleanPath };
    },

    async fetchDiscordMessages({ channelId, limit = 25 }) {
      return { ok: true, channelId, limit };
    },

    async sendDiscordMessage({ channelId, content }) {
      return {
        ok: true,
        message_id: 'mock_msg_' + Date.now(),
        timestamp: new Date().toISOString(),
        content
      };
    },

    async callN8nAgent({ agentId, message }) {
      let responderKey = 'sentinel';
      if (agentId === 'fKMt8yAiVhdy6b1G') {
        responderKey = message.toLowerCase().includes('cert') ? 'cert' : 'osint';
      } else if (message.toLowerCase().includes('backup') || message.toLowerCase().includes('firewall')) {
        responderKey = 'guardian';
      }
      const fn = AGENT_RESPONSES[responderKey] || AGENT_RESPONSES.sentinel;
      return {
        ok: true,
        agentId,
        response: fn(message)
      };
    },

    async requestNotificationPermission() {
      return { granted: true };
    },

    async notifySecurityAlert(payload) {
      console.log('🔔 [Simulação Notificação Web]:', payload.title, payload.body);
      return { ok: true };
    }
  };

  // Mock Samsung Knox Biometrics plugin
  window.WebMockBiometric = {
    async isAvailable() {
      return { available: true, hasBiometrics: true, type: 'Samsung Knox Fingerprint & Face' };
    },
    async verify() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ verified: true, method: 'Samsung Knox Hardware Key' });
        }, 350);
      });
    }
  };

  // Inject into Capacitor global namespace if not natively present
  if (!window.Capacitor) {
    window.Capacitor = {
      isNativePlatform: () => false,
      Plugins: {
        VpsBridge: window.WebMockBridge,
        SamsungBiometric: window.WebMockBiometric
      }
    };
  } else {
    window.Capacitor.Plugins = window.Capacitor.Plugins || {};
    if (!window.Capacitor.Plugins.VpsBridge) {
      window.Capacitor.Plugins.VpsBridge = window.WebMockBridge;
    }
    if (!window.Capacitor.Plugins.SamsungBiometric) {
      window.Capacitor.Plugins.SamsungBiometric = window.WebMockBiometric;
    }
  }
})();
