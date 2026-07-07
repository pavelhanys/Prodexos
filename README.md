# Prodexos Website

Static website for Prodexos, built with plain HTML, CSS and JavaScript. It is designed for Cloudflare Pages with no build step.

## File Structure

```text
.
+-- index.html
+-- articles.html
+-- articles/
|   +-- adoption-success.html
|   +-- project-delivery-failure.html
|   +-- project-health-check.html
+-- assets/
    +-- logo.png
    +-- script.js
    +-- styles.css
```

## Run Locally

Open `index.html` directly in a browser.

No package install, build command or local server is required.

## Add a New Article

1. Copy one of the existing files in `articles/`.
2. Rename it using a short URL-friendly filename, for example `articles/new-delivery-lesson.html`.
3. Update the page title, meta description, headline, category and article body.
4. Add a matching article card to `articles.html`.
5. Optionally add a preview card to the Insights section in `index.html`.

## Deploy With Cloudflare Pages

Recommended Cloudflare Pages settings:

- Source: GitHub
- Repository: `pavelhanys/Prodexos`
- Production branch: `main`
- Framework preset: `None`
- Build command: leave blank, or use `exit 0`
- Build output directory: `/` or `.`
- Root directory: `/`
- Environment variables: none required

After Cloudflare Pages is connected, pushing changes to `main` will trigger a deployment.
