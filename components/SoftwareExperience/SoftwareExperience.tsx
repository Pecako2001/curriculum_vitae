// components/SoftwareExperience/SoftwareExperience.tsx
"use client";
import { Stack } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./SoftwareExperience.module.css";

export default function SoftwareExperience() {
  const { t } = useTranslation();
  return (
    <section id="certs" className={classes.wrapper}>
      <div className={classes.inner}>
        <Stack gap="xs">
          <h2 className={classes.headingPrimary}>{t("software.heading")}</h2>

          {/* Certifications */}
          <h3 className={classes.headingSecondary}>
            {t("software.certHeading")}
          </h3>
          <ul className={classes.list}>
            <li className={classes.listItem}>{t("software.cert1")}</li>
            <li className={classes.listItem}>{t("software.cert2")}</li>
          </ul>

          {/* Software & Skills */}
          <h3 className={classes.headingSecondary}>
            {t("software.skillsHeading")}
          </h3>
          <ul className={classes.list}>
            <li className={classes.listItem}>{t("software.skill1")}</li>
            <li className={classes.listItem}>{t("software.skill2")}</li>
            <li className={classes.listItem}>{t("software.skill3")}</li>
            <li className={classes.listItem}>{t("software.skill4")}</li>
            <li className={classes.listItem}>{t("software.skill5")}</li>
            <li className={classes.listItem}>{t("software.skill6")}</li>
            <li className={classes.listItem}>{t("software.skill7")}</li>
            <li className={classes.listItem}>{t("software.skill8")}</li>
            <li className={classes.listItem}>{t("software.skill9")}</li>
          </ul>
        </Stack>
      </div>
    </section>
  );
}
