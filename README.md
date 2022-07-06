
# Chipax-Challenge/Frontend 🔬

API desarrollado para el desafio Chipax => https://www.notion.so/Rick-and-Morty-Challenge-84a1b794dc09429fb3178c2a24e7c217
![Logo](https://c4.wallpaperflare.com/wallpaper/347/251/683/rick-and-morty-oh-mama-run-the-jewels-wallpaper-preview.jpg)
## Demo 😃

[Demo-Vercel](https://chipax-frontend.vercel.app/)


## Dependecias 📃

**Client:** [NextJS](https://nextjs.org/) framework

[GSAP](https://greensock.com/), [Prettier](https://prettier.io/), [eslint](https://eslint.org/)


## Pages 👀

####  Char counter

```http
   /char-counter
```
    - cuántas veces aparece la letra "l" (case insensitive) en los nombres de todos los `location`
    - cuántas veces aparece la letra "e" (case insensitive) en los nombres de todos los `episode`
    - cuántas veces aparece la letra "c" (case insensitive) en los nombres de todos los `character`
    - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)
#### Episode locations

```http
  /episodes-locations
```
    - para cada `episode`, indicar la cantidad y un listado con las `location` (`origin`) de todos los `character` que aparecieron en ese `episode` (sin repetir)
    - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)


## Install

Requiere [Node](http://nodejs.org) 

Clonar el repositorio

```bash
  git clone https://github.com/nahuoo/chipax-frontend.git
```

Instalar 💾

```bash
  npm install
```

Correr en local

```bash
 npm run start
  
 # modo watch
 npm run dev
 # modo produccion
 npm build
```