# Pokretanje projekta (za Milana)

Razvijaš na Fedori, instaler praviš na Windowsu. Electron se ne instalira globalno, ide kao npm zavisnost unutar projekta.

## 1. Jednom na Fedori

```bash
sudo dnf install -y git nodejs npm unzip
node -v
```

`node -v` mora da pokaže 22.12 ili noviji (ili 20.19+). Ako je stariji:

```bash
curl -fsSL https://fnm.vercel.app/install | bash
exec zsh
fnm install 22
fnm default 22
node -v
```

Claude Code:

```bash
curl -fsSL https://claude.ai/install.sh | bash
exec zsh
claude --version
```

Ako više voliš dnf repozitorijum, uputstvo je na https://code.claude.com/docs/en/setup.

## 2. Napravi projekat

```bash
mkdir -p ~/projects && cd ~/projects
npm create @quick-start/electron@latest beba-tacije -- --template react-ts
cd beba-tacije
npm install
npm run dev
```

Treba da se otvori prazan Electron prozor. Zatvori ga.

## 3. Ubaci paket u projekat

```bash
unzip ~/Downloads/beba-tacije-handoff.zip -d /tmp/bt-handoff
cp -r /tmp/bt-handoff/beba-tacije-handoff/. ~/projects/beba-tacije/
ls -a ~/projects/beba-tacije
```

Moraš da vidiš `.claude`, `CLAUDE.md`, `PROMPT.md`, `POKRETANJE.md`, `docs` i `design`. Tačka u `.../beba-tacije-handoff/.` je bitna jer kopira i skriveni `.claude` folder.

```bash
cd ~/projects/beba-tacije
git init
git add -A
git commit -m "chore: scaffold and design handoff"
```

## 4. Pusti AI da radi

```bash
claude
```

Prva poruka:

```
Pročitaj PROMPT.md i uradi korak 0.
```

Posle svake faze pokreni `npm run dev` u drugom terminalu, pogledaj i napiši mu šta da popravi ili `nastavi`.

## 5. Sinhronizacija Fedora ↔ Windows

Windows ne vidi Fedora disk, zato koristi privatni GitHub repo:

```bash
sudo dnf install -y gh
gh auth login
gh repo create beba-tacije --private --source=. --push
```

Nikad ne kopiraj `node_modules` između sistema.

## 6. Instaler za Windows (preporučeno na Windowsu)

U PowerShellu:

```powershell
winget install OpenJS.NodeJS.LTS
winget install Git.Git
```

Otvori novi terminal:

```powershell
git clone https://github.com/<tvoj-username>/beba-tacije.git
cd beba-tacije
npm ci
npm run build:win
```

Instaler je u `dist\Beba Tacije-1.0.0-setup.exe`. Instaliraj, restartuj Windows i proveri da se aplikacija sama pali.

Alternativa sa Fedore, bez rebootovanja (radi jer aplikacija nema native module, ali ga ipak testiraj na Windowsu):

```bash
sudo dnf install -y wine
npm run build:win
```

## 7. Kasnije izmene

- Tekst, datumi, slike, muzika: reci Claude-u šta menjaš, on koristi `edit-content` skill.
- Nov ekran: `add-screen` skill.
- Pre slanja na Windows: `build-installer` skill.
- Kako sve radi: `SUMMARY.md` (AI ga piše na kraju).
