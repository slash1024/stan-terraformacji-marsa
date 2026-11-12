# Wdrożenie — telefon i aktualizacje

Aplikacja jest PWA: instaluje się na telefonie jak zwykła apka (ikona na ekranie
głównym, pełny ekran, działa offline), a aktualizacje docierają przez zwykłe
wrzucenie nowych plików na hosting.

## Co powstaje przy buildzie

```bash
npm run build
```

```
docs/
  index.html                      ← aplikacja (to otwiera przeglądarka)
  sw.js                           ← service worker: offline + wykrywanie aktualizacji
  manifest.webmanifest            ← nazwa, ikony, kolory, tryb pełnoekranowy
  icon-192.png  icon-512.png  icon-maskable-512.png  apple-touch-icon.png
  stan-terraformacji-marsa.html   ← ta sama apka w jednym pliku (do wysłania mailem)
```

Na hosting idzie **cała zawartość `docs/`**, nie pojedynczy plik.

## Podgląd lokalny

```bash
npm run serve
```

Otwórz `http://localhost:8080`. Service worker działa tylko na `localhost`
i na `https://` — przy pliku otwartym prosto z dysku sam się wyłącza.

## Jak działa aktualizacja

Każdy build dostaje własną wersję: numer z `package.json` plus znacznik czasu,
np. `1.0.0+20261112-2112`. Wersja wchodzi w nazwę cache'u service workera, więc
dla przeglądarki **każdy build jest nową wersją** — nie trzeba niczego ręcznie
podbijać.

Po wrzuceniu nowych plików na hosting:

1. Użytkownik otwiera apkę. Service worker w tle pobiera nową wersję.
2. Na dole pojawia się pasek **„Jest nowa wersja aplikacji" + [Odśwież]**.
3. Kliknięcie przeładowuje apkę do nowej wersji. „×" odkłada to na później.
4. Bez kliknięcia nowa wersja wejdzie i tak — przy kolejnym pełnym zamknięciu apki.

Apka sprawdza aktualizacje przy każdym powrocie do niej (zdarzenie
`visibilitychange`), więc na telefonie wystarczy przełączyć się na nią z innej apki.

**Dane użytkownika zostają** — rozgrywki, gracze i ustawienia siedzą w
localStorage, którego aktualizacja nie rusza. Zmiana kształtu danych nadal
wymaga migracji (patrz CLAUDE.md).

## Gdzie to postawić

### GitHub Pages — zalecane

Hosting i kopia zapasowa kodu w jednym. Ten projekt **nie jest dziś repozytorium
git**, a źródła raz już zostały utracone, więc to załatwia dwie sprawy naraz.

```bash
git init && git add -A && git commit -m "Stan Terraformacji Marsa"
```

Potem repozytorium na GitHubie (może być prywatne, Pages działa też dla takich
na płatnych planach; dla darmowego konta repo musi być publiczne), `git push`,
a w **Settings → Pages** źródło: *Deploy from a branch*, gałąź `main`, katalog `/docs`.

Build celuje w `docs/` nie bez powodu: GitHub Pages potrafi serwować wyłącznie z katalogu
głównego repozytorium albo z `/docs`. Innego folderu nie da się tam wskazać.

Aktualizacja = `npm run build`, `git commit`, `git push`. Po minucie jest u ludzi.

### Netlify Drop — jeśli nie chcesz gita

Wejdź na `app.netlify.com/drop` i przeciągnij tam katalog `docs/`. Dostajesz
adres `https://…netlify.app`. Aktualizacja = przeciągnięcie katalogu jeszcze raz.
Bez założonego konta adres jest tymczasowy — żeby był stały, trzeba stronę
„claim".

## Instalacja na telefonie

- **Android (Chrome):** wejdź na adres → menu ⋮ → „Zainstaluj aplikację".
  Zwykle sam wyskakuje baner instalacyjny.
- **iPhone (Safari):** wejdź na adres → przycisk Udostępnij →
  „Do ekranu początkowego". Safari nie pokazuje banera, trzeba ręcznie.

Po instalacji apka chodzi bez paska adresu i działa bez internetu.
Internet jest potrzebny tylko do raportów AI i do pobrania fontów przy
pierwszym uruchomieniu.
