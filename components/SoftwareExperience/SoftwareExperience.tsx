// components/SoftwareExperience/SoftwareExperience.tsx
"use client";
import { Stack } from "@mantine/core";
import React from "react";
import classes from "./SoftwareExperience.module.css";

export default function SoftwareExperience() {
  return (
    <section id="certs" className={classes.wrapper}>
      <div className={classes.inner}>
        <Stack gap="xs">
          <h2 className={classes.headingPrimary}>Software Experience & Certifications</h2>

          {/* Certifications */}
          <h3 className={classes.headingSecondary}>Certifications</h3>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>SolidWorks Mechanical Design Associate</strong> – Issued: May 2019 – No expiration. Credential ID: C‑5SUCTJW3L4. Validated proficiency in 3 D CAD modelling, assembly creation and drawings using SolidWorks.
            </li>
            <li className={classes.listItem}>
              <strong>Basisveiligheid VCA</strong> – Issued: March 2018 – Expires: March 2028. Credential ID: 541448.05174689. Certified in occupational health & safety for high‑risk environments (Dutch/Belgian VCA standards).
            </li>
          </ul>

          {/* Software & Skills */}
          <h3 className={classes.headingSecondary}>Software & Programming Skills</h3>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Python, C++</strong> – Robotics, AI, computer vision (YOLO, ROS 2, OpenCV)
            </li>
            <li className={classes.listItem}>
              <strong>React, TypeScript, JavaScript</strong> – Modern frontend development
            </li>
            <li className={classes.listItem}>
              <strong>PostgreSQL, SQLite</strong> – Database design & integration
            </li>
            <li className={classes.listItem}>
              <strong>FastAPI, MQTT</strong> – Backend APIs & real‑time comms
            </li>
            <li className={classes.listItem}>
              <strong>Docker, Git, Linux</strong> – Containerisation, version control & ops
            </li>
            <li className={classes.listItem}>
              <strong>Siemens PLC (TIA Portal)</strong> – Industrial automation & control
            </li>
            <li className={classes.listItem}>
              <strong>SolidWorks, Inventor, AutoCAD</strong> – 3 D modelling & 2 D schematics
            </li>
            <li className={classes.listItem}>
              <strong>Redis, WebSockets</strong> – In‑memory data storage & live streaming
            </li>
            <li className={classes.listItem}>
              <strong>Next.js, MUI</strong> – Full‑stack web apps & component‑driven UI
            </li>
          </ul>
        </Stack>
      </div>
    </section>
  );
}
