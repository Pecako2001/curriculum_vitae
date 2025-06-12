"use client";

import "@mantine/core/styles.css";
import "./module.css";
import { AppShell } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import Providers from "./providers";
import Navbar from "../components/Navbar/Navbar"; // Your custom Navbar component
import I18nClientProvider from "../components/I18nClientProvider";
import { useTranslation } from "react-i18next";
import { Analytics } from '@vercel/analytics/next';

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell>
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>

      <AppShell.Main style={{ paddingTop: 60 }}>{children}</AppShell.Main>
    </AppShell>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();
  return (
    <html lang={i18n.language}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Curriculum Vitae</title>
        <link rel="icon" href="/Icon.png" />
      </head>
      <body>
        <I18nClientProvider>
          <Providers>
            <Notifications />
            <AppLayout>{children}</AppLayout>
            <Analytics />
          </Providers>
        </I18nClientProvider>
      </body>
    </html>
  );
}
