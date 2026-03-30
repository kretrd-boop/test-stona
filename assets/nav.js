/* ═══════════════════════════════════════════════════
   Mansard — nav.js
   ═══════════════════════════════════════════════════ */
(function () {

  const PRODUCTS = [
    {
      href:     '/produkty/blacha-trapezowa/',
      label:    'T18',
      title:    'Blacha trapezowa T18',
      desc:     'Hale, garaże, budynki gospodarcze',
      img:      'https://mansard.pl/wp-content/uploads/2025/12/T-18_2-1.png',
      iconImg:  'https://mansard.pl/wp-content/uploads/2024/01/IKONY_Blacha-trapezowa.png',
    },
    {
      href:     '/produkty/blachodachowka/gymir/',
      label:    'Gymir',
      title:    'Blachodachówka Gymir',
      desc:     'Domy jednorodzinne, siedliska',
      img:      'https://mansard.pl/wp-content/uploads/2023/12/gymir.png',
      iconImg:  'https://mansard.pl/wp-content/uploads/2023/12/IKONY_Blachodachowka-panelowa.png',
    },
    {
      href:     '/produkty/blacha-na-rabek-stojacy/',
      label:    'Asgard',
      title:    'Blacha na rąbek stojący',
      desc:     'Nowoczesne domy, projekty architektoniczne',
      img:      'https://mansard.pl/wp-content/uploads/2024/01/Asgard.png',
      iconImg:  'https://mansard.pl/wp-content/uploads/2023/12/IKONY_Rabek-stojacy.png',
    },
    {
      href:     '/produkty/blacha-elewacyjna/',
      label:    'T6',
      title:    'Blacha elewacyjna T6',
      desc:     'Elewacje budynków, ogrodzenia, fasady',
      img:      'https://mansard.pl/wp-content/uploads/2024/01/T6_Grafit-removebg-preview.png',
      icon:     '<path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
    },
  ];

  const ACCESSORIES = [
    {
      href:     '/produkty/system-rynnowy-frigg/',
      label:    'Frigg',
      title:    'System rynnowy Frigg',
      desc:     'Do każdego dachu: trapez, rąbek, dachówka',
      img:      'https://mansard.pl/wp-content/uploads/2024/01/Rynna_2-removebg-preview.png',
      iconImg:  'https://mansard.pl/wp-content/uploads/2023/12/IKONY_System-rynnowy.png',
    },
    {
      href:  '/produkty/obrobki-blacharskie/',
      label: 'Na wymiar',
      title: 'Obróbki blacharskie',
      desc:  'Kalenicy, okapy, narożniki - na każdy dach',
      img:   'https://mansard.pl/wp-content/uploads/2024/01/Pas_nardrynnowy_2_1-removebg-preview.png',
      icon:  '<path stroke-linecap="round" stroke-linejoin="round" d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path stroke-linecap="round" stroke-linejoin="round" d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>',
    },
    {
      href:  '/produkty/parapety/',
      label: 'Zewnętrzne',
      title: 'Parapety',
      desc:  'Zewnętrzne podokienniki do każdego okna',
      img:   'https://mansard.pl/wp-content/uploads/2024/01/Parapet_podgiety_1-removebg-preview.png',
      icon:  '<path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16M8 4v16M16 4v16"/>',
    },
    {
      href:  '/produkty/akcesoria/',
      label: 'Akcesoria',
      title: 'Akcesoria',
      desc:  'Śruby, uszczelki, taśmy',
      img:   'https://mansard.pl/wp-content/uploads/2025/12/T-18_2-1.png',
      icon:  '<circle cx="12" cy="12" r="3"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/>',
    },
  ];

  function itemHTML(p) {
    const iconEl = p.iconImg
      ? `<img src="${p.iconImg}" alt="${p.label}" style="width:32px;height:32px;object-fit:contain" />`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${p.icon}</svg>`;
    return `<a href="${p.href}" class="nav-dropdown-item" data-preview-img="${p.img}" data-preview-label="${p.label}" data-preview-name="${p.title}">
      <div class="nav-dropdown-icon">${iconEl}</div>
      <div><span class="nav-dropdown-title">${p.title}</span><span class="nav-dropdown-desc">${p.desc}</span></div>
    </a>`;
  }

  const defaultPreview = PRODUCTS[0];

  const navHTML = `
<header id="mainHeader" class="sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-6 flex items-center justify-between" style="height:80px">

    <a href="/"><img id="navLogo" src="/brand_assets/logo_white.png" alt="Mansard" style="height:60px" /></a>

    <nav id="mainNav" class="items-center gap-1" style="display:flex;margin-left:auto;margin-right:24px">

      <!-- PRODUKTY -->
      <div class="nav-item">
        <button class="nav-trigger" id="triggerProdukty" onclick="mansardNav.toggle('produkty')" aria-expanded="false">
          Produkty
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="nav-dropdown nav-dropdown-mega" id="dropdownProdukty">
          <div class="nav-dropdown-list">
            <div class="nav-dropdown-section">Pokrycia dachowe</div>
            ${PRODUCTS.map(itemHTML).join('')}
            <div class="nav-dropdown-divider"></div>
            <div class="nav-dropdown-section">Systemy i akcesoria</div>
            ${ACCESSORIES.map(itemHTML).join('')}
          </div>
          <div class="nav-dropdown-preview">
            <img id="navPreviewImg" class="nav-preview-img" src="${defaultPreview.img}" alt="${defaultPreview.title}" />
            <div>
              <div class="nav-preview-label" id="navPreviewLabel">${defaultPreview.label}</div>
              <div class="nav-preview-name" id="navPreviewName">${defaultPreview.title}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- USŁUGI -->
      <div class="nav-item">
        <button class="nav-trigger" id="triggerUslugi" onclick="mansardNav.toggle('uslugi')" aria-expanded="false">
          Usługi
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="nav-dropdown" id="dropdownUslugi" style="min-width:240px">
          <div style="padding:8px">
            <a href="/uslugi/ciecie-laserowe/" class="nav-dropdown-item">
              <div class="nav-dropdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg></div>
              <div><span class="nav-dropdown-title">Cięcie laserem</span><span class="nav-dropdown-desc">Laser światłowodowy Fiber, krótkie terminy</span></div>
            </a>
            <a href="/uslugi/malowanie-proszkowe/" class="nav-dropdown-item">
              <div class="nav-dropdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg></div>
              <div><span class="nav-dropdown-title">Malowanie proszkowe</span><span class="nav-dropdown-desc">Lakiernia do 4000×2000 mm, pełna paleta RAL</span></div>
            </a>
          </div>
        </div>
      </div>

      <a href="/realizacje/" class="nav-link" style="padding:6px 12px">Realizacje</a>
      <a href="/blog/" class="nav-link" style="padding:6px 12px">Blog</a>
      <a href="/do-pobrania/" class="nav-link" style="padding:6px 12px">Do pobrania</a>
      <a href="/kontakt/" class="nav-link" style="padding:6px 12px">Kontakt</a>
    </nav>

    <a href="/bezplatna-wycena/" class="btn-red" style="display:inline-flex;align-items:center;gap:8px;font-size:.875rem;white-space:nowrap">
      Wyceń dach
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
    </a>

    <button id="mobileToggle" class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-white/10 transition-colors" onclick="mansardNav.toggleMobile()" aria-label="Menu">
      <span id="ham1" style="width:20px;height:2px;background:#fff;border-radius:2px;transition:transform .3s,opacity .3s;display:block"></span>
      <span id="ham2" style="width:20px;height:2px;background:#fff;border-radius:2px;transition:opacity .3s;display:block"></span>
      <span id="ham3" style="width:20px;height:2px;background:#fff;border-radius:2px;transition:transform .3s,opacity .3s;display:block"></span>
    </button>
  </div>

  <div class="mobile-menu" id="mobileMenu">
    <div style="padding:8px 0 4px">
      <div class="mob-section">Pokrycia dachowe</div>
      <a href="/produkty/blacha-trapezowa/" class="mob-link"><div class="mob-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9"/></svg></div><span>Blacha trapezowa T18</span></a>
      <a href="/produkty/blachodachowka/gymir/" class="mob-link"><div class="mob-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg></div><span>Blachodachówka Gymir</span></a>
      <a href="/produkty/blacha-na-rabek-stojacy/" class="mob-link"><div class="mob-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5h16M4 12h16M4 19h16"/></svg></div><span>Blacha na rąbek stojący</span></a>
      <a href="/produkty/blacha-elewacyjna/" class="mob-link"><div class="mob-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"/></svg></div><span>Blacha elewacyjna T6</span></a>
      <div class="nav-dropdown-divider" style="margin:12px 0"></div>
      <div class="mob-section">Rynny i akcesoria</div>
      <a href="/produkty/system-rynnowy-frigg/" class="mob-link"><div class="mob-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/></svg></div><span>System rynnowy Frigg</span></a>
      <a href="/produkty/obrobki-blacharskie/" class="mob-link"><div class="mob-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/></svg></div><span>Obróbki blacharskie</span></a>
      <a href="/produkty/parapety/" class="mob-link"><div class="mob-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16"/></svg></div><span>Parapety</span></a>
      <div class="nav-dropdown-divider" style="margin:12px 0"></div>
      <div class="mob-section">Usługi</div>
      <a href="/uslugi/ciecie-laserowe/" class="mob-link"><div class="mob-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3"/></svg></div><span>Cięcie laserowe</span></a>
      <a href="/uslugi/malowanie-proszkowe/" class="mob-link"><div class="mob-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12"/></svg></div><span>Malowanie proszkowe</span></a>
      <div class="nav-dropdown-divider" style="margin:12px 0"></div>
      <div class="mob-section">Firma</div>
      <a href="/realizacje/" class="mob-link"><div class="mob-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"/></svg></div><span>Realizacje</span></a>
      <a href="/blog/" class="mob-link"><div class="mob-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg></div><span>Blog</span></a>
      <a href="/do-pobrania/" class="mob-link"><div class="mob-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg></div><span>Do pobrania</span></a>
      <a href="/kontakt/" class="mob-link"><div class="mob-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div><span>Kontakt</span></a>
    </div>
    <div style="margin-top:auto;padding:20px 0 8px">
      <a href="/bezplatna-wycena/" class="btn-red" style="width:100%;text-align:center;display:block;padding:16px;font-size:16px">Wyceń dach bezpłatnie →</a>
    </div>
  </div>
</header>`;

  const el = document.getElementById('site-nav');
  if (el) el.outerHTML = navHTML;

  // ── NAV JS ──────────────────────────────────────
  window.mansardNav = {
    toggle(id) {
      const cap = id.charAt(0).toUpperCase() + id.slice(1);
      const dropdown = document.getElementById('dropdown' + cap);
      const trigger  = document.getElementById('trigger'  + cap);
      const isOpen   = dropdown.classList.contains('open');
      this.closeAll();
      if (!isOpen) {
        dropdown.classList.add('open');
        trigger.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    },
    closeAll() {
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
      document.querySelectorAll('.nav-trigger').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-expanded', 'false');
      });
    },
    toggleMobile() {
      const menu = document.getElementById('mobileMenu');
      const open = menu.classList.toggle('open');
      document.body.style.overflow = open ? 'hidden' : '';
      const h1 = document.getElementById('ham1');
      const h2 = document.getElementById('ham2');
      const h3 = document.getElementById('ham3');
      if (open) {
        h1.style.transform = 'translateY(7px) rotate(45deg)';
        h2.style.opacity   = '0';
        h3.style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        h1.style.transform = ''; h2.style.opacity = '1'; h3.style.transform = '';
      }
    }
  };

  // Hover open/close
  let navCloseTimer;
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      clearTimeout(navCloseTimer);
      const trigger = item.querySelector('.nav-trigger');
      if (trigger) {
        const id = trigger.id.replace('trigger', '').toLowerCase();
        window.mansardNav.toggle(id);
      }
    });
    item.addEventListener('mouseleave', () => {
      navCloseTimer = setTimeout(() => window.mansardNav.closeAll(), 350);
    });
    // Cancel close when cursor enters the dropdown itself (covers the gap)
    const dropdown = item.querySelector('.nav-dropdown');
    if (dropdown) {
      dropdown.addEventListener('mouseenter', () => clearTimeout(navCloseTimer));
      dropdown.addEventListener('mouseleave', () => {
        navCloseTimer = setTimeout(() => window.mansardNav.closeAll(), 350);
      });
    }
  });

  // Preview panel
  document.querySelectorAll('#dropdownProdukty .nav-dropdown-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      const img   = item.dataset.previewImg;
      const label = item.dataset.previewLabel;
      const name  = item.dataset.previewName;
      if (!img) return;
      const previewImg   = document.getElementById('navPreviewImg');
      const previewLabel = document.getElementById('navPreviewLabel');
      const previewName  = document.getElementById('navPreviewName');
      if (previewImg) {
        previewImg.style.opacity = '0';
        setTimeout(() => { previewImg.src = img; previewImg.alt = name; previewImg.style.opacity = '1'; }, 150);
      }
      if (previewLabel) previewLabel.textContent = label;
      if (previewName)  previewName.textContent  = name;
      document.querySelectorAll('#dropdownProdukty .nav-dropdown-item').forEach(i => i.classList.remove('preview-active'));
      item.classList.add('preview-active');
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-item')) window.mansardNav.closeAll();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') window.mansardNav.closeAll();
  });

  // Scroll: transparent → solid (tylko strona główna); reszta zawsze solid
  const logoEl = document.getElementById('navLogo');
  const isHome = location.pathname === '/' || location.pathname === '/index.html';

  function onScroll() {
    const h = document.getElementById('mainHeader');
    if (!h) return;
    const scrolled = !isHome || window.scrollY > 40;
    h.classList.toggle('scrolled', scrolled);
    if (logoEl) logoEl.src = scrolled ? '/brand_assets/logo.png' : '/brand_assets/logo_white.png';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load
})();
