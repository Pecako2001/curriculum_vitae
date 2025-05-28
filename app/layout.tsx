"use client";

import "@mantine/core/styles.css";
import "./module.css";
import {
  MantineProvider,
  createTheme,
  ActionIcon,
  Loader,
  AppShell,
  Group,
  Avatar,
  Text,
  rem,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import Providers from "./providers";
import Navbar from "../components/Navbar/Navbar"; // Your custom Navbar component
import I18nClientProvider from "../components/I18nClientProvider";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";

// Mantine theme configuration
export const mantineThemeConfig = createTheme({
  primaryColor: "indigo",
  defaultRadius: "md",
  focusRing: "auto",
  fontFamily: "Open Sans, sans-serif",
  headings: { fontFamily: "Open Sans, sans-serif" },
  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: "subtle",
      },
    }),
    Loader: Loader.extend({
      defaultProps: {
        type: "bars",
      },
    }),
  },
});


function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell>
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>

      <AppShell.Main
        style={{
          background: "none",
          minHeight: "100vh",
          padding: rem(32),
          paddingLeft: rem(300),
          position: "relative",
        }}
      >
        {children}
      </AppShell.Main>
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
        <title>Curriculum Vitae</title>
        <link rel="icon" href="/avatar.jpg" />
      </head>
      <body>
        <I18nClientProvider>
          <MantineProvider theme={mantineThemeConfig}>
            <Providers>
              <Notifications />
              <AppLayout>{children}</AppLayout>
            </Providers>
          </MantineProvider>
        </I18nClientProvider>
      </body>
    </html>
  );
}
