# The Bad Day Survival Kit

A small digital survival kit for a friend on a tough day. Built with plain HTML, CSS and JavaScript, with no build step or dependencies.

## Run locally

Open `index.html` in a browser. The artwork, GIF and core interactions work offline; the optional fonts and external game links require an internet connection.

Enter `survival` to open the kit. The password is checked only in the browser and is requested again after a reload.

## Make it yours

- Change the copy in `index.html` and the surprise messages in `js/surprises.js`.
- Adjust the colors and layout in `style.css`.
- The four quieter original messages remain in `js/surprises.js` as inactive entries. The content overview and ideas are in `docs/INHALTE.md`; asset and external-link notes are in `assets/CREDITS.md`.
- The password is not security: anyone can inspect the code or access published files directly. Never publish confidential information. Share personal content only with the consent of everyone involved.

## Test

Install Node.js 24 and run `npm ci` and `npx playwright install chromium` once. Run `npm test` for unit tests and `npm run test:e2e` for desktop and mobile browser tests. Tests open the local HTML file directly.

## Publish with GitHub Pages

1. Create a public repository on GitHub, without initializing it with a README.
2. In this directory, run `git add .`, then `git commit -m "Initial survival kit"`.
3. Add the repository URL with `git remote add origin <repository-url>` and push with `git push -u origin main`.
4. On GitHub, open **Settings > Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
5. Once deployed, the URL is shown in the Pages settings. It is usually `https://<username>.github.io/<repository-name>/`.

GitHub Pages is public. If you use another branch name, select that branch in the Pages settings and push it instead.