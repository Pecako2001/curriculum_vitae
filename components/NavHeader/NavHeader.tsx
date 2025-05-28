"use client";
import React from "react";
import { Group, Button, Anchor } from "@mantine/core";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import classes from "./NavHeader.module.css";

export default function NavHeader() {
  const links = [
    { label: "About Me", href: "#intro" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certs" },
    { label: "Contact", href: "#contact" },
  ];
  const cvPdf = "/Koen_van_Wijlick_CV_EN.pdf";

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Koen van Wijlick</div>
      <nav className={classes.nav}>
        {links.map((link) => (
          <Anchor key={link.href} href={link.href} className={classes.link}>
            {link.label}
          </Anchor>
        ))}
      </nav>
      <Group gap="sm" className={classes.actions}>
        <Button component="a" href={cvPdf} size="sm">
          Download CV
        </Button>
        <ColorSchemeToggle />
      </Group>
    </header>
  );
}
