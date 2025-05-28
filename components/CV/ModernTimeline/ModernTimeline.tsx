// components/ModernTimeline/ModernTimeline.tsx
"use client";
import React, { useMemo, useRef } from "react";
import { Title, Text, Paper, Stack } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import classes from "./ModernTimeline.module.css";

interface Entry {
  id: string;
  label: string;
  sub?: string;
  info?: string;
  type?: "category";
}

const bgArr = ["/background1.png", "/background2.png", "/background3.png"];

export default function ModernTimeline() {
  const { t } = useTranslation();
  const bg = useMemo(() => bgArr[Math.floor(Math.random() * bgArr.length)], []);

  const sections: Entry[] = useMemo(
    () => [
      {
        id: "cat-edu",
        label: t("categories.education", "Education"),
        type: "category",
      },
      {
        id: "school1",
        label: t("career.school1.label"),
        sub: t("career.school1.sub"),
        info: t("career.school1.info"),
      },
      {
        id: "school2",
        label: t("career.school2.label"),
        sub: t("career.school2.sub"),
        info: t("career.school2.info"),
      },
      {
        id: "school3",
        label: t("career.school3.label"),
        sub: t("career.school3.sub"),
        info: t("career.school3.info"),
      },
      {
        id: "cat-intern",
        label: t("categories.internships", "Internships"),
        type: "category",
      },
      {
        id: "internship1",
        label: t("career.internship1.label"),
        sub: t("career.internship1.sub"),
        info: t("career.internship1.info"),
      },
      {
        id: "internship2",
        label: t("career.internship2.label"),
        sub: t("career.internship2.sub"),
        info: t("career.internship2.info"),
      },
      {
        id: "internship3",
        label: t("career.internship3.label"),
        sub: t("career.internship3.sub"),
        info: t("career.internship3.info"),
      },
      {
        id: "cat-work",
        label: t("categories.work", "Work Experience"),
        type: "category",
      },
      {
        id: "work1",
        label: t("career.work1.label"),
        sub: t("career.work1.sub"),
        info: t("career.work1.info"),
      },
      {
        id: "work2",
        label: t("career.work2.label"),
        sub: t("career.work2.sub"),
        info: t("career.work2.info"),
      },
      {
        id: "work3",
        label: t("career.work3.label"),
        sub: t("career.work3.sub"),
        info: t("career.work3.info"),
      },
      {
        id: "work5",
        label: t("career.work5.label"),
        sub: t("career.work5.sub"),
        info: t("career.work5.info"),
      },
      {
        id: "cat-vol",
        label: t("categories.volunteer", "Volunteer Work"),
        type: "category",
      },
      {
        id: "work4",
        label: t("career.work4.label"),
        sub: t("career.work4.sub"),
        info: t("career.work4.info"),
      },
      {
        id: "cat-more",
        label: t("categories.more", "And many more to come"),
        type: "category",
      },
    ],
    [t],
  );

  return (
    <section id="career" className={classes.wrapper}>
      <div className={classes.bg} style={{ backgroundImage: `url(${bg})` }} />
      <div className={classes.inner}>
        {/* using Stack keeps vertical rhythm on mobile */}
        <Stack gap="xl">
          {sections.map((entry, idx) => (
            <TimelineEntry key={entry.id} entry={entry} index={idx} />
          ))}
        </Stack>
      </div>
    </section>
  );
}

function TimelineEntry({ entry, index }: { entry: Entry; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });

  /* category headings */
  if (entry.type === "category") {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
      >
        <Title order={2} className={classes.category} id={entry.id}>
          {entry.label}
        </Title>
      </motion.div>
    );
  }

  /* timeline card */
  const sideClass = index % 2 === 0 ? classes.right : classes.left; // alternate

  return (
    <motion.div
      ref={ref}
      className={`${classes.entry} ${sideClass}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45 }}
    >
      <Paper withBorder={false} shadow="lg" className={classes.card}>
        <Title order={3} className={classes.title}>
          {entry.label}
        </Title>
        {entry.sub && (
          <Text className={classes.subtitle}>{entry.sub}</Text>
        )}
        {entry.info && (
          <Text className={classes.description}>{entry.info}</Text>
        )}
      </Paper>
    </motion.div>
  );
}