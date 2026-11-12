# Stan Terraformacji Marsa

Aplikacja towarzysząca do gry *Terraformacja Marsa*: losowanie (plansza, kolonie, nagrody, tytuły, korporacje, preludia, pierwszy gracz), zegar rozgrywki, punktacja, historia, statystyki (miesiąc/kwartał/półrocze/rok), konferencje prasowe, raporty AI, motywy i własne kolory.

## Aplikacja online

**https://slash1024.github.io/stan-terraformacji-marsa/**

Instaluje się na telefonie: Android (Chrome) → menu ⋮ → „Zainstaluj aplikację";
iPhone (Safari) → Udostępnij → „Do ekranu początkowego". Działa offline.
Wdrożenie i aktualizacje: `DEPLOY.md`.

## Praca nad projektem
```bash
npm install                      # tylko dla testu (playwright)
npx playwright install chromium  # raz
npm run build                    # -> docs/stan-terraformacji-marsa.html
npm test                         # build + smoke test
```
Edytuj `src/app.js` i `src/styles.css`, buduj, odśwież plik z `docs/`. Szczegóły architektury: `CLAUDE.md` (Claude Code czyta go automatycznie).

Start w Claude Code: `cd tfm-project && claude`, potem np. „Przeczytaj CLAUDE.md i zaproponuj nowy układ interfejsu ekranu GRA”.

## Wdrożenie na telefon
1. Wgraj `docs/stan-terraformacji-marsa.html` jako `index.html` na https://app.netlify.com/drop (albo GitHub Pages).
2. Otwórz link w telefonie → Chrome: ⋮ → „Dodaj do ekranu głównego”; Safari: Udostępnij → „Do ekranu początkowego”.

## Kopia danych
Dane są w `localStorage` przeglądarki danego urządzenia. Ustawienia → eksport JSON → import na innym urządzeniu. Rób eksport przed każdą zmianą adresu aplikacji (inny adres = pusty localStorage).
