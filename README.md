# Madame Abigail

Frontend en Astro + Tailwind CSS + Vue (islands) para una web editorial de perfil profesional.

## Stack

- Astro 5
- Tailwind CSS 4
- Vue 3 (islands)
- Netlify adapter

## Scripts

- `pnpm dev`: inicia servidor local en `http://localhost:4321`
- `pnpm build`: genera build de produccion
- `pnpm preview`: previsualiza build
- `pnpm astro -- --help`: ayuda del CLI de Astro

## Estructura actual

```text
src/
  components/
    sections/
      Header.astro
      Hero.astro
    ui/
      Button.astro
      Container.astro
  data/
    hero.ts
    navigation.ts
  layouts/
    Layout.astro
  pages/
    index.astro
  styles/
    global.css
public/
  lucia-portrait.svg
```

## Convenciones

- UI por secciones reutilizables (`sections/`) y primitives (`ui/`).
- Contenido desacoplado en `src/data/*`.
- Tokens de tema centralizados en `src/styles/global.css` con `@theme`.
- Medidas en unidades relativas o escala Tailwind (sin valores en `px`).
