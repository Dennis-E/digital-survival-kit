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

## Publish with GitLab Pages

1. Create a public GitLab project and copy its HTTPS clone URL.
2. Add GitLab as a remote, for example `git remote add gitlab https://gitlab.com/<group>/<project>.git`.
3. Commit and push `main`: `git add .`, `git commit -m "Publish survival kit"`, `git push gitlab main`.
4. Open **Build > Pipelines**. The included `.gitlab-ci.yml` creates the Pages artifact and starts deployment.
5. Open **Deploy > Pages** to find the public URL, usually `https://<namespace>.gitlab.io/<project>/`.

A `.gitlab-ci.yml` change is processed only after it is pushed to the default branch. GitLab Pages is public, and the password is only a browser-side gate.

## Publish with GitHub Pages

The current repository can also remain on GitHub. Its GitHub Pages settings can publish `main` directly from `/ (root)`.