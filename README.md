# Install
> [!important]
> Need [nodejs](https://nodejs.org/en/download) and pnpm

Linux/MacOS:
```bash
git clone https://github.com/FuSoraS/birthday-26.git --depth=1 &&
cd birthday-26 &&
cp .env.example .env &&
pnpm install &&
pnpm run dev
```

Windows:
```bash
git clone https://github.com/FuSoraS/birthday-26.git --depth=1 &&
cd birthday-26 &&
copy .env.example .env &&
pnpm install &&
pnpm run dev
```

# ENV Variables Configuration
This project uses several environment variables to configure its behavior. Below is a list of the environment variables along with their descriptions.
```env
# General
URL='https://pages-example.com/'
NAME='Name of the person'

# page-craft.astro
MINE_P_1=''

# pag-music.astro
MUSIC_TITLE=''
# Paragraph
MUSIC_P_1=''

# Letter.astro
LETTER_HEADER_1=''
LETTER_HEADER_2=''
```