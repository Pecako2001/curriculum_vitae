// components/Contact/Contact.tsx
"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Stack,
  Group,
  TextInput,
  Textarea,
  Button,
  Paper,
} from "@mantine/core";
// @ts-ignore - optional dependency not installed in this template
import { DateInput } from "@mantine/dates";
import classes from "./Contact.module.css";

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: handle form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className={classes.wrapper} id="contact">
      <Paper component="form" onSubmit={handleSubmit} className={classes.form}>
        <h2 className={classes.heading}>{t("contact.heading")}</h2>
        <Stack gap="sm">
          <TextInput
            label={t("contact.name")}
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            required
            classNames={{ root: classes.inputRoot }}
          />
          <TextInput
            label={t("contact.email")}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
            classNames={{ root: classes.inputRoot }}
          />
          <Textarea
            label={t("contact.reason")}
            value={reason}
            onChange={(e) => setReason(e.currentTarget.value)}
            autosize
            minRows={3}
            classNames={{ root: classes.inputRoot }}
          />
          <DateInput
            label={t("contact.preferredDate")}
            value={date}
            onChange={(v) => setDate(v as Date | null)}
            clearable
            classNames={{ root: classes.inputRoot }}
          />
          <Group justify="flex-end">
            <Button type="submit" radius="xl" className={classes.submitBtn}>
              {t("contact.submit")}
            </Button>
          </Group>
          {submitted && (
            <p
              style={{ textAlign: "center", color: "var(--accent)", margin: 0 }}
            >
              {t("contact.thanks")}
            </p>
          )}
        </Stack>
      </Paper>
    </section>
  );
}
