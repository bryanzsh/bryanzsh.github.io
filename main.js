/* ════════════════════════════════════════════════════════════════════
   ▸ CV DATA — edita TODOS tus datos únicamente en este bloque.
   ▸ Guarda y recarga: la página se regenera sin tocar nada más.
   ════════════════════════════════════════════════════════════════════ */
const CV = {
  meta: {
    name: 'Bryan Vitor Diaz',
    role: 'ADMINISTRADOR DE REDES Y COMUNICACIONES / ANALISTA DE CIBERSEGURIDAD',
    tagline:
      'Administrador de Redes y Comunicaciones / Analista de Ciberseguridad, con 2 años de ' +
      'experiencia en redes, ciberseguridad (SOC/NOC) y ethical hacking. Amplia experiencia en la ' +
      'administración y configuración de equipos CheckPoint Firewall, Palo Alto FW, Fortinet ' +
      '(FortiGate, FortiWeb, FortiManager, FortiAnalyzer), y en herramientas SIEM como IBM QRadar, ' +
      'Cortex Palo Alto, Sentinel, Defender y Trend Micro.',
    github: 'https://github.com/bryanzsh',
    linkedin: 'https://www.linkedin.com/in/bryan-alexis-vitor-diaz/'
  },

  about: [
    'Administrador de Redes y Comunicaciones y Analista de Ciberseguridad con 2 años de experiencia en redes, SOC/NOC y ethical hacking.',
    'Amplia experiencia en la administración y configuración de equipos de seguridad perimetral: CheckPoint, Palo Alto y Fortinet (FortiGate, FortiWeb, FortiManager, FortiAnalyzer).',
    'Opero a diario herramientas SIEM, EDR y XDR como IBM QRadar, Cortex Palo Alto, Microsoft Sentinel, Defender, SentinelOne, Trend Micro y CrowdStrike para detectar, analizar y escalar incidentes cumpliendo SLAs.',
    'Certificado CCNA, NSE4, NSE7 SD-WAN, eJPTv2, IBM QRadar, CrowdStrike y LPI Linux; con paso firme hacia el análisis ofensivo y el diseño de redes seguras.'
  ],

  experience: [
    {
      company: 'WIN EMPRESAS',
      role: 'Analista CyberSOC N1',
      period: 'Ene 2025 — Sep 2025',
      duration: '9 meses',
      bullets: [
        'Gestión de herramientas SIEM y monitorización: IBM QRadar, Cortex Palo Alto, Lumu, Observium y Zabbix.',
        'Administración de firewalls FortiGate y Palo Alto y realización de backups a Palo Alto, Panorama, F5 BIG-IP, Infoblox y Aruba ClearPass.',
        'Escaneo y análisis de vulnerabilidades con Burp Suite Enterprise y Nessus sobre la infraestructura de los clientes.',
        'Administración de Sophos EDR y antiSPAM para diferentes clientes, reduciendo el ruido de alertas de primer nivel.'
      ]
    },
    {
      company: 'STEFANINI LATAM',
      role: 'Analista de Ciberseguridad SOC & NOC',
      period: 'Ago 2024 — Ene 2025',
      duration: '6 meses',
      bullets: [
        'Operación de herramientas SOC/NOC: Microsoft Sentinel, xDefender, Trend Micro, SentinelOne, IBM QRadar, Axur, FortiSIEM, CrowdStrike, Zabbix y Cacti.',
        'Monitoreo de alertas y eventos de SIEM, EDR y XDR con reporte inmediato y cumplimiento de SLAs.',
        'Configuración de FortiGate y gestión de reglas y políticas en FortiManager para distintos clientes.',
        'Pruebas periódicas de alta disponibilidad (HA) en routers Cisco y Huawei y backups semanales de las reglas de los FortiGate.'
      ]
    },
    {
      company: 'MINERA FIDAMI S.A.',
      role: 'Técnico de seguridad perimetral',
      period: 'Ene 2024 — Feb 2024',
      duration: '2 meses',
      bullets: [
        'Implementación del firewall FortiGate para la minera, con políticas, VPN SSL, NAT, IPS y Web Filter.',
        'Conexión segura entre dos sedes mediante dos FortiGate y FortiClient para el acceso del usuario a su servidor de archivos.',
        'Segmentación del tráfico mediante VLANs en switches Cisco.'
      ]
    },
    {
      company: 'TECSUP',
      role: 'Soporte de Tecnología Digital',
      period: 'Mar 2023 — Jul 2023',
      duration: '6 meses',
      bullets: [
        'Configuración e implementación de switches y routers Cisco y Huawei para la infraestructura académica.',
        'Inventariado y gestión de equipos informáticos (PCs y laptops) del campus.',
        'Atención de soporte de primera línea (service desk) para docentes y alumnos.'
      ]
    }
  ],

  skills: [
    { category: 'Redes e infraestructura', items: ['Cisco CCNA', 'Switch/Router Cisco y Huawei', 'VLANs', 'VPN SSL', 'SD-WAN NSE7'] },
    { category: 'Firewalls y perimetral', items: ['CheckPoint', 'Palo Alto / Panorama', 'FortiGate', 'FortiWeb', 'FortiManager', 'FortiAnalyzer'] },
    { category: 'SIEM y SOC', items: ['IBM QRadar', 'Cortex Palo Alto', 'Microsoft Sentinel', 'Microsoft Defender', 'Trend Micro', 'FortiSIEM'] },
    { category: 'EDR / XDR', items: ['SentinelOne', 'CrowdStrike', 'Sophos EDR'] },
    { category: 'Monitorización (NOC)', items: ['Zabbix', 'Cacti', 'Observium', 'Lumu'] },
    { category: 'Seguridad ofensiva', items: ['eJPTv2', 'Nessus', 'Burp Suite Enterprise', 'Ethical Hacking'] },
    { category: 'Sistemas y ITSM', items: ['Linux (LPI)', 'Jira', 'FreshService', 'ServiceAide', 'TheHive', 'Service Desk'] }
  ],

  certificates: [
    { name: 'Cisco CCNA', issuer: 'Cisco', url: 'https://drive.google.com/file/d/1fzDXI-E8YLgj6Nm4361Of79Jn97LDwkC/view' },
    { name: 'Fortinet NSE4', issuer: 'Fortinet', url: 'https://www.credly.com/badges/29f219e3-39b4-4ee0-bfdd-0661e4b98534' },
    { name: 'SIEM IBM QRadar', issuer: 'IBM', url: 'https://drive.google.com/file/d/1YkDTcK5lUkRlJ29lPHEyuQlDhrm_fwZa/view?usp=sharing' },
    { name: 'Ethical Hacking', issuer: 'EC-Council (CodeRed)', url: 'https://codered.eccouncil.org/certificate/52c989d0-1c70-4a33-adcb-7f854893420e?logged=false' },
    { name: 'Fortinet NSE7 SD-WAN', issuer: 'Fortinet', url: 'https://drive.google.com/file/d/1jOE36Gqz8HIv9zx85-kD250DKyZ2kTrQ/view' },
    { name: 'eJPTv2', issuer: 'INE Security', url: 'https://certs.ine.com/8bc3c359-3523-427c-a195-dd2e9c2ec91d#acc.AWZPly5T' },
    { name: 'Ethical Hacking', issuer: 'S4vitar · Mastermind', url: 'https://cdn.mastermind.ac/certificates/67ad2a66c41641bfabffe7e0f7267be0.png' },
    { name: 'LPI Linux', issuer: 'LPI', url: 'https://drive.google.com/file/d/1-v2NESJM1rEFnOXmWDbl0Wrq73fvCFs0/view' }
  ],

  education: [
    {
      school: 'TECSUP',
      program: 'Administración de Redes y Comunicaciones',
      period: 'Carrera terminada — Julio 2024',
      status: 'Terminada',
      monogram: 'T',
      accent: '#1d4ed8',
      img: 'https://www.tecsup.edu.pe/wp-content/uploads/2024/03/MG_7248-1.jpg'
    },
    {
      school: 'EPE UPC',
      program: 'Ingeniería de Redes y Comunicaciones',
      period: 'Julio 2024 — Actualidad',
      status: 'En curso',
      monogram: 'U',
      accent: '#e53935',
      img: 'https://gestion.pe/resizer/8ImTOn1xf0ImRHnCf0vBfKBgxew=/5590x3726/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/2HUMWVGUBZC4FNL3X7G6P6GSLY.jpg',
      lg: true
    }
  ],

  languages: [
    { name: 'Español', level: 'Nativo', pct: 100 },
    { name: 'Inglés', level: 'Intermedio B1', pct: 60 }
  ]
};

/* ════════════════════════════════════════════════════════════════════
   ▸ JUEGO DE PRESENTACIÓN — no tocar de aquí en adelante.
   ════════════════════════════════════════════════════════════════════ */

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Tema oscuro / claro ─────────────────────────────────────── */
const THEME_KEY = 'cv:theme';

function initialTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const themeToggle = document.getElementById('themeToggle');
const themeLabel = themeToggle.querySelector('.icon-btn-label');

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  themeToggle.setAttribute(
    'aria-label',
    theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'
  );
  themeLabel.textContent = theme === 'dark' ? 'tema: oscuro' : 'tema: claro';
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
}

applyTheme(initialTheme());
themeToggle.addEventListener('click', toggleTheme);

/* ── Render de secciones desde CV ────────────────────────────── */
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function render() {
  const M = CV.meta;

  document.querySelector('.print-header .ph-name').textContent = M.name;
  document.querySelector('.print-header .ph-role').textContent = M.role;
  document.querySelector('.print-header .ph-contact').textContent =
    `${M.github.replace(/^https?:\/\//, '')} · ${M.linkedin.replace(/^https?:\/\//, '')}`;

  const contacts = [
    { k: 'GH', text: M.github.replace(/^https?:\/\//, ''), href: M.github },
    { k: 'in', text: M.linkedin.replace(/^https?:\/\//, ''), href: M.linkedin }
  ];
  document.getElementById('contactLinks').innerHTML =
    contacts
      .map(
        (c, i) =>
          `<a class="chip" href="${esc(c.href)}" ${i < 2 ? 'target="_blank" rel="noopener"' : ''}>` +
          `<span class="chip-k">${c.k}</span> ${esc(c.text)}</a>`
      )
      .join('');

  document.querySelector('main [data-sec="sobre-mi"].container').innerHTML =
    '<ul class="about-list">' + CV.about.map((p) => `<li>${esc(p)}</li>`).join('') + '</ul>';

  document.querySelector('main [data-sec="experiencia-laboral"].container').innerHTML = CV.experience
    .map(
      (j) => `
      <article class="job reveal">
        <header class="job-head">
          <h3 class="job-role">${esc(j.role)}</h3>
          <span class="job-company">@ ${esc(j.company)}</span>
          <span class="job-meta">${esc(j.period)} · ${esc(j.duration)}</span>
        </header>
        <ul class="job-list">${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      </article>`
    )
    .join('');

  document.querySelector('main [data-sec="skills"].container').innerHTML =
    '<div class="skills">' +
    CV.skills
      .map(
        (g) => `
        <section class="skill-group reveal">
          <h3><span class="prompt" aria-hidden="true">›</span> ${esc(g.category)}</h3>
          <ul class="tags">${g.items.map((t) => `<li class="tag">${esc(t)}</li>`).join('')}</ul>
        </section>`
      )
      .join('') +
    '</div>';

  document.querySelector('main [data-sec="certificaciones"].container').innerHTML =
    '<div class="certs">' +
    CV.certificates
      .map(
        (c, i) => `
        <a class="cert reveal" href="${esc(c.url)}" target="_blank" rel="noopener">
          <span class="cert-ico" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
          <span class="cert-name">${esc(c.name)}</span>
          <span class="cert-issuer">${esc(c.issuer)} ↗</span>
        </a>`
      )
      .join('') +
    '</div>';

  document.querySelector('main [data-sec="formacion"].container').innerHTML =
    '<div class="education">' +
    CV.education
      .map(
        (e) => `
        <article class="edu-card reveal${e.lg ? ' edu-card--lg' : ''}" style="--card-accent:${e.accent};${e.img ? ` --card-img:url("${e.img}")` : ''}">
          <div class="edu-overlay" aria-hidden="true"></div>
          <span class="edu-monogram" aria-hidden="true">${esc(e.monogram)}</span>
          <div class="edu-content">
            <h3 class="edu-school">${esc(e.school)}</h3>
            <p class="edu-program">${esc(e.program)}</p>
            <p class="edu-period">${esc(e.period)}</p>
            <span class="edu-status">${esc(e.status)}</span>
          </div>
        </article>`
      )
      .join('') +
    '</div>';

  document.querySelector('main [data-sec="idiomas"].container').innerHTML = CV.languages
    .map(
      (l) => `
      <div class="lang reveal">
        <span class="lang-name">${esc(l.name)}</span>
        <span class="lang-bar" role="img" aria-label="${esc(l.name)}: ${esc(l.level)}"><i style="width:${l.pct}%"></i></span>
        <span class="lang-level">${esc(l.level)}</span>
      </div>`
    )
    .join('');
}

/* ── Efecto de typing en el titular ──────────────────────────── */
function typeHero() {
  const box = document.getElementById('heroLines');
  const lines = [
    { prompt: '❯', text: 'whoami' },
    { prompt: '➝', text: 'bryan.vitor' },
    { prompt: '❯', text: 'cat rol.txt' },
    { prompt: '➝', text: CV.meta.role, role: true },
    { prompt: '❯', text: 'cat resumen.txt' },
    { prompt: '➝', text: CV.meta.tagline }
  ];

  if (reduced) {
    box.innerHTML =
      lines
        .map(
          (l) =>
            `<div class="tline"><span class="pl">${l.prompt}</span>` +
            `<span class="out${l.role ? ' role' : ''}">${esc(l.text)}</span></div>`
        )
        .join('') +
      '<div class="tline"><span class="pl">❯</span><span class="cursor"></span></div>';
    return;
  }

  let li = 0;
  let ci = 0;
  let el = null;

  const newLine = (l) => {
    el = document.createElement('div');
    el.className = 'tline tstep';
    const pl = document.createElement('span');
    pl.className = 'pl';
    pl.textContent = l.prompt;
    el.appendChild(pl);
    box.appendChild(el);
  };

  function appendCursor() {
    const row = document.createElement('div');
    row.className = 'tline';
    const pl = document.createElement('span');
    pl.className = 'pl';
    pl.textContent = '❯';
    row.appendChild(pl);
    const cs = document.createElement('span');
    cs.className = 'cursor';
    row.appendChild(cs);
    box.appendChild(row);
  }

  const step = () => {
    const line = lines[li];
    if (!el) newLine(line);
    ci++;
    let out = el.querySelector('.out');
    if (!out) {
      out = document.createElement('span');
      out.className = 'out' + (line.role ? ' role' : '');
      el.appendChild(out);
    }
    out.textContent = line.text.slice(0, ci);
    if (ci < line.text.length) {
      const speed = line.prompt === '❯' ? 45 : line.role ? 12 : 9;
      setTimeout(step, speed);
      return;
    }
    ci = 0;
    el = null;
    li++;
    if (li < lines.length) setTimeout(step, 280);
    else appendCursor();
  };

  step();
}

/* ── Aparición al hacer scroll ───────────────────────────────── */
function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('revealed'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((t) => io.observe(t));
}

/* ── Command palette ─────────────────────────────────────────── */
const mask = document.getElementById('paletteMask');
const input = document.getElementById('paletteInput');
const list = document.getElementById('paletteList');

const actions = [
  { id: 'theme', label: 'Alternar tema oscuro/claro', hint: ':theme', kws: 'tema color dark light oscuro claro', run: toggleTheme }
];

const secs = [...document.querySelectorAll('main section[id]')].map((sec) => {
  const body = sec.querySelector('.container');
  return {
    id: sec.id,
    label: sec.dataset.sec,
    head: sec.querySelector('h2'),
    text: (body ? body.textContent : '').toLowerCase().slice(0, 400)
  };
});

function buildItems(query) {
  const q = query.trim().toLowerCase();
  const secItems = secs.map((s) => ({
    id: `go-${s.id}`,
    label: `Ir a: ${s.label}`,
    hint: `:go ${s.id}`,
    kws: `${s.label} ${s.text}`,
    run: () => goTo(s)
  }));
  const all = [...secItems, ...actions];

  if (!q) return all;
  const matches = all.filter((it) => `${it.label} ${it.hint} ${it.kws}`.includes(q));
  return matches.length ? matches : [{ id: 'none', label: 'Sin resultados', hint: '', kws: '', noresult: true }];
}

let items = [];
let selected = -1;

function goTo(sec) {
  const h = sec.head;
  h.parentElement.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  h.setAttribute('tabindex', '-1');
  h.classList.remove('flash');
  void h.offsetWidth;
  h.classList.add('flash');
  h.focus({ preventScroll: true });
}

function updateSelection() {
  [...list.children].forEach((li, i) => {
    const sel = i === selected;
    li.setAttribute('aria-selected', sel);
    li.dataset.idx = i;
  });
  if (selected >= 0 && list.children[selected]) {
    input.setAttribute('aria-activedescendant', list.children[selected].id);
    list.children[selected].scrollIntoView({ block: 'nearest' });
  }
}

function renderList(query) {
  items = buildItems(query);
  list.innerHTML = items
    .map(
      (it, i) => `
      <li id="opt-${it.id}-${i}" class="palette-item${it.noresult ? ' no-result' : ''}" role="option"
          aria-selected="false">
        <span class="opt-label">${esc(it.label)}</span>
        ${it.hint ? `<span class="opt-hint">${esc(it.hint)}</span>` : ''}
      </li>`
    )
    .join('');
  selected = items.length ? 0 : -1;
  updateSelection();
}

function openPalette(open) {
  if (open) {
    lastFocus = document.activeElement;
    mask.hidden = false;
    renderList('');
    input.focus();
  } else {
    mask.hidden = true;
    input.setAttribute('aria-activedescendant', '');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
}

let lastFocus = null;

document.addEventListener('keydown', (e) => {
  const mod = e.ctrlKey || e.metaKey;
  if (mod && (e.key === 'k' || e.key === 'p')) {
    e.preventDefault();
    openPalette(mask.hidden);
    return;
  }
  if (e.key === 'Escape' && !mask.hidden) {
    openPalette(false);
  }
});

function runSelected() {
  const it = items[selected];
  if (!it || it.noresult) return;
  openPalette(false);
  it.run();
}

input.addEventListener('input', () => renderList(input.value));

input.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') { e.preventDefault(); selected = (selected + 1) % items.length; updateSelection(); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); selected = (selected - 1 + items.length) % items.length; updateSelection(); }
  else if (e.key === 'Home') { e.preventDefault(); selected = 0; updateSelection(); }
  else if (e.key === 'End') { e.preventDefault(); selected = items.length - 1; updateSelection(); }
  else if (e.key === 'Enter') { e.preventDefault(); runSelected(); }
  else if (e.key === 'Escape') { e.preventDefault(); openPalette(false); }
});

list.addEventListener('click', (e) => {
  const li = e.target.closest('.palette-item');
  if (!li) return;
  const idx = Number(li.dataset.idx);
  selected = idx;
  updateSelection();
  runSelected();
});

mask.addEventListener('click', (e) => {
  if (e.target === mask) openPalette(false);
});

/* ── Arranque ────────────────────────────────────────────────── */
render();
typeHero();
initReveal();