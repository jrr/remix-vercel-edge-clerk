# Remix + Vercel Edge + Clerk issue repro

This is a nearly-empty remix project, created with `pnpx create-remix@latest`.

Two routes have been added at /node and /edge, demonstrating both runtimes.

This deploys and runs on Vercel just fine (from the `main` branch):
https://remix-vercel-edge-clerk.vercel.app/

Vercel reports two Node.js functions, and two Edge functions:

<img src="./deployment-summary.png"/>

## Adding Clerk

Adding Clerk (following the [quick start doc](https://clerk.com/docs/quickstarts/remix)) breaks the Vercel deployment, with an error like this:

```
[21:39:52.506] Error: The Edge Function "404" is referencing unsupported modules:
[21:39:52.507] 	- @clerk: #crypto, #fetch
[21:39:54.707]
```

The Clerk changes are on the `clerk` branch.

### Clerk Beta

After [updating](https://beta.clerk.com/docs/upgrade-guides/core-2/remix) to the "Core 2" beta (`@clerk/remix 4.0.0-beta.33` as of this writing), the _fetch_ error is gone, but _crypto_ remains:

```
[17:26:39.462] Error: The Edge Function "edge" is referencing unsupported modules:
[17:26:39.464] 	- @clerk: #crypto
[17:26:41.622]
```

This is available on the `clerk-4-beta` branch of this repo.

## Repro Steps

- Fork this repo with all branches (uncheck "Copy the main branch only")
- Sign in to Vercel and add a project connected to the git repo. (it should deploy the `main` branch successfully)
- Checkout the `clerk` branch and push an empty commit to cause a vercel deploy (e.g. `git commit --allow-empty -m "empty commit"`)
  - this deploy should fail with the above symptom.
