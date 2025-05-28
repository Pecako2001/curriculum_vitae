import "@mantine/core/styles.css";
import "../styles/globals.css"; // or './globals.css'
import React from "react";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
  AppShell,
  Group,
  Avatar,
  Text,
  rem,
} from "@mantine/core";
import I18nClientProvider from "../components/I18nClientProvider";
import { theme } from "../theme";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";

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
            navbar={{
              width: 260,
              breakpoint: "sm",
              collapsed: { desktop: false, mobile: false },
            }}
            header={{ height: 64, collapsed: false, offset: false }}
            styles={{
              main: {
                background: "none",
                minHeight: "100vh",
                padding: rem(32),
                paddingLeft: rem(300),
                position: "relative",
              },
            }}
          >
            <AppShell.Navbar>
              <div
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
                <Group
                  align="center"
                  gap="xs"
                  mb="xl"
                  style={{ flexDirection: "column" }}
                >
                  <Avatar src="/avatar.png" size={80} radius="xl" />
                  <Text size="lg" fw={700}>
                    Koen van Wijlick
                  </Text>
                  <Text size="sm" c="dimmed">
                    AI Engineer & Developer
                  </Text>
                </Group>
                <nav>
                  <Group
                    align="start"
                    gap="xs"
                    style={{ flexDirection: "column" }}
                  >
                    <a
                      href="#education"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      🎓 Education
                    </a>
                    <a
                      href="#work"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      💼 Work Experience
                    </a>
                    <a
                      href="#expertise"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      🧠 Expertise
                    </a>
                    <a
                      href="#certs"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      💻 Software & Certifications
                    </a>
                    <a
                      href="#volunteer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      🤝 Voluntary Work
                    </a>
                  </Group>
                </nav>
              </div>
            </AppShell.Navbar>
            <AppShell.Header>
              <header
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
                <a
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Curriculum Vitae
                </a>
                <ColorSchemeToggle />
              </header>
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
