# Portafolio estático `lapc506.me` en Astro — Diseño

**Fecha:** 2026-06-09
**Autor:** Andrés Peña Castillo (con Claude Code)
**Repo:** `lapc506/lapc506` (también es el repo de perfil de GitHub)
**Estado:** Aprobado — listo para plan de implementación

---

## 1. Objetivo

Reemplazar el sitio actual de Carrd (`https://lapc506.me`) por un portafolio
profesional **estático**, generado con **Astro**, desplegado en **GitHub Pages**
desde este mismo repo, sirviendo el dominio custom `lapc506.me`. El layout visual
se inspira en `https://yaakoubdj.github.io/portfolio2026/` (single-page scroll con
nav fijo, hero con stat cards, timeline de experiencia, grid de proyectos, skills
por categoría).

### Requisitos duros
- **i18n**: inglés por defecto en `/` (sin prefijo), español en `/es/`.
- **Dark mode por defecto**, con toggle a modo claro (preferencia persistida).
- **100% estático**: sin backend, hosteable gratis en GitHub Pages.
- El **README de perfil** (`README.md`) debe permanecer intacto: el repo sigue
  mostrando el perfil de GitHub. Sitio y perfil conviven.

---

## 2. Decisiones (log)

| Decisión | Elección |
|---|---|
| Generador | **Astro** + TypeScript |
| Estilos | **Tailwind v3** reusando los tokens de marca "Chimera" (de `chimeranext/better-microservices/apps/web/tailwind.config.ts`) |
| Tema | **Dark por defecto + toggle a light** (class-based, persistido en `localStorage`, script anti-flash inline) |
| Estructura | **Single-page scroll** con nav fijo |
| Fuente de datos | `resume.json` (canónico inglés, ya existe) + `resume.es.json` (nuevo, derivado de `README-ES.md`) |
| Chatbot IA / RAG | **Fuera de v1** |
| Política partidaria | **Omitida**. Sólo se incluyen **Valores & Think Tanks** |
| Despliegue | **GitHub Actions → GitHub Pages**, dominio custom vía `CNAME` |

---

## 3. Sistema de diseño (tokens "Chimera")

Dark-first. Variables CSS HSL + Tailwind `darkMode: ["class"]`.

| Token | Valor |
|---|---|
| `--background` (dark) | `#08060F` |
| `--foreground` (dark) | `#ECE8F2` |
| `--card` (dark) | `#1C1830` |
| `--muted-foreground` | `#837C99` |
| `--border` | `#2A2640` |
| brand `primary` | `#7C5CFF` (violeta) |
| brand `secondary` | `#3B82F6` (azul) |
| brand `tertiary` | `#22D3EE` (cyan) |
| brand `accent` | `#EC4899` (magenta) |
| `success` / `warning` | `#34D399` / `#FBBF24` |
| brand gradient | `linear-gradient(90deg,#7C5CFF,#3B82F6,#22D3EE)` |

- **Tipografías** self-hosted vía `@fontsource-variable`: **Sora** (títulos),
  **Inter** (cuerpo), una mono para el snippet del hero.
- **Radios**: `lg 10px`, `md 8px`, `sm 6px`.
- **Modo claro**: set de tokens derivado (fondo claro, texto oscuro, mismos hues
  de marca). `:root` = light, `.dark` = Chimera. `<html class="dark">` por defecto.
- **Animaciones**: scroll-reveal con `IntersectionObserver`, hover states, texto en
  gradiente en el nombre del hero. Respetar `prefers-reduced-motion`.

---

## 4. Arquitectura y datos

### Fuente única de verdad
- `resume.json` (raíz) — **inglés canónico**, importado directo por Astro/Vite.
- `resume.es.json` (raíz, nuevo) — **misma forma exacta**, español desde `README-ES.md`.
- `src/i18n/ui.ts` — strings de UI (nav, títulos de sección, botones, "Open to
  opportunities", footer) por idioma.
- `src/lib/resume.ts` — tipos TypeScript (`ResumeData`) + loader
  `getResume(locale) → { data, ui }`. Único lugar que define los tipos.

### Extensiones al modelo de datos
El `resume.json` actual (schema rxresu.me) **no** cubre todo el contenido del
Carrd. Se agregan estos campos/arrays (en ambos idiomas, misma forma):

- `socialLinks[]` — `{ label, url, icon, category }` para el hub de enlaces.
- `services[]` — `{ name, description, link, kind }` (consultoría + DJ/EDM).
- `civicWork[]` — voluntariado comunitario (Asociación Guararí).
- `ideas[]` — ideas de negocio en hiatus (Sazones Semanales, MeshCommerceChain).
- `thinkTanks[]` + `values[]` — Valores & Think Tanks (sin política partidaria).
- `ventures` (objeto destacado ChimeraNext) — `{ url, tagline, items[] }` con las
  5 ventures: Vertivolatam, AduaNext, AltruPets, HabitaNexus, KeikoLatam.

> Las URLs exactas de cada perfil social/servicio se extraen del source del Carrd
> durante la implementación (paso de recolección de datos).

---

## 5. Estructura de archivos

```
astro.config.mjs          # i18n (en default sin prefijo, es), site, sitemap, tailwind
tailwind.config.ts        # tokens Chimera + light/dark (class)
package.json
public/
  CNAME                   # lapc506.me
  favicon.svg  og.png
  Andres-Pena-CV.pdf      # opcional (descarga)
src/
  i18n/ui.ts
  lib/resume.ts           # tipos ResumeData + loader getResume(locale)
  styles/global.css       # @tailwind base/components/utilities + vars + no-flash
  layouts/Base.astro      # <head>, fonts, theme-init, Nav, Footer, JSON-LD, hreflang
  components/
    Portfolio.astro       # compone TODAS las secciones (prop: locale)
    Nav.astro  LanguageSwitcher.astro  ThemeToggle.astro
    Hero.astro            # nombre (gradiente), headline, stat cards, snippet SRE
    Section.astro         # wrapper genérico (id, title, subtitle, scroll-reveal)
    Experience.astro  ExperienceItem.astro
    ChimeraNext.astro     # card destacada → chimeranext.dev (5 ventures)
    Projects.astro  ProjectCard.astro
    Values.astro          # Valores & Think Tanks
    Skills.astro  SkillGroup.astro      # dots de nivel (1-5) + pills de keywords
    Services.astro  Education.astro  Certifications.astro
    Civic.astro  Communities.astro  Languages.astro
    Ideas.astro  Interests.astro
    Contact.astro  SocialHub.astro  Footer.astro
  pages/
    index.astro           # <Portfolio locale="en" />
    es/index.astro        # <Portfolio locale="es" />
resume.json  resume.es.json
README.md  README-ES.md  resume-ats.md   # intactos (perfil + artefactos)
.github/workflows/deploy.yml
```

Cada componente de sección es chico y de propósito único. `Portfolio.astro` recibe
`locale` y ambas páginas lo reusan → una sola definición de layout para EN/ES.

---

## 6. Secciones (orden final, single-page)

1. **Hero** — nombre con texto en gradiente, headline (SRE | Serial Entrepreneur),
   3 stat cards (**10+ años**, **5 multinacionales**, **4+ startups**), CTAs
   (Contacto, LinkedIn, descargar CV), card tipo terminal con snippet YAML/bash
   con sabor SRE (adaptación del "widget Flutter" de la referencia).
2. **Sobre mí** — summary + tagline ("Leaving a Lasting Legacy…").
3. **Experiencia** — timeline. DojoCoding con sub-roles colapsables (Dojo OS, Dojo
   Agent, Freedom Academy ×2); luego IBM, Provectus, Roche, WU L3/L1, HPE, Perfiles.
4. **ChimeraNext + Startups** —
   - **Card destacada ChimeraNext** (gradiente de marca) → CTA a
     `https://chimeranext.dev` presentando las 5 ventures.
   - Grid de cards individuales: Vertivolatam, AduaNext (ex-ProformaFastTrack),
     AltruPets, HabitaNexus, KeikoLatam — con tags + links a GitHub.
5. **Valores & Think Tanks** — Friedrich Naumann, B Lab, Ellen MacArthur +
   economía circular, mercado social, límites planetarios, estoicismo. Sin
   afiliación partidaria.
6. **Skills** — grupos por categoría con **dots de nivel (1-5)** + pills de keywords.
7. **Servicios / Consultoría** — Apps & Agentes IA (Gumroad), Análisis Visual de
   Datos (Gumroad), DJ/EDM (Twitch, Ko-fi, SoundCloud).
8. **Educación** — TEC (en hiatus), CTP de Flores.
9. **Certificaciones** — lista (PIEA, Innovate, Bridge for Billions, CertiProf, etc.).
10. **Voluntariado comunitario** — Asociación de Desarrollo Integral Guararí (Vocal
    2018/2023, centro comunitario, MICITT/CECI).
11. **Comunidades** — Ciencia de Datos en LATAM (~3k), Flutter Apps LATAM, Startups 506.
12. **Idiomas** — Español (nativo), Inglés (C1), Portugués (A2).
13. **Ideas de Negocio (en hiatus)** — Sazones Semanales, MeshCommerceChain.
14. **Intereses** — DJ/EDM, F1/karts, canopy/naturaleza, comida picante.
15. **Contacto + Hub de enlaces** — email, teléfono, WhatsApp, Calendly + grid de
    iconos: LinkedIn, GitHub, Web, Figma, AWS re:Post, Dev.to, Devpost, Torre.ai,
    Threads, YouTube, X, Mastodon, Medium, SoundCloud.

---

## 7. i18n

- Config Astro: `i18n: { defaultLocale: 'en', locales: ['en','es'],
  routing: { prefixDefaultLocale: false } }`.
- `/` → inglés, `/es/` → español. `LanguageSwitcher` preserva el hash de sección.
- `hreflang` alternates (`en`, `es`, `x-default`) en `<head>`.
- `lang` correcto por página.

---

## 8. SEO / accesibilidad

- Meta + Open Graph + Twitter Card; imagen `og.png`.
- **JSON-LD `Person`** (nombre, rol, ubicación, sameAs con perfiles).
- `@astrojs/sitemap`; navegación accesible por teclado; contraste AA; foco visible.

---

## 9. Despliegue

- `.github/workflows/deploy.yml`: `withastro/action` → `actions/deploy-pages` en
  push a `main`.
- `astro.config.mjs`: `site: 'https://lapc506.me'`, `base: '/'`.
- `public/CNAME` = `lapc506.me`.

### Pasos manuales del usuario (una vez)
1. GitHub → repo Settings → **Pages → Source: GitHub Actions**.
2. En el registrador DNS de `lapc506.me` (quitar registros de Carrd):
   - 4 registros **A** del ápice a las IPs de GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **CNAME** `www` → `lapc506.github.io`
   - (Opcional) AAAA a las IPv6 de GitHub Pages.
3. En Settings → Pages, fijar **Custom domain: `lapc506.me`** y activar
   **Enforce HTTPS** una vez propagado.

---

## 10. Fuera de alcance (v1)

Chatbot IA/RAG, blog, formulario de contacto con backend, analytics, sección de
política partidaria. Todos agregables después sin re-arquitectura.

---

## 11. Pendientes / TBD

- `https://chimeranext.dev`: dominio **aún no comprado**; se configura como `href`
  de la card destacada (puede no resolver hasta la compra).
- Recolectar URLs exactas de perfiles sociales y productos Gumroad desde el Carrd.
- Decidir si se incluye un PDF de CV descargable (`public/Andres-Pena-CV.pdf`).
- Generar `og.png` y `favicon.svg` de marca.
- Traducción de `resume.es.json` a partir de `README-ES.md`.
