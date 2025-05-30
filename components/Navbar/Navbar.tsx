"use client";
import React from "react";
import Link from "next/link";
import {
  ActionIcon,
  Burger,
  Drawer,
  Group,
  Stack,
  Button,
  useMantineTheme,
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
  const mantineTheme = useMantineTheme();
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "nl";

  // Set burger color based on theme
  const burgerColor =
    theme === "theme-dark"
      ? mantineTheme.white
      : mantineTheme.colors.dark[7] || "#222";

  return (
    <header className={classes.navbar}>
      <div className={classes.inner}>
        {/* Brand */}
        <Link href="/" className={classes.brand}>
          <img src="/Icon.png" alt="Logo" className={classes.brandLogo} />
          <span className={classes.brandText}>Personal&nbsp;Profile&nbsp;</span>
        </Link>

        {/* Links */}
        <nav className={classes.links} aria-label="Primary">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={classes.link}>
              {link.label}
            </Link>
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
                style={{ color: burgerColor }}
              >
                <Icon size={20} />
              </ActionIcon>
            ))}
          </Group>

          {/* Language */}
          <Group className="langSwitcher" visibleFrom="md">
            {LANGS.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`${classes.langBtn} ${
                  currentLang === lang.code ? classes.langActive : ""
                }`}
                aria-label={lang.label}
              >
                {lang.flag}
              </button>
            ))}
          </Group>

          {/* Theme */}
          <button
            className={classes.themeBtn}
            type="button"
            onClick={() =>
              setThemeMode(
                theme === "theme-dark" ? "theme-light" : "theme-dark",
              )
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
            color={burgerColor}
          />
        </div>
      </div>

      {/* Mobile drawer */}
      <Drawer opened={opened} onClose={close} size="100%" padding="md">
        <Stack gap="lg">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className={classes.drawerLink}
            >
              {link.label}
            </Link>
          ))}
          <Group gap="sm">
            {LANGS.map((lang) => (
              <button
                key={lang.code}
                type="button"
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
                style={{ color: burgerColor }}
              >
                <Icon size={22} />
              </ActionIcon>
            ))}
          </Group>
          <Button
            variant="outline"
            onClick={() => {
              setThemeMode(
                theme === "theme-dark" ? "theme-light" : "theme-dark",
              );
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
