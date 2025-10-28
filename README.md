# SmileCare Dental Clinic — Enhanced Static Website

This is a complete static website (HTML/CSS/JS) for a dental clinic prepared as an **enhanced version**.
It includes a modern responsive layout, appointment form (client-side), and instructions for hooking the form to Formspree or your backend.

## Files
- `index.html`, `about.html`, `services.html`, `contact.html` — pages
- `style.css` — styling
- `script.js` — lightweight JS for menu + form handling
- `images/` — placeholder images (SVG)

## Deploy to GitHub Pages
1. Create a new GitHub repo.
2. Add files and push to the `main` branch.
3. In GitHub repository → Settings → Pages → select `main` branch / root → Save.
4. Your site will be available at `https://<username>.github.io/<repo-name>/`

## Form integration
- To receive form submissions, set `FORM_ENDPOINT` in `script.js` to a Formspree endpoint or your backend URL.
- Alternatively, the form falls back to opening the user's mail client (mailto).

Enjoy! — If you want I'll also create the GitHub repo and push (I can provide commands or a ready `git` script).
