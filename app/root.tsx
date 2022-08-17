import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import AuthProvider from "./src/contexts/auth/AuthProvider";
import SearchProvider from "./src/contexts/search/SearchProvider";

import styles from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Yfitops",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <AuthProvider>
          <SearchProvider>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </SearchProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
