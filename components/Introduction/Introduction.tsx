// components/Introduction/Introduction.tsx
"use client";
import React from "react";
import { Button, Avatar, Group } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconRocket,
} from "@tabler/icons-react";
import styles from "./Introduction.module.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export default function Introduction() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "nl";

  // PDF per language
  // Only the English CV PDF is available, so use it for all languages
  const cvPdf = "/Koen_van_Wijlick_CV_EN.pdf";

  return (
    <section id="intro" className={styles.wrapper}>
      {/* Language Switcher */}
      <Group justify="flex-end" className={styles.langSwitcher}>
        {LANGS.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`${styles.langBtn} ${currentLang === lang.code ? styles.langActive : ""}`}
            aria-label={lang.label}
            type="button"
          >
            <span style={{ fontSize: 22 }}>{lang.flag}</span>
          </button>
        ))}
      </Group>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={styles.card}
      >
        <Avatar
          src="/avatar.jpg"
          size={140}
          radius={140}
          className={styles.avatar}
        />

        <h1 className={styles.title}>
          {t("intro.greeting", "Hi, I’m")}{" "}
          <span className={styles.gradient}>Koen&nbsp;van&nbsp;Wijlick.</span>
        </h1>

        <p className={styles.subtitle}>
          {t(
            "intro.subtitle",
            "Mechatronics graduate & AI engineer building autonomous greenhouse robots.",
          )}
        </p>

        <Group justify="center" mt="md" gap="sm">
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

        <Group justify="center" mt="lg" gap="xs" className={styles.socials}>
          <a href="mailto:koenvanwijlick@gmail.com" aria-label="Email">
            <IconMail size={26} />
          </a>
          <a
            href="https://github.com/Pecako2001"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <IconBrandGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/koen-van-wijlick-00b820204/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin size={26} />
          </a>
        </Group>
      </motion.div>

      <motion.div
        className={styles.arrowWrap}
        initial={{ y: 0 }}
        animate={{ y: [0, 16, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <span className={styles.arrowText}>
          {t("intro.takeRoad", "Take the road of my journey")}
        </span>
        <svg
          className={styles.arrowIcon}
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M18 6V30M18 30L8 20M18 30L28 20"
            stroke="#1976d2"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
