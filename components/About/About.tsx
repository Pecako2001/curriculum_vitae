// components/AboutMe/AboutMe.tsx
"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./About.module.css";

export default function AboutMe() {
  const { t } = useTranslation();

  const paragraph = t("about.paragraph")
    .split("\n")
    .map((line, idx) => (
      <React.Fragment key={idx}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    <section id="about" className={classes.wrapper}>
      <div className={classes.inner}>
        {/* Left – photo */}
        <div className={classes.photoWrap}>
          <img src="/avatar.jpg" alt="Koen van Wijlick smiling" />
        </div>

        {/* Right – introduction */}
        <article className={classes.content}>
          <h2 className={classes.heading}>{t("about.heading")}</h2>
          <p className={classes.paragraph}>{paragraph}</p>
        </article>
      </div>
    </section>
  );
}
