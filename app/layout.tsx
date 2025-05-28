import "@mantine/core/styles.css";
import "../styles/globals.css"; // or './globals.css'
import React from "react";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
  AppShell,
  rem,
} from "@mantine/core";
import I18nClientProvider from "../components/I18nClientProvider";
import { theme } from "../theme";
import NavHeader from "../components/NavHeader/NavHeader";

export const metadata = {
  title: "Curriculum Vitae",
  description: "Curriculum Vitae Koen van Wijlick",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #e3f2fd 0%, #fffde7 100%)",
        }}
      >
        <MantineProvider theme={theme}>
          <AppShell
            header={{ height: 60 }}
            styles={{
              main: {
                background: "none",
                minHeight: "100vh",
                padding: rem(32),
              },
            }}
          >
            <AppShell.Header>
              <NavHeader />
            </AppShell.Header>
            <I18nClientProvider>
              <main>{children}</main>
            </I18nClientProvider>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
