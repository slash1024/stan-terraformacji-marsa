# Stan Terraformacji Marsa — kontekst dla Claude Code

Polskojęzyczna aplikacja towarzysząca do gry planszowej *Terraformacja Marsa*, dostarczana jako **jeden samodzielny plik HTML** (PWA, działa offline, bez CDN). Język UI: polski. Użytkownik rozmawia po polsku.

## Komendy
- `npm run build` (albo `node build.mjs`) → składa cały katalog `docs/`: `index.html`, `sw.js`,
  `manifest.webmanifest`, ikony oraz `stan-terraformacji-marsa.html` (ta sama apka w jednym pliku).
  Każdy build dostaje wersję `<package.json version>+<data-godzina>`, wbijaną w `sw.js` i w `<meta name="app-version">`.
- `npm run serve` → build + `tools/serve.mjs` na `http://localhost:8080` (service worker działa tylko tam i na https)
- `npm run icons` → przegenerowanie ikon PWA (`tools/make-icons.mjs`, PNG składany ręcznie, zero zależności)
- **Aplikacja online: https://slash1024.github.io/stan-terraformacji-marsa/** — GitHub Pages z gałęzi `main`, katalog `/docs`.
  Aktualizacja u ludzi = `npm run build` + commit + push; po ~30 s Pages przebudowuje, użytkownik dostaje pasek „Jest nowa wersja".
- Wdrożenie i aktualizacje u użytkowników: **DEPLOY.md**
- `npm test` → build + smoke test w Chromium (wymaga `npm i` i `npx playwright install chromium`)
- Podgląd: otwórz plik z `docs/` w przeglądarce (albo `npm run serve`)

## Struktura
- `src/styles.css` — całe CSS (zmienne `--bg`, `--card-text` itd.; motywy przez `[data-theme="..."]`)
- `src/app.js` — cała aplikacja React 18 (`React.createElement`, bez JSX, bez bundlera). Pierwsza linia: `const { useState, useEffect, useRef } = React;`, ostatnia: `ReactDOM.createRoot(...)`.
- `src/template.html` — szkielet HTML ze znacznikami `/*@@CSS@@*/`, `/*@@REACT@@*/`, `/*@@REACTDOM@@*/`, `/*@@APP@@*/`, `/*@@SWREG@@*/`, `/*@@VERSION@@*/`. Nie usuwaj znaczników.
- `src/sw.js` + `src/sw-register.js` — service worker (nawigacja: sieć → cache; reszta: cache → sieć) i pasek „jest nowa wersja". Nowa wersja NIE wchodzi sama — czeka na kliknięcie albo na pełne zamknięcie apki.
- `src/manifest.webmanifest`, `src/icons/` — manifest PWA i ikony (WebP + `apple-touch-icon.png`).
- `src/avatars/*.webp` — zdjęcia graczy dołączone do aplikacji; build wbija je jako data URL w `window.TFM_AVATARS` (znacznik `/*@@AVATARS@@*/`). Nazwa pliku = klucz, etykieta z nazwy (≤3 znaki → WERSALIKI).
- `src/icons/source/` — oryginały (WebP) do konwersji.
- `tools/convert-images.mjs` — konwersja ikon i avatarów przez przeglądarkę (Node nie czyta WebP): `npm run icons`, potem otwórz `http://localhost:8099/`.
- `tools/serve.mjs` — serwer statyczny do testów PWA.
- `vendor/` — React/ReactDOM 18.2.0 UMD (production), wklejane do HTML.
- `build.mjs` — prosty sklejacz (zero zależności).

## WAŻNE: pochodzenie kodu
Oryginalne źródła JSX zostały utracone. `src/app.js` to **wynik kompilacji Babela** (czytelny, niezminifikowany, ale w ES5-ish: `_regenerator`, `_asyncToGenerator`, `_slicedToArray`, `_ref11`...). Edytuj go bezpośrednio jak zwykły JS. Pomocnicze funkcje Babela (`_xxx`) na początku pliku zostaw w spokoju. Nowy kod pisz nowoczesnym JS (async/await, arrow functions) — przeglądarki docelowe to współczesne Chrome/Safari, więc nie trzeba transpilować.
Propozycja większego refaktoru (gdy użytkownik będzie chciał zmieniać interfejs): rozbić `src/app.js` na moduły per widok i przejść na JSX + esbuild (`esbuild --bundle --jsx=automatic`), zachowując wynik jako jeden plik HTML. Rób to tylko na prośbę.

## Mapa kodu (`src/app.js`, ~7700 linii; numery linii orientacyjne)
Dane/pomocnicze: `shuffle`, `pick`, `loadData`/`saveData` (wrapper localStorage), `DEFAULT_DATA` (planszowe bazy: plansze, kolonie, nagrody, tytuły, preludia, korporacje), dźwięki `SFX` + `playTone`/`playNoise` (Web Audio), `makePool` + `JOURNALISTS` (pytania konferencji).
Widoki: `App` (nawigacja: Gra / Wyniki / Historia / Stat. / AI / Ustaw.), `GameView` → `DraftView` / `DraftModal` / `InlineLottery` (maszyna losująca na canvas z astronautami) / `CardSelectionPhase` / `FirstPlayerLottery` / `TimerView`, `ScoreView`, `HistoryView` (+ rozwijane szczegóły punktów), `MonthView`/`periodGames` (statystyki miesiąc/kwartał/półrocze/rok + tytuły), `StatsView` (`BarSVG`, `LineSVG`, `PctBar`), `AIView` (raporty przez API Anthropic), `SettingsView` (motywy + własne kolory na żywo; `hexLuminance`, `autoTextColor`, `autoMutedColor`), `PressConferenceIntro`/`PressConferenceModal`.

## localStorage (klucze)
`tfm:games`, `tfm:players`, `tfm:customData`, `tfm:customCats`, `tfm:theme`, `tfm:customTheme`, `tfm:sound`, `tfm:scoreDraft`, `tfm:lastDraft`, `tfm:corpCount`, `tfm:preludeCount`, `tfm:preludesKept`, `tfm:timerLog`, `tfm:timerHist`, `tfm:apiKey`, `tfm:skin`, `tfm:pendingDraft`, `tfm:gameStart`.

`tfm:pendingDraft` i `tfm:gameStart` utrwalają partię w toku. Bez nich odświeżenie okna nie gubiło punktów (są w `tfm:scoreDraft`) ani czasu (liczy się z `tfm:timerLog`), ale draft spadał na `tfm:lastDraft` — czyli „ostatnie losowanie w ogóle", nie „losowanie tej partii" — i apka wracała na ekran Gry, co wyglądało jak utrata wszystkiego. Oba klucze czyści zapis gry. Dodatkowo `hasUnsavedGame()` + `beforeunload` ostrzegają przed zamknięciem okna w trakcie partii; `window.__tfmAllowReload` wyłącza to ostrzeżenie dla przeładowania po aktualizacji service workera.
Eksport/import danych = JSON v2 (Ustawienia). **Nie zmieniaj kształtu danych bez migracji** — użytkownik ma realne rozgrywki zapisane w telefonie.

**Zdjęcia graczy** leżą poza localStorage: IndexedDB `tfm-photos` → store `photos` → klucz `map` → obiekt `{<id gracza>: <data URL>}`. Powód: jedno zdjęcie to ~30 KB, a localStorage ma ~5 MB na całą apkę. Klucz to `id` gracza, więc zmiana imienia nie gubi zdjęcia, a kształt `tfm:players` zostaje nietknięty. Wgrywane zdjęcia są skalowane do kwadratu 320 px (WebP 0.85) przez `photoFromFile`. **Eksport JSON v2 obejmuje zdjęcia** — pole `photos` (`{<id gracza>: <data URL>}`), opcjonalne. Starsze kopie bez tego pola importują się normalnie i **nie kasują** zdjęć już zapisanych w urządzeniu. Przy dwóch graczach kopia rośnie o ok. 95 KB. Import zdjęć działa, bo gracze i zdjęcia idą z tej samej kopii, więc id się zgadzają.

Avatary renderuje `PlayerPhoto` (zdjęcie albo inicjał na kolorze gracza). Zdjęcia czyta się hookiem `usePhotos()`, a `photoFor(photos, imięLubId)` rozwiązuje też po imieniu — zapisane rozgrywki trzymają imiona, nie id (indeks imię→id odświeża `App` przez `photosIndexPlayers`). Zapis tylko przez `photoWrite`, które powiadamia wszystkie widoki. Avatary są w: Ustawieniach (panel Gracze), Wynikach, Statystykach, widoku miesięcznym, konferencji prasowej i na ekranie losowania (`PhaseDisplay`, `CardSelectionPhase`).

## Skórka „Karta" jest domyślna

Domyślna wartość `tfm:skin` to `karta`; `src/template.html` ma już `data-skin="karta"` w `<html>`, żeby nie było mrugnięcia przed startem JS.

Karta to **papierowe karty na jasnym lnianym tle** (`--bg:#e0d5bd`, karta `#f4eddd`, atrament `#241e16`). Jedna powierzchnia = jedna paleta, więc tekst nigdzie nie zmienia jasności. Wcześniejsza wersja miała ciemny stół i wymagała przedefiniowywania tokenów wewnątrz kart — zostało to usunięte.

**Próg kontrastu automatycznego:** `autoTextColor`/`autoMutedColor` miały próg luminancji `0.35`, a punkt równowagi dla pary `#18100a`/`#e8d8c8` wypada przy `0.16`. Przy starym progu każdy kolor gracza (luminancja 0,18–0,30) dostawał jasny tekst o kontraście ~2,4:1 zamiast ciemnego o ~5,6:1. Stała `AUTO_TEXT_THRESHOLD` = 0.16. Dotyczy też własnych kolorów z Ustawień.

**Kolor gracza nigdy jako kolor tekstu.** Zaznaczony kafelek gracza ma kolor jako TŁO i napis z `autoTextColor`; `PctBar` pisze procent kolorem tekstu, a identyczność niesie kolorowy pasek pod spodem. Audyt kontrastu (skrypt liczący stosunek dla każdego napisu wobec realnego tła) przechodzi czysto na ekranach Gra, Wyniki, Statystyki, Historia i Ustawienia.

## Układy pozostałych skórek

Wszystkie zrobione w CSS, bez zmian w strukturze komponentów:

- **Terminal** — nawigacja jako klawisze funkcyjne (`F1`–`F6` doklejane przez `.nav-btn:nth-child(n)::before`, ikony ukryte), etykiety kart z prefiksem `> `, przyciski w nawiasach `[ … ]` (`.btn span::before/::after`).
- **Brutalizm** — karty jako pasy na pełną szerokość (ujemne marginesy równe paddingowi `.content`, bez bocznych ramek), tytuły sekcji 1,5 rem/900, gruba linia 5 px.
- **Rysunek** — `.content` w ramce (border + margines), nawigacja jako komórki tabelki rysunkowej z pionowymi kreskami.
- **Dziennik** — czerwony margines rysowany gradientem w `.app::before`, treść odsunięta o 46 px, nawigacja jako spis treści (ikony ukryte, zawijany rząd, aktywna pozycja podkreślona).

**Dwie pułapki znalezione audytem kontrastu:**

1. Przyciski `+`/`−` miały na sztywno `#1a1208` (zasada „czarną czcionką"). Na ciemnych skórkach dawało to kontrast **1,03**. Teraz `var(--cream)` — intencja zasady zachowana, bo `--cream` to zawsze atrament czytelny na `--surface`.
2. Brutalizmowy `#ff3b00` jako TEKST na bieli daje 3,57. Pomarańcz przyciemniony do `#cc2f00` (5,28 na bieli), a wypełnienia nim mają biały tekst, nie czarny (czarny dawałby 3,97).

**Pozostałe ekrany** (wyniki, historia, statystyki, AI) też mają układy per skórka — wszystko w CSS, na wspólnych klatkach: `.stbl`, `.rec`, `.rank-card`, `.prog-bar`, `.win-badge` oraz kafelkach statystyk, które w JS są div-ami z inline `var(--card)` (stąd selektor `[style*="var(--card)"]`). Terminal: prompt `>` przed wpisem, odznaka jako `[WIN]`, blokowe paski. Brutalizm: wpisy jako pasy na pełną szerokość, 3-pikselowa linia nagłówka tabeli. Rysunek: numeracja wpisów `POZ 01` licznikiem CSS, pełna siatka w tabeli. Dziennik: wpisy bez pudełek, odznaka zwycięzcy jako obrócona czerwona pieczątka, kropkowane separatory wierszy.

Audyt przechodzi czysto dla wszystkich pięciu skórek. Skórka klasyczna ma własne, **wcześniejsze** usterki (`--muted` #685870 na ciemnym tle = 3,11) — nietknięte.

## Zasady / reguły od użytkownika (nie łam)
- Nazwa aplikacji: **STAN TERRAFORMACJI MARSA**.
- Wszystko z losowania (plansza, karty, tytuły, kto zaczyna) trafia do historii i statystyk/raportów AI; wybór kart do gry gracze robią na końcu, tuż przed startem.
- Każdy wygląd trzyma swoją paletę na **wszystkich** ekranach, łącznie z losowaniem (zmiana z 12.11.2026 — wcześniej obowiązywało „ekran losowania zawsze na czarnym tle”). Konferencja prasowa na jasnym tle, szerokie okno rozmowy.
- Wygląd aplikacji ma być wybierany w Ustawieniach, z pięciu skórek: Terminal pokładowy, Brutalizm, Karta projektu, Rysunek techniczny, Dziennik misji. Makiety kompletu ekranów (gra, losowanie, wyniki, statystyki, historia, konferencja prasowa, raport AI): https://claude.ai/artifact/UqLUun4ErGzf3HdBCpF6XM — **warstwa tokenów wdrożona**: klucz `tfm:skin` (wartości `classic`, `terminal`, `brutal`, `karta`, `rysunek`, `dziennik`), atrybut `data-skin` na `<html>`, bloki `[data-skin="..."]` na końcu `src/styles.css`, przełącznik w Ustawieniach → zakładka **Wygląd**, pierwszy kafel. Skórka nadpisuje tylko tokeny (`--font-head`, `--font-body`, `--radius`, `--bw`, `--nav-bg`, `--hdr-bg`, `--chip-bg`, `--row-line`, `--accent-soft`, kolory). Gdy skórka jest aktywna, `data-theme` jest wymuszane na `dark` — inaczej nadpisy `[data-theme="light"]` biłyby się z tokenami. **Różnice układu z makiet (nawigacja F1–F6, spis treści w stopce Dziennika, karty na stole) jeszcze niezrobione.**
- Kontrast automatyczny: białe tło → czarne napisy, czarne kafelki → białe napisy; przyciski `+`/`-` czarną czcionką. Wszystkie kafelki (Gra, Statystyka, Historia…) używają jednego koloru „Tło kafelka” z ustawień, zmiana działa na żywo (`document.documentElement.style.setProperty`).
- Nie używaj nazw graczy w kolorach z motywu (znikały w jasnym motywie) — kolor gracza + jawne tło.
- W niewylosowanych kafelkach losowania pokazuj `----------`.
- Statystyki mają podawać procenty (gier, zwycięstw) i dane powiązane z kartami/punktami.

## Pułapki
- Zduplikowane deklaracje funkcji/stałych → `SyntaxError: Identifier ... already declared`; po każdej edycji: `node --check src/app.js` (albo `npm test`).
- Kolejność ma znaczenie tylko dla `const`/`let` na poziomie modułu; `function` są hoistowane, ale nie usuwaj `InlineLottery` (kiedyś jego brak dawał czarny ekran).
- Wszystkie `<div>` w widokach muszą się domykać — przy zmianach UI sprawdzaj w przeglądarce, nie tylko składnię.
- Edycja pola tekstowego wewnątrz komponentu zdefiniowanego **w środku** innego komponentu powoduje remount i gubienie fokusu / przeskakiwanie pytań (stąd pytania konferencji bez wpisywania własnego tekstu). Komponenty definiuj na poziomie modułu.
- Klucz API Anthropic podaje użytkownik w Ustawieniach (header `anthropic-dangerous-direct-browser-access: true`, model `claude-opus-4-5`) — nie wpisuj kluczy do kodu.
- Fonty Google (Orbitron, Exo 2) ładowane z sieci z fallbackiem; reszta działa offline.
