import { ClerkApp, ClerkErrorBoundary } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@vercel/remix";

export const ErrorBoundary = ClerkErrorBoundary();

// Circumvent process.env replacement during build
const global = globalThis;
const globalEnv = global.process.env;

export const loader: LoaderFunction = (args) => rootAuthLoader(args,{
  publishableKey: globalEnv.CLERK_PUBLISHABLE_KEY,
  secretKey: globalEnv.CLERK_SECRET_KEY
});

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return <Outlet />;
}

export default ClerkApp(App);
