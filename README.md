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
