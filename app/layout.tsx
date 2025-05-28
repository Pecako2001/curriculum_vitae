"use client";

import "@mantine/core/styles.css";
import "./module.css"
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
    <AppShell navbar={{ width: 300, breakpoint: "sm" }} padding={0}>
      <AppShell.Navbar
        style={{
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(8px)",
          borderRight: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "2px 0 16px #0001",
          height: "100%",
          padding: rem(16),
          position: "sticky",
          top: 0,
        }}
      >
        <Group align="center" gap="xs" mb="xl" style={{ flexDirection: "column" }}>
          <Avatar src="/avatar.jpg" size={80} radius="xl" />
          <Text size="lg" fw={700}>
            Koen van Wijlick
          </Text>
          <Text size="sm" c="dimmed">
            AI Engineer &amp; Developer
          </Text>
        </Group>
        <nav>
          <Group align="start" gap="xs" style={{ flexDirection: "column" }}>
            <a href="#education" style={{ textDecoration: "none", color: "inherit" }}>
              🎓 Education
            </a>
            <a href="#work" style={{ textDecoration: "none", color: "inherit" }}>
              💼 Work Experience
            </a>
            <a href="#expertise" style={{ textDecoration: "none", color: "inherit" }}>
              🧠 Expertise
            </a>
            <a href="#certs" style={{ textDecoration: "none", color: "inherit" }}>
              📜 Certifications
            </a>
            <a href="#volunteer" style={{ textDecoration: "none", color: "inherit" }}>
              🤝 Voluntary Work
            </a>
          </Group>
        </nav>
      </AppShell.Navbar>

      <AppShell.Header
        style={{
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 2px 8px #0001",
          padding: rem(16),
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: 700,
          fontSize: rem(22),
          letterSpacing: rem(1),
        }}
      >
        Curriculum Vitae
        <ColorSchemeToggle />
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Curriculum Vitae</title>
        <link rel="icon" href="/avatar.jpg" />
      </head>
      <body>
        <MantineProvider theme={mantineThemeConfig}>
          <Providers>
            <Notifications />
            <AppLayout>{children}</AppLayout>
          </Providers>
        </MantineProvider>
      </body>
    </html>
  );
}
