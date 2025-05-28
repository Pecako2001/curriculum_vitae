"use client";
import React, { useState } from "react";
import {
  Stack,
  Group,
  TextInput,
  Textarea,
  Button,
  Title,
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ name, email, reason, date });
  }

  return (
    <section className={classes.wrapper} id="contact">
      <Paper component="form" onSubmit={handleSubmit} className={classes.form}>
        <Stack>
          <Title order={2} ta="center">
            Let’s Talk
          </Title>
          <TextInput
            label="Name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
          />
          <Textarea
            label="Reason for contact"
            value={reason}
            onChange={(e) => setReason(e.currentTarget.value)}
            autosize
          />
          <DateInput
            label="Preferred date"
            value={date}
            onChange={setDate}
            clearable
          />
          <Group justify="flex-end">
            <Button type="submit">Submit</Button>
          </Group>
        </Stack>
      </Paper>
    </section>
  );
}
