// Rejestracja service workera + pasek „jest nowa wersja". Wklejane do template.html przez build.mjs.
(function () {
  if (!('serviceWorker' in navigator)) return;
  var secure = location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if (!secure) return; // plik otwarty prosto z dysku — bez SW

  function showBar(onAccept) {
    if (document.getElementById('tfm-update')) return;
    var bar = document.createElement('div');
    bar.id = 'tfm-update';
    bar.setAttribute('role', 'status');
    bar.style.cssText = 'position:fixed;left:50%;transform:translateX(-50%);bottom:4.6rem;z-index:9999;' +
      'width:calc(100% - 2rem);max-width:468px;display:flex;align-items:center;gap:.6rem;padding:.7rem .85rem;' +
      'border:1px solid var(--orange,#f07030);border-radius:10px;background:var(--surface,#0d0b13);' +
      'color:var(--cream,#e8d8c0);font-family:var(--font-body,sans-serif);font-size:.82rem;' +
      'box-shadow:0 8px 24px rgba(0,0,0,.45)';

    var txt = document.createElement('span');
    txt.style.cssText = 'flex:1;line-height:1.35';
    txt.textContent = 'Jest nowa wersja aplikacji.';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Odśwież';
    btn.style.cssText = 'flex-shrink:0;border:1px solid var(--orange,#f07030);border-radius:7px;' +
      'background:var(--orange,#f07030);color:#150c08;font-family:var(--font-head,sans-serif);' +
      'font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;padding:.5rem .8rem;cursor:pointer';
    btn.addEventListener('click', function () {
      btn.disabled = true;
      btn.textContent = '…';
      onAccept();
    });

    var later = document.createElement('button');
    later.type = 'button';
    later.setAttribute('aria-label', 'Odłóż aktualizację');
    later.textContent = '×';
    later.style.cssText = 'flex-shrink:0;border:none;background:none;color:var(--muted,#685870);' +
      'font-size:1.15rem;line-height:1;cursor:pointer;padding:.2rem .35rem';
    later.addEventListener('click', function () { bar.remove(); });

    bar.appendChild(txt);
    bar.appendChild(btn);
    bar.appendChild(later);
    document.body.appendChild(bar);
  }

  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js', { scope: './' }).then(function (reg) {
      function offer(worker) {
        if (!worker) return;
        showBar(function () { worker.postMessage('skip-waiting'); });
      }
      // Nowa wersja czekała już przy wejściu.
      if (reg.waiting && navigator.serviceWorker.controller) offer(reg.waiting);
      reg.addEventListener('updatefound', function () {
        var nw = reg.installing;
        if (!nw) return;
        nw.addEventListener('statechange', function () {
          if (nw.state === 'installed' && navigator.serviceWorker.controller) offer(nw);
        });
      });
      // Powrót do apki na telefonie = dobry moment na sprawdzenie aktualizacji.
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') { try { reg.update(); } catch (e) {} }
      });
    }).catch(function () {});

    var reloading = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (reloading) return;
      reloading = true;
      // Flaga dla ostrzeżenia przed zamknięciem: to przeładowanie jest nasze,
      // nie przypadkowe zamknięcie okna — nie pytaj użytkownika.
      window.__tfmAllowReload = true;
      location.reload();
    });
  });
})();
