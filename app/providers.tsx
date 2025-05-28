"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { MantineProvider } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { theme as mantineThemeConfig } from "../theme";

// Define the shape of the theme context
interface ThemeContextType {
  theme: "theme-dark" | "theme-light";
  toggleTheme: () => void;
  setThemeMode: (mode: "theme-dark" | "theme-light") => void;
}

// Create the context with a default undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// ThemeProvider component
export default function Providers({ children }: { children: ReactNode }) {
  const [colorScheme, setColorScheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("runevolve-theme");
      if (storedTheme === "theme-light" || storedTheme === "theme-dark") {
        return storedTheme === "theme-dark" ? "dark" : "light";
      }
      return document.body.classList.contains("theme-light") ? "light" : "dark";
    }
    return "dark"; // Default for SSR
  });

  const theme = colorScheme === "dark" ? "theme-dark" : "theme-light";

  useEffect(() => {
    document.body.classList.remove("theme-dark", "theme-light", "dark");
    document.body.classList.add(theme);
    if (colorScheme === "dark") {
      document.body.classList.add("dark");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("runevolve-theme", theme);
    }
  }, [colorScheme, theme]);

  // Global listener for React hydration errors
  useEffect(() => {
    const handleError = (e: ErrorEvent) => {
      if (e.message && e.message.toLowerCase().includes("hydration")) {
        notifications.show({
          title: "Hydration Error",
          message:
            "There was a problem loading this page. Refresh to continue.",
          color: "red",
        });
      }
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  const toggleTheme = () => {
    setColorScheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setThemeMode = (mode: "theme-dark" | "theme-light") => {
    setColorScheme(mode === "theme-dark" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setThemeMode }}>
      <MantineProvider
        forceColorScheme={colorScheme}
        theme={mantineThemeConfig}
      >
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
}
