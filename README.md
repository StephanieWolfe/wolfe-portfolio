# wolfe-portfolio

Front end for my personal portfolio and blog, live at [stephaniewolfe.dev](https://stephaniewolfe.dev).

## What it is

A Vue 3 single-page app with five areas:

- **Home**: who I am and what I work with
- **Projects**: full-stack apps and legacy modernization work
- **About**: background, experience, and what I'm looking for
- **Blog**: public posts, plus an admin side (login, create, edit, delete, drafts) for me
- **Login**: used only for blog administration

Blog data comes from a separate Node.js / Express / PostgreSQL API with JWT authentication: [wolfe-portfolio-api](https://github.com/StephanieWolfe/wolfe-portfolio-api).

## Stack

Vue 3, Vue Router, Vite, Axios. Hosted on Render with a custom domain.

## Run it locally

```bash
npm install
npm run dev
```

The app expects the API at `http://localhost:3000` by default. To point it somewhere else, create a `.env` file:

```
VITE_API_URL=https://your-api-host.example.com
```

Other scripts:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Project layout

```
src/
  views/     page components (Home, Projects, About, Blog, ...)
  router/    route definitions
  api.js     API base URL
  auth.js    login state helpers
public/      static files (images, resume PDF)
```

## Notes

- Writing, editing, and deleting blog posts requires logging in. The API enforces this, not just the UI.
- This repo is the front end only. The API is in [wolfe-portfolio-api](https://github.com/StephanieWolfe/wolfe-portfolio-api).
