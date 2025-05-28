"use client";

import "@mantine/core/styles.css";
import "./module.css";
import { AppShell } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import Providers from "./providers";
import Navbar from "../components/Navbar/Navbar"; // Your custom Navbar component
import I18nClientProvider from "../components/I18nClientProvider";

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
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Curriculum Vitae</title>
        <link rel="icon" href="/avatar.png" />
      </head>
      <body>
        <I18nClientProvider>
          <Providers>
            <Notifications />
            <AppLayout>{children}</AppLayout>
          </Providers>
        </I18nClientProvider>
      </body>
    </html>
  );
}
