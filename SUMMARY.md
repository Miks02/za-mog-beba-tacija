# Beba Tacije — kako aplikacija radi

## 1. Šta je aplikacija

Beba Tacije je desktop aplikacija preko celog ekrana koja se sama pali pri svakom prijavljivanju na Windows, pušta animirani uvodni ekran sa baštom i natpisom „Volim Te“, a zatim otvara početni ekran sa šest iznenađenja: pismo, razloge, galeriju, priču, poruke „Otvori kad…“ i nebo sa sazvežđem. Napravljena je u Electronu sa Reactom 19, TypeScriptom i Tailwindom v4; razvija se na Fedori, a isporučuje kao Windows NSIS instaler.

## 2. Pokretanje i instaler

### Fedora (razvoj)

```bash
cd ~/Desktop/Projects/beba-tacije/beba-tacije
npm install
npm run dev
```

Provera kvaliteta pre commita:

```bash
npm run format
npm run lint
npm run typecheck
npm run test
npm run build
```

Produkcijski build bez instalera, za brzu proveru na Linuxu:

```bash
npm run build:unpack
./dist/linux-unpacked/beba-tacije
```

### Windows (instaler)

U PowerShellu, u kloniranom repou:

```powershell
npm ci
npm run build:win
```

Instaler je `dist\Beba Tacije-1.0.0-setup.exe`. Instalira se jednim klikom, samo za trenutnog korisnika, pravi prečice na desktopu i u Start meniju i odmah pokreće aplikaciju. Pre svakog novog izdanja povećaj `version` u `package.json`.

Rezervna opcija sa Fedore (radi jer nema native modula, ali instaler svejedno testiraj na Windowsu):

```bash
sudo dnf install -y wine
npm run build:win
```

## 3. Struktura foldera

```
.
├── build/                         ikonice za instaler (icon.ico, icon.png)
├── resources/                     ikonica prozora na Linuxu (icon.png)
├── design/                        originalni dizajn (*.dc.html), samo specifikacija, kod ga nikad ne uvozi
├── docs/                          pravila projekta: arhitektura, kod, stil, animacije, ekrani, Electron
├── .claude/skills/                projektni skill-ovi (port, add-screen, edit-content, add-animation, quality-check, build-installer)
└── src/
    ├── shared/                    IPC kanali i tipovi koje dele main i preload
    ├── main/                      Electron main proces: prozor, jedna instanca, bezbednost, prečice, autostart, IPC
    ├── preload/                   contextBridge koji izlaže window.api i njegov tip
    └── renderer/
        ├── index.html             ulazna HTML stranica sa strogim CSP-om
        └── src/
            ├── app/               router, putanje, App, prelazi između ekrana, AudioController
            ├── assets/photos/     obrađene fotografije za galeriju
            ├── assets/music/      muzika (dodaje se na kraju)
            ├── components/layout/ PageShell, PageHeader, Backdrop
            ├── components/ui/     BackLink, IconButton, PillButton, NavTile, ScriptLabel
            ├── components/decor/  HeartIcon, HeartPath, GlowOrbs, Sparkles, FloatingHearts, HeartBurst, Ring, SealPulse
            ├── content/           sav lični tekst, datumi i spisak slika
            ├── features/<ekran>/  jedan folder po ekranu: Screen, components/, hooks/, layout.ts, constants.ts
            ├── hooks/             useNow, useInterval, useTogetherTime, useReducedMotion, useAppShortcuts
            ├── lib/               čiste funkcije: cn, dateSr, greeting, togetherTime, seededRandom, clamp
            ├── store/             zustand: audioStore i preferencesStore
            ├── styles/            index.css, theme.css (tokeni), base.css, animations/ (keyframes po ekranu)
            ├── test/              Vitest setup i renderHook pomoćnik
            └── types/             tipovi za content i dekorativne elemente
```

## 4. Tok aplikacije

1. Windows prijava → aplikacija se pali sama (login item, podešen pri prvom pokretanju instalirane verzije).
2. Main proces uzima zaključavanje jedne instance; ako je aplikacija već otvorena, novi pokušaj samo vrati fokus postojećem prozoru.
3. Otvara se prozor bez okvira, preko celog ekrana, sa tamnom pozadinom `#120A1F`, prikazan tek kad je spreman (bez belog bljeska).
4. `#/` Splash: bašta raste, traka se puni 6 sekundi, na 100% eksplozija srca i dugme „Uđi u svoj svet“; posle 1,5 s sam prelazi na Home.
5. `#/home` Home: pozdrav po dobu dana, brojač „zajedno smo“, mandala i šest pločica.
6. Svaka pločica vodi na svoj ekran; svaki ekran ima „Nazad“ ka Home-u:
   `#/letter` Pismo za tebe · `#/reasons` Zašto te volim · `#/gallery` Naše uspomene · `#/story` Naša priča · `#/open-when` Otvori kad… · `#/sky` Naše nebo.
7. X na Home-u ili Ctrl+Q gasi aplikaciju.

## 5. Main, preload i renderer

| Sloj           | Odgovornost                                                                                                                                                                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/main`     | Životni ciklus aplikacije, jedna instanca, prozor (`window.ts`), zabrana novih prozora i navigacije van aplikacije (`security.ts`), F11 i Ctrl+Q (`shortcuts.ts`), autostart samo na zapakovanom Windows buildu (`autostart.ts`), IPC handleri (`ipc.ts`) |
| `src/preload`  | Izlaže samo `window.api` preko `contextBridge`; nikad ne izlaže `ipcRenderer`. Radi uz `sandbox: true` i `contextIsolation: true`                                                                                                                         |
| `src/renderer` | React aplikacija; nikad ne dira Node, sve nativno ide kroz `window.api`                                                                                                                                                                                   |

IPC kanali (`src/shared/ipc.ts`, svi preko `ipcMain.handle` / `ipcRenderer.invoke`):

| Kanal                      | `window.api`         | Šta radi                                            |
| -------------------------- | -------------------- | --------------------------------------------------- |
| `app:quit`                 | `quit()`             | Gasi aplikaciju (X dugme na Home-u)                 |
| `window:toggle-fullscreen` | `toggleFullscreen()` | Uključuje i isključuje pun ekran, vraća novo stanje |
| `window:leave-fullscreen`  | `leaveFullscreen()`  | Izlazi iz punog ekrana (Esc)                        |
| `app:get-version`          | `getAppVersion()`    | Vraća verziju iz `package.json`                     |

Novi kanal se uvek dodaje na četiri mesta zajedno: `shared/ipc.ts`, `main/ipc.ts`, `preload/index.ts`, `preload/index.d.ts`.

## 6. Stanje

| Store              | Šta drži                                                                           | Čuva se?                                                 |
| ------------------ | ---------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `audioStore`       | `isPlaying`, `volume`, akcije `toggle`, `stop`, `setVolume`                        | Ne                                                       |
| `preferencesStore` | `openedNoteIds` (poruke otvorene bar jednom), `lastReasonIndex` (poslednji razlog) | Da, `localStorage` pod ključem `beba-tacije:preferences` |

Electron čuva `localStorage` u userData folderu aplikacije: na Windowsu `%APPDATA%\Beba Tacije`, na Fedori `~/.config/Beba Tacije`. Brisanjem tog foldera sve kreće ispočetka.

Sve ostalo je lokalno stanje ekrana: koverta (`useEnvelope`), lightbox (`useLightbox`), okrenute kartice (`useOpenNotes`), broj želja na nebu.

## 7. Izmena sadržaja

Sav lični sadržaj je u `src/renderer/src/content/` i `src/renderer/src/assets/`. Komponente se ne diraju. Tekst je srpska latinica sa č, ć, š, ž, đ. Svaka stavka ima stabilan `id`.

| Fajl          | Šta je u njemu                                                                                                                                                                                                                           |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `config.ts`   | Ime (`herName`), potpis (`signature`), inicijali za nebo (`initials`), datum početka (`relationshipStart`), trajanje splash-a (`splashSeconds`), muzika (`musicTrack`), kratke poruke (`messages`) i pozdravi po dobu dana (`greetings`) |
| `reasons.ts`  | Razlozi (`reasons`) i završna poruka posle poslednjeg (`reasonsFinale`)                                                                                                                                                                  |
| `letter.ts`   | Obraćanje, pasusi (`tone: 'plain'` običan, `'aside'` kurziv) i pozdrav na kraju                                                                                                                                                          |
| `openWhen.ts` | Šest poruka „Otvori kad…“: `label` i `message`; potpis je „tvoj“ + `config.signature`                                                                                                                                                    |
| `timeline.ts` | Četiri događaja na liniji i poslednja kartica „Danas · N dana kasnije“ (broj dana se računa sam)                                                                                                                                         |
| `photos.ts`   | Devet slika: `id`, `caption`, `src`                                                                                                                                                                                                      |

**Datum početka.** `relationshipStart` je u formatu `2025-06-09` ili `2025-06-09T01:00` (lokalno vreme). Iz njega se računaju brojač na Home-u, „zajedno smo od 9. juna 2025.“, „Od 9. juna do danas“ na pločici, broj dana na liniji i „9 · 6 · 2025“ na nebu. Datum prvog događaja u `timeline.ts` je običan tekst i menja se ručno.

**Pismo i poruke.** Menjaj tekst u `letter.ts` i `openWhen.ts`. Pismo može imati koliko god pasusa; ritam pojavljivanja redova se prilagođava sam.

**Slike.**

1. Iseci sliku na kvadrat (polaroidi i lightbox su kvadratni), najviše 1600 px po strani, i ukloni metapodatke, na primer:
   `magick ulaz.jpg -crop 1000x1000+X+Y +repage -strip -resize '1600x1600>' -quality 86 assets/photos/ime-slike.jpg`
2. Ime fajla u kebab-case obliku, na primer `nase-mesto.jpg`.
3. U `photos.ts` dodaj `import nasaSlika from '@renderer/assets/photos/nase-mesto.jpg'` i postavi `src` i `caption`.
4. Kolaž ima tačno 9 mesta (`features/gallery/layout.ts`). Za drugačiji broj slika treba dodati ili ukloniti pozicije u `collageLayout`.

**Muzika.** Ubaci fajl u `assets/music/`, uvezi ga u `config.ts` i postavi `musicTrack`. Dugme na Home-u se tada samo aktivira. Muzika kreće tek na klik.

## 8. Sistem stilova

- **Tokeni** su u `styles/theme.css` unutar `@theme`. Podrazumevana Tailwind paleta je isključena, pa postoje samo naše boje (`night`, `haze`, `lilac`, `orchid`, `honey`, `ink`…), fontovi (`font-script` Great Vibes, `font-display` Fraunces, `font-sans` Manrope), senke (`shadow-glow`, `shadow-spark`…), `text-shadow-*` i zajedničke animacije.
- **Nikad hex u klasama.** Nova boja prvo ide u `theme.css`, pa se koristi kao `bg-ime`, `text-ime/50`.
- **Keyframes:** zajedničke animacije (`rise`, `fade-up`, `fade-in`, `twinkle`, `drift`) su u `theme.css`; one za dekorativne komponente u `animations/shared.css`; svaka animacija jednog ekrana u `animations/<ekran>.css`, sa prefiksom imena ekrana.
- **Fontovi** su lokalni (@fontsource), ništa se ne učitava sa interneta.

Kako dodati animaciju:

1. U `animations/<ekran>.css`, u `@theme` blok, dodaj `--animate-ekran-ime: ekran-ime 1s ease both;` i `@keyframes ekran-ime { … }`.
2. Animiraj samo `transform`, `opacity`, `filter` ili SVG stroke.
3. U komponenti koristi `animate-ekran-ime`; kašnjenje preko `style={{ '--delay': '0.4s' }}` i klase `[animation-delay:var(--delay)]`.
4. Ponovno pokretanje animacije radi se promenom React `key`.
5. Dodaj ponašanje za smanjene animacije: `motion-reduce:animate-none` za beskonačne, `motion-reduce:animate-fade-in` za ulazne.
6. Pokreni proveru kvaliteta.

## 9. Ekrani

**Splash (`features/splash`).** `SplashScreen` slaže `Garden` (14 biljaka iz `gardenLayout.ts`: `Daisy`, `Tulip`, `Sprig`, `Leaf`), `FallingPetals`, `Butterflies`, `LoveTitle`, `LoadingBar`, `EnterButton`. Hook `useLoadingProgress` daje procenat sa krivom `1 − (1 − t)^2.2`, `useSplashExit` prelazi na Home 1,5 s posle 100%. Animacije: iscrtavanje stabljika, rast listova, cvetanje sa odskokom, njihanje, padanje latica, leptiri po `offset-path`, shimmer preko „Volim Te“, prstenovi i 14 srca na kraju.

**Home (`features/home`).** `HomeHeader` (sat, `MusicToggle`, X), `Greeting` (datum, pozdrav, ime, rečenica), `TogetherCounter` sa `TimeUnit`, `Mandala`, `NavGrid` sa `NavTile`. Hookovi `useNow` i `useTogetherTime`. Animacije: uzlazni ulazak elemenata, sekunde koje iskaču, odsjaj preko brojača, tri prstena mandale koji se okreću u suprotnim smerovima.

**Zašto te volim (`features/reasons`).** `ReasonCounter`, `ReasonQuote` (restart animacije preko `key`), `ProgressDots`, `NextReasonButton` sa `RisingHearts`, `BigHeart`, `ReasonsFinale`. Hook `useReasonCycle` pamti poslednji razlog u `preferencesStore`.

**Pismo (`features/letter`).** `Envelope` sa `WaxSeal`, `LetterCard` sa `PressedFlower`. Hook `useEnvelope` (`closed → opening → open`). Preklop se otvara u 3D, koverta tone preko `motion`, pismo se podiže, redovi se pojavljuju jedan po jedan (`lineDelays.ts`).

**Naše uspomene (`features/gallery`).** `FairyLights`, `Collage` sa `Polaroid`, `WashiTape`, `PhotoFrame`/`PhotoPlaceholder`, `Lightbox` sa `LightboxFigure`. Hookovi `useLightbox` (izbor, strelice, Esc) i `useDialogFocus` (fokus i Tab unutar dijaloga). Polaroidi uleću naizmenično i njišu se; lightbox zumira preko `motion`.

**Naša priča (`features/story`).** `TimelineTrack` (fiksnih 1160×520, na manjim ekranima se proporcionalno smanjuje preko `useFitScale`), `TimelinePath`, `TravelingHeart` (`offset-path` iste putanje), `MilestoneNode`, `MilestoneStem`, `MilestoneCard`. Hook `useDaysTogether`. Linija se iscrtava 5 s, a tačke i kartice se pojavljuju kad ih linija dostigne.

**Otvori kad… (`features/open-when`).** `NoteCard` sa `NoteFront`, `NoteBack`, `SparkleBurst`. Hook `useOpenNotes` (okrenute kartice lokalno, otvorene bar jednom trajno). 3D okretanje sa odskokom, `aria-pressed` prati stanje.

**Naše nebo (`features/sky`).** `StarField` (90 zvezda iz `starField.ts`, uvek isti raspored), `ShootingStars`, `Moon`, `HeartConstellation`, `WishButton`, `WishShower`. Sazvežđe se iscrtava 4,6 s, zvezde iskaču redom, inicijali i datum se pojavljuju na kraju; svaka želja pokreće 5 zlatnih zvezda padalica.

**Zajedničko.** `RouteTransition` (`app/`) radi prelaz između ekrana: blago zamućenje i uvećanje, oko 450 ms.

## 10. Prečice i autostart

| Taster   | Šta radi                                                      | Gde se obrađuje                             |
| -------- | ------------------------------------------------------------- | ------------------------------------------- |
| `Esc`    | Zatvara otvoren lightbox; ako ga nema, izlazi iz punog ekrana | renderer, `useAppShortcuts` i `useLightbox` |
| `F11`    | Uključuje i isključuje pun ekran                              | main, `shortcuts.ts`                        |
| `Ctrl+Q` | Gasi aplikaciju                                               | main, `shortcuts.ts`                        |
| `←` `→`  | Prethodna i sledeća slika u lightbox-u                        | renderer, `useLightbox`                     |
| `F12`    | DevTools, samo u `npm run dev`                                | @electron-toolkit                           |

Prečice rade samo dok je aplikacija u fokusu (nisu globalne). Nema kiosk moda; uvek može da se izađe.

**Autostart:** `autostart.ts` poziva `app.setLoginItemSettings({ openAtLogin: true })` samo kad je aplikacija zapakovana i radi na Windowsu. Postavlja se pri prvom pokretanju posle instalacije, a zatim se aplikacija pali pri svakoj prijavi. U razvoju na Fedori ne radi ništa. Isključuje se u Windows Task Manageru, kartica Startup.

## 11. Rešavanje problema

| Problem                                                            | Uzrok i rešenje                                                                                                                                                                             |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| npm na svaku komandu piše „Unknown project config electron_mirror“ | Template je imao `.npmrc` sa mirror-ima. Obrisan je; ako se vrati, obriši te redove                                                                                                         |
| Prettier je menjao fajlove u `design/`                             | `design` je dodat u `.prettierignore`. Dizajn fajlove nikad ne formatirati                                                                                                                  |
| Instaler je bio preveliki                                          | Renderer biblioteke su bile u `dependencies`, pa ih je electron-builder kopirao pored Vite bundle-a. Sve što koristi samo renderer ide u `devDependencies` (asar je pao sa 44 MB na 3,2 MB) |
| Klasa `bg-…`/`text-…` ne radi                                      | Podrazumevana Tailwind paleta je isključena. Boja mora da postoji u `theme.css`                                                                                                             |
| Esc u lightbox-u je izlazio iz punog ekrana                        | Esc se zato obrađuje u rendereru: lightbox ga hvata prvi (`preventDefault`), a `useAppShortcuts` ga preskače                                                                                |
| Prazna stranica u `npm run dev`                                    | Pogledaj DevTools (F12). CSP u `index.html` dozvoljava samo lokalne resurse; ništa ne učitavati sa interneta                                                                                |
| Electron neće da se pokrene zbog sandbox greške                    | Prijavi tačnu grešku; ne isključivati `sandbox` u kodu                                                                                                                                      |
| Fontovi izgledaju drugačije                                        | Proveri da su @fontsource paketi instalirani (`npm ci`) i da `styles/index.css` uvozi Fraunces `opsz` fajlove                                                                               |
| Slika u galeriji je isečena                                        | Polaroid je kvadrat. Iseci sliku na kvadrat pre ubacivanja (vidi tačku 7)                                                                                                                   |
| Na manjem ekranu nešto ne staje                                    | Glavna rezolucija je 1920×1080; za niže ekrane se veličine smanjuju preko `clamp` i `vh`. Prijavi ekran i rezoluciju                                                                        |
| Aplikacija se ne pali sama na Windowsu                             | Autostart radi samo u instaliranoj verziji. Pokreni je jednom posle instalacije i proveri Task Manager → Startup                                                                            |
| Želim da resetujem zapamćene poruke i razlog                       | Obriši userData folder (tačka 6)                                                                                                                                                            |

## 12. Ideje za kasnije (nije implementirano)

- **Nije implementirano:** dnevna poruka ili razlog koji se menja svakog dana.
- **Nije implementirano:** godišnjice i posebni datumi koji menjaju pozdrav ili temu (rođendan, 9. jun).
- **Nije implementirano:** više pesama i plejlista sa kontrolom jačine na ekranu.
- **Nije implementirano:** galerija sa više od 9 slika i automatskim rasporedom kolaža.
- **Nije implementirano:** prava fotografija uz svaki događaj na liniji „Naša priča“.
- **Nije implementirano:** tihi mod koji preskače splash posle prvog pokretanja u danu.
- **Nije implementirano:** automatsko ažuriranje aplikacije (svesno uklonjeno; aplikacija ne koristi internet).
