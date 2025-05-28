"use client";

import React from "react";
import { Container, Stack, Title, Text, Button, Group } from "@mantine/core";
import { motion } from "framer-motion";
import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <motion.div
      className={classes.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container>
        <Stack align="center" gap="md">
          <Title order={1} ta="center">
            Building the Future of Automation
          </Title>
          <Text ta="center" size="lg">
            Mechatronics graduate & AI engineer building autonomous greenhouse
            robots.
          </Text>
          <Group justify="center" gap="sm" mt="md">
            <Button
              component="a"
              href="/Koen_van_Wijlick_CV_EN.pdf"
              target="_blank"
            >
              Download CV
            </Button>
            <Button component="a" href="#career" variant="default">
              View My Journey
            </Button>
            <Button component="a" href="/projects" variant="outline">
              Projects
            </Button>
          </Group>
        </Stack>
      </Container>
    </motion.div>
  );
}
