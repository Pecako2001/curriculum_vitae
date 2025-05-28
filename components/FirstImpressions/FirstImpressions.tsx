"use client";
import { Title, Text, Paper } from "@mantine/core";
import { IconRocket } from "@tabler/icons-react";
import classes from "./FirstImpressions.module.css";

export default function FirstImpressions() {
  return (
    <section id="first-impressions" className={classes.wrapper}>
      <div className={classes.inner}>
        <Title order={2} className={classes.title}>
          <IconRocket size={28} style={{ marginRight: 8 }} /> First Impressions
        </Title>
        <div className={classes.tagline}>
          <Text className={classes.left}>Focusing on practical innovation</Text>
          <Text className={classes.right}>Rooted in system-level thinking</Text>
        </div>
        <Paper className={classes.quote} shadow="sm">
          <Text>
            “Technology should not just work — it should scale, adapt, and
            inspire.”
          </Text>
        </Paper>
      </div>
    </section>
  );
}
