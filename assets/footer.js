/* ═══════════════════════════════════════════════════
   Mansard — footer.js
   Wstrzykuje footer do <div id="site-footer"></div>
   ═══════════════════════════════════════════════════ */
(function () {
  const footerHTML = `
<footer class="bg-[#111827] text-white pt-14 pb-8">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">

      <div class="md:col-span-2" style="grid-column: span 2">
        <img src="/brand_assets/logo_white.png" alt="Mansard" class="h-9 mb-4" />
        <p class="text-gray-400 text-sm leading-relaxed max-w-xs">Producent i dystrybutor blachy trapezowej i blachodachówki. Własna produkcja w Sanoku, stal włoska Arvedi, dostawa na Podkarpacie i okolice.</p>
      </div>

      <div>
        <h3 class="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Produkty</h3>
        <ul class="space-y-2.5 text-sm text-gray-400">
          <li><a href="/produkty/blacha-trapezowa/" class="hover:text-white transition-colors">Blacha trapezowa T18</a></li>
          <li><a href="/produkty/blachodachowka/" class="hover:text-white transition-colors">Blachodachówka Gymir</a></li>
          <li><a href="/produkty/blacha-na-rabek-stojacy/" class="hover:text-white transition-colors">Blacha na rąbek stojący</a></li>
          <li><a href="/produkty/blacha-elewacyjna/" class="hover:text-white transition-colors">Blacha elewacyjna T6</a></li>
          <li><a href="/produkty/system-rynnowy-frigg/" class="hover:text-white transition-colors">System rynnowy Frigg</a></li>
          <li><a href="/produkty/obrobki-blacharskie/" class="hover:text-white transition-colors">Obróbki blacharskie</a></li>
          <li><a href="/produkty/parapety/" class="hover:text-white transition-colors">Parapety</a></li>
          <li><a href="/uslugi/malowanie-proszkowe/" class="hover:text-white transition-colors">Malowanie proszkowe</a></li>
          <li><a href="/uslugi/ciecie-laserowe/" class="hover:text-white transition-colors">Cięcie laserem</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Informacje</h3>
        <ul class="space-y-2.5 text-sm text-gray-400">
          <li><a href="/blog/" class="hover:text-white transition-colors">Blog</a></li>
          <li><a href="/realizacje/" class="hover:text-white transition-colors">Realizacje</a></li>
          <li><a href="/gwarancje/" class="hover:text-white transition-colors">Gwarancje</a></li>
          <li><a href="/do-pobrania/" class="hover:text-white transition-colors">Do pobrania</a></li>
          <li><a href="/polityka-prywatnosci/" class="hover:text-white transition-colors">Polityka prywatności</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Kontakt</h3>
        <ul class="space-y-2.5 text-sm text-gray-400">
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#dc2626] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
            <a href="tel:+48134645520" class="hover:text-white transition-colors">+48 13 464 55 20</a>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#dc2626] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
            <a href="mailto:biuro@mansard.pl" class="hover:text-white transition-colors">biuro@mansard.pl</a>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-4 h-4 text-[#dc2626] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/></svg>
            <span>Al. Wojska Polskiego 74<br>38-500 Sanok</span>
          </li>
          <li class="flex items-start gap-2 mt-1">
            <svg class="w-4 h-4 text-[#dc2626] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span class="text-xs leading-relaxed">Pon–Pt: 6:30–15:30<br>Sob: 7:00–12:00</span>
          </li>
        </ul>
      </div>

    </div>
    <div class="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
      <p>© 2024 Mansard. Wszelkie prawa zastrzeżone.</p>
      <div class="flex gap-5">
        <a href="/polityka-prywatnosci/" class="hover:text-white transition-colors">Polityka prywatności</a>
        <a href="/gwarancje/" class="hover:text-white transition-colors">Gwarancje</a>
        <a href="/do-pobrania/" class="hover:text-white transition-colors">Do pobrania</a>
        <a href="/kontakt/" class="hover:text-white transition-colors">Kontakt</a>
      </div>
    </div>
  </div>
</footer>`;

  const el = document.getElementById('site-footer');
  if (el) el.outerHTML = footerHTML;
})();
