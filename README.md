[Architecture Decision Records website](https://architecture-decision-records.vercel.app/)

## Changelog generation

To generate changelog with [git-cliff](https://git-cliff.org/) in the cli run:

```shell
npm run generate:changelog
```

This will generate the `CHANGELOG.md` in the root directory, by running an npm script configured in `package.json` in the root of the project:

```json
"generate:changelog": "./node_modules/.bin/git-cliff --config changelog-template.toml --output CHANGELOG.md"
```

### Changelog template

To change the contents of the generated changelog edit the template in the root directory:

```shell
./changelog-template.toml
```

## Release strategy

### Release workflow

1. Checkout to main Branch and Pull Latest Changes:
    ```shell
    git checkout main
    git pull
    ```
<!-- 2. Create and checkout to a new local git branch for the release with
    ```shell
    git checkout -b release/<release-version>

    # Example: git checkout -b release/v0.0.1
    ``` -->

2. Copy the hash of the latest commit from `git log`

   ```shell
   git log -1 --pretty=format:"%h"

   # Example: c981e35
   ```

- Create a `git tag` for that commit hash with

  ```shell
  git tag <tag-name> <commit-hash>

  # Example: git tag v0.0.1 c981e35
  ```

  Depending on the specific release type you're making, can be of shape `v0.2.0-alpha.1` or `v1.0.0-beta.3`, etc.

- Generate a changelog with [git-cliff](https://git-cliff.org/)
    - by running a cli command:
        ```shell
        git cliff --config changelog-template.toml --output CHANGELOG.md
        ```
    - or by running a cli command:
        ```shell
        npm run generate:changelog
        ```  
- Commit changelog files (following [conventional commits format](https://www.conventionalcommits.org/en/v1.0.0/)):
  ```shell
  git add .
  git commit -m "chore(release): <release-version>"
      # Example: git commit -m "chore(release): v0.0.1"
      ```
  <!-- - Push the local release branch to remote repo with `git push` -->
- Push the local branch to remote repo, including git tags `git push --tags`
<!-- - Create a Pull Request from release branch `release/<release-version>` to `main` and merge it -->
- Go to [github.com/skyisuniverse/architecture-decision-records/releases](https://github.com/skyisuniverse/architecture-decision-records/releases)
- Create a new release
  - Select the `git tag` you have created (e.g. `v0.0.1`)
  - Select the target `main`
  - Tick the checkbox `Set as a pre-release` if the release you are publishing is not ready for production (will get a `Pre Release` label on github)
  - Paste the `release title` (can be any)
  - Manually copy the markdown of the release you're going to publish from the `CHANGELOG.md` file to Github (`Write` tab)
  - Click on the `Preview` tab to verify correct rendering of the markdown of the release
  - Click on `Publish Release`

### Additional Notes:

- Ensure that the changelog-template.toml file is correctly configured to generate the desired changelog format.
- Verify that the commit message format follows the Conventional Commits specification to ensure consistency and clarity.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
