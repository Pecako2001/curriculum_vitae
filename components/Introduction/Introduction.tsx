// components/Introduction/Introduction.tsx
"use client";
import React from "react";
import { Button, Group } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconRocket,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./Introduction.module.css";

const LANGS = [
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export default function Introduction() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "nl";

  const cvPdf = "/Koen_van_Wijlick_CV_EN.pdf";

  return (
    <section id="intro" className={styles.wrapper}>
      {/* Left – full‑bleed photo (swap src for your own) */}
      <div className={styles.image} aria-hidden="true">
        <img
          src="/personal_image.jpeg"
          alt="Mountain landscape with Koen looking ahead"
        />
      </div>

      {/* Right – content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={styles.content}
      >
        <h1 className={styles.title}>
          {t("intro.greeting", "Hi, I’m")}{" "}
          <span className={styles.highlight}>Koen van Wijlick</span>
        </h1>

        <p className={styles.subtitle}>
          {t(
            "intro.subtitle",
            "Mechatronics graduate & AI engineer building autonomous greenhouse robots.",
          )}
        </p>

        <Group className={styles.buttons} gap="sm">
          <Button
            variant="light"
            radius="xl"
            component="a"
            href="#career"
            size="md"
          >
            {t("intro.viewJourney", "View my journey")}
          </Button>
          <Button
            variant="default"
            radius="xl"
            component="a"
            href={cvPdf}
            size="md"
          >
            {t("intro.downloadCV", "Download CV")}
          </Button>
          <Button
            leftSection={<IconRocket size={18} />}
            variant="outline"
            radius="xl"
            component="a"
            href="/projects"
            size="md"
          >
            {t("intro.viewProjects", "Projects")}
          </Button>
        </Group>

        <div className={styles.socials}>
          <a href="mailto:koenvanwijlick@gmail.com" aria-label="Email Koen">
            <IconMail size={24} />
          </a>
          <a
            href="https://github.com/Pecako2001"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Koen’s GitHub"
          >
            <IconBrandGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/koen-van-wijlick-00b820204/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Koen’s LinkedIn"
          >
            <IconBrandLinkedin size={24} />
          </a>
        </div>
      </motion.div>

      {/* Down‑arrow hint (desktop only) */}
      <motion.div
        className={styles.arrowWrap}
        initial={{ y: 0 }}
        animate={{ y: [0, 14, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <span className={styles.arrowText}>
          {t("intro.takeRoad", "Scroll for more")}
        </span>
        <svg
          width="32"
          height="32"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M18 6V30M18 30L8 20M18 30L28 20"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
