"use client";

import "@mantine/core/styles.css";
import "./module.css"
import {
  MantineProvider,
  createTheme,
  ActionIcon,
  Loader,
  AppShell,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import Providers, { useTheme } from "./providers";
import Navbar from "../components/Navbar/Navbar"; // Your custom Navbar component

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

// function AppLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <AppShell
//       header={
//         <AppShell.Header>
//           <Navbar />
//         </AppShell.Header>
//       }
//       styles={{
//         main: {
//           padding: "32px",
//           minHeight: "100vh",
//           background: "none",
//         },
//       }}
//     >
//       {children}
//     </AppShell>
//   );
// }

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell>
      <AppShell.Header>
        <Navbar/>
      </AppShell.Header>

      <AppShell.Main style={{ paddingTop: 60 }}>{children}</AppShell.Main>
    </AppShell>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Curriculum Vitae</title>
        <link rel="icon" href="/avatar.png" />
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
