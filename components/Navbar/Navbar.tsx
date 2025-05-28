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
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandTiktok,
  IconBrandYoutube,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import classes from "./Navbar.module.css";

const LINKS = [
  { label: "ABOUT", href: "/about" },
  { label: "PROPERTIES", href: "/properties" },
  { label: "ADVERTISE", href: "/advertise" },
  { label: "SELLERS", href: "/sellers" },
  { label: "BUYERS", href: "/buyers" },
  { label: "RESOURCES", href: "/resources" },
  { label: "NEWS", href: "/news" },
  { label: "CONTACT", href: "/contact" },
];

const SOCIALS = [
  { href: "https://www.tiktok.com", Icon: IconBrandTiktok },
  { href: "https://www.youtube.com", Icon: IconBrandYoutube },
  { href: "https://www.facebook.com", Icon: IconBrandFacebook },
  { href: "https://www.instagram.com", Icon: IconBrandInstagram },
  { href: "https://www.linkedin.com", Icon: IconBrandLinkedin },
];

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);

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
          <a href="/" style={{ lineHeight: 0 }}>
            <img src="/logo.png" alt="Logo" height={32} />
          </a>
          <Group gap="md" visibleFrom="sm">
            {navLinks}
          </Group>
        </Flex>
        <Flex bg="dark.7" px="md" py="sm" align="center" gap="xs">
          <Group gap="xs" visibleFrom="sm" c="gray.0">
            {icons}
          </Group>
          <Button
            component="a"
            href="/list-your-property"
            variant="outline"
            color="gray.0"
            visibleFrom="sm"
            style={{
              fontWeight: 700,
              textTransform: "uppercase",
              borderColor: "white",
              color: "white",
            }}
          >
            ADD A LISTING
          </Button>
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
          </Group>
          <Button
            component="a"
            href="/list-your-property"
            variant="outline"
            style={{ fontWeight: 700, textTransform: "uppercase" }}
            onClick={close}
          >
            ADD A LISTING
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
