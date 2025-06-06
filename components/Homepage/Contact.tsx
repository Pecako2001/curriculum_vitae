// components/Contact/Contact.tsx
"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { Paper, Group, Button, Text } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import classes from "./Contact.module.css";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className={classes.wrapper} id="contact">
      <Paper className={classes.form}>
        <h2 className={classes.heading}>{t("contact.heading", "Contact")}</h2>
        <Group gap="md" align="center">
          <Text size="lg">
            {t("contact.emailLabel", "Email:")}
            <br />
            <a
              href="mailto:koenvanwijlick@gmail.com"
              className={classes.emailLink}
              style={{ color: "var(--accent)", fontWeight: 600 }}
            >
              <IconMail size={18} style={{ verticalAlign: "middle", marginRight: 6 }} />
              koenvanwijlick@gmail.com
            </a>
          </Text>
          <Button
            component="a"
            href="mailto:koenvanwijlick@gmail.com"
            radius="xl"
            variant="light"
            leftSection={<IconMail size={18} />}
            className={classes.submitBtn}
          >
            {t("contact.sendMail", "Send Email")}
          </Button>
        </Group>
      </Paper>
    </section>
  );
}
