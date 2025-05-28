// components/Contact/Contact.tsx
"use client";
import React, { useState } from "react";
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
        <h2 className={classes.heading}>Let’s Talk</h2>
        <Stack gap="sm">
          <TextInput
            label="Name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            required
            classNames={{ root: classes.inputRoot }}
          />
          <TextInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
            classNames={{ root: classes.inputRoot }}
          />
          <Textarea
            label="Reason for contact"
            value={reason}
            onChange={(e) => setReason(e.currentTarget.value)}
            autosize
            minRows={3}
            classNames={{ root: classes.inputRoot }}
          />
          <DateInput
            label="Preferred date"
            value={date}
            onChange={(v) => setDate(v as Date | null)}
            clearable
            classNames={{ root: classes.inputRoot }}
          />
          <Group justify="flex-end">
            <Button type="submit" radius="xl" className={classes.submitBtn}>
              Submit
            </Button>
          </Group>
          {submitted && (
            <p
              style={{ textAlign: "center", color: "var(--accent)", margin: 0 }}
            >
              Thanks! I’ll be in touch soon.
            </p>
          )}
        </Stack>
      </Paper>
    </section>
  );
}
