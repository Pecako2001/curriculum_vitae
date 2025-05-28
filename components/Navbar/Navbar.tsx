// components/Navbar/Navbar.tsx (refactor)
"use client";
import React from "react";
import {
  ActionIcon,
  Burger,
  Drawer,
  Group,
  Stack,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconBrandLinkedin } from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../app/providers";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/koen-van-wijlick-00b820204/",
    Icon: IconBrandLinkedin,
    label: "LinkedIn",
  },
];

const LANGS = [
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export default function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  const { theme, setThemeMode } = useTheme();
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "nl";

  return (
    <header className={classes.navbar}>
      <div className={classes.inner}>
        {/* Brand */}
        <a href="/" className={classes.brand}>
          <img src="/Icon.png" alt="Logo" className={classes.brandLogo} />
          <span className={classes.brandText}>Personal&nbsp;Profile&nbsp;</span>
        </a>

        {/* Links */}
        <nav className={classes.links} aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={classes.link}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className={classes.controls}>
          {/* Social */}
          <Group gap="xs" className="socials" visibleFrom="md">
            {SOCIALS.map(({ href, Icon, label }) => (
              <ActionIcon
                key={href}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variant="subtle"
                aria-label={label}
                style={{ color: "#fff" }}
              >
                <Icon size={20} />
              </ActionIcon>
            ))}
          </Group>

          {/* Language */}
          <div className="langSwitcher" visibleFrom="md">
            {LANGS.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`${classes.langBtn} ${
                  currentLang === lang.code ? classes.langActive : ""
                }`}
                aria-label={lang.label}
              >
                {lang.flag}
              </button>
            ))}
          </div>

          {/* Theme */}
          <button
            className={classes.themeBtn}
            onClick={() =>
              setThemeMode(theme === "theme-dark" ? "theme-light" : "theme-dark")
            }
            aria-label="Toggle theme"
          >
            {theme === "theme-dark" ? "Dark" : "Light"}
            <IconChevronDown size={14} />
          </button>

          {/* Burger */}
          <Burger
            opened={opened}
            onClick={open}
            className={classes.burger}
            aria-label="Open navigation drawer"
            color="#fff"
          />
        </div>
      </div>

      {/* Mobile drawer */}
      <Drawer opened={opened} onClose={close} size="100%" padding="md">
        <Stack gap="lg">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className={classes.drawerLink}
            >
              {link.label}
            </a>
          ))}
          <Group gap="sm">
            {LANGS.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  close();
                }}
                className={`${classes.langBtn} ${
                  currentLang === lang.code ? classes.langActive : ""
                }`}
                aria-label={lang.label}
              >
                {lang.flag}
              </button>
            ))}
          </Group>
          <Group gap="xs">
            {SOCIALS.map(({ href, Icon, label }) => (
              <ActionIcon
                key={href}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variant="subtle"
                aria-label={label}
                style={{ color: "#fff" }}
              >
                <Icon size={22} />
              </ActionIcon>
            ))}
          </Group>
          <Button
            variant="outline"
            onClick={() => {
              setThemeMode(theme === "theme-dark" ? "theme-light" : "theme-dark");
              close();
            }}
          >
            Toggle Theme
          </Button>
        </Stack>
      </Drawer>
    </header>
  );
}
