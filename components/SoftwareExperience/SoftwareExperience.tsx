"use client";
import { List, Stack, Title } from "@mantine/core";
import React from "react";
import classes from "./SoftwareExperience.module.css";

export default function SoftwareExperience() {
  return (
    <section id="certs" className={classes.wrapper}>
      <div className={classes.inner}>
        <Stack>
          <Title order={2}>Software Experience and Certifications</Title>
          <Title order={3} mt="sm">
            Certifications
          </Title>
          <List spacing="xs" size="sm" withPadding>
            <List.Item>
              <strong>SolidWorks Mechanical Design Associate</strong> – Issued: May
              2019 – No Expiration, Credential ID: C-5SUCTJW3L4. Validated
              proficiency in 3D CAD modeling, part design, assembly creation, and
              technical drawings using SolidWorks.
            </List.Item>
            <List.Item>
              <strong>Basisveiligheid VCA</strong> – Issued: March 2018 – Expires:
              March 2028, Credential ID: 541448.05174689. Certified in
              occupational health and safety for working in high-risk
              environments according to Dutch/Belgian VCA standards.
            </List.Item>
          </List>
          <Title order={3} mt="md">
            Software & Programming Skills
          </Title>
          <List spacing="xs" size="sm" withPadding>
            <List.Item>
              <strong>Python, C++</strong> – Robotics, AI, computer vision (YOLO,
              ROS 2, OpenCV)
            </List.Item>
            <List.Item>
              <strong>React, TypeScript, JavaScript</strong> – Modern frontend
              development for web applications
            </List.Item>
            <List.Item>
              <strong>PostgreSQL, SQLite</strong> – Relational database design,
              querying, and integration
            </List.Item>
            <List.Item>
              <strong>FastAPI, MQTT</strong> – Backend API development and
              real-time communication
            </List.Item>
            <List.Item>
              <strong>Docker, Git, Linux</strong> – Containerization, version
              control, and system operations
            </List.Item>
            <List.Item>
              <strong>Siemens PLC (TIA Portal)</strong> – Industrial automation and
              control systems
            </List.Item>
            <List.Item>
              <strong>SolidWorks, Inventor, AutoCAD</strong> – 3D modeling and 2D
              schematic design
            </List.Item>
            <List.Item>
              <strong>Redis, WebSockets</strong> – In-memory data storage and live
              data streaming
            </List.Item>
            <List.Item>
              <strong>Next.js, MUI (Material UI)</strong> – Full-stack web
              applications and component-driven UI design
            </List.Item>
          </List>
        </Stack>
      </div>
    </section>
  );
}
