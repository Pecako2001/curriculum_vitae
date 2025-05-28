"use client";

import {
  ActionIcon,
  Box,
  Button,
  Drawer,
  Flex,
  Group,
  Burger,
  Stack,
  Menu,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconBrandLinkedin } from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import { useTheme } from "../../app/providers";

const LINKS = [
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT", href: "/contact" },
];

const SOCIALS = [{ href: "https://www.linkedin.com/in/koen-van-wijlick-00b820204/", Icon: IconBrandLinkedin }];

const LANGS = [
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { theme, setThemeMode } = useTheme();
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "nl";
  const navLinks = LINKS.map((link) => (
    <a key={link.href} href={link.href} className={classes.link}>
      {link.label}
    </a>
  ));

  const icons = SOCIALS.map(({ href, Icon }) => (
    <ActionIcon
      key={href}
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant="subtle"
      color="gray.0"
    >
      <Icon size={20} />
    </ActionIcon>
  ));

  const themeLabel = theme === "theme-light" ? "Light" : "Dark";

  return (
    <Box component="header" w="100%">
      <Flex w="100%">
        <Flex
          flex={1}
          bg="gray.0"
          px="md"
          py="sm"
          align="center"
          justify="space-between"
        >
          <a href="/" className={classes.brand}>
            <img src="/Icon.png" alt="Logo" height={32} />
            <span className={classes.brandText}>Ciriculum vitea</span>
          </a>
          <Group gap="md" visibleFrom="sm">
            {navLinks}
          </Group>
        </Flex>
        <Flex bg="dark.7" px="md" py="sm" align="center" gap="xs">
          <Group gap="xs" visibleFrom="sm" c="gray.0">
            {icons}
          </Group>
          <nav className={classes.langSwitcher} aria-label="Language switcher">
            {LANGS.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`${classes.langBtn} ${
                  currentLang === lang.code ? classes.langActive : ""
                }`}
                aria-label={lang.label}
                type="button"
              >
                {lang.flag}
              </button>
            ))}
          </nav>
          <Menu>
            <Menu.Target>
              <Button
                className={classes.themeButton}
                rightSection={<IconChevronDown size={14} />}
              >
                {themeLabel}
              </Button>
            </Menu.Target>
            <Menu.Dropdown className={classes.dropdown}>
              <Menu.Item onClick={() => setThemeMode("theme-light")}>
                Light
              </Menu.Item>
              <Menu.Item onClick={() => setThemeMode("theme-dark")}>
                Dark
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            color="white"
          />
        </Flex>
      </Flex>

      <Drawer
        opened={opened}
        onClose={close}
        hiddenFrom="sm"
        size="100%"
        p="md"
      >
        <Stack gap="md">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className={classes.link}
            >
              {link.label}
            </a>
          ))}
          <Group gap="xs" mt="md">
            {icons}
            <Menu>
              <Menu.Target>
                <Button
                  className={classes.themeButton}
                  rightSection={<IconChevronDown size={14} />}
                >
                  {themeLabel}
                </Button>
              </Menu.Target>
              <Menu.Dropdown className={classes.dropdown}>
                <Menu.Item
                  onClick={() => {
                    setThemeMode("theme-light");
                    close();
                  }}
                >
                  Light
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    setThemeMode("theme-dark");
                    close();
                  }}
                >
                  Dark
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
          <Group gap="xs">
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
                type="button"
              >
                {lang.flag}
              </button>
            ))}
          </Group>
        </Stack>
      </Drawer>
    </Box>
  );
}
