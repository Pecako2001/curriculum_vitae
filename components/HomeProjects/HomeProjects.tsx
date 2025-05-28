"use client";
import { Title, Text, Paper, SimpleGrid } from "@mantine/core";
import classes from "./HomeProjects.module.css";

interface Project {
  title: string;
  blurb: string;
}

const projects: Project[] = [
  {
    title: "Autonomous Greenhouse Monitor",
    blurb: "ROS 2 + GPS + MQTT",
  },
  {
    title: "Strava-integrated Fitness Tracker",
    blurb: "FastAPI + Next.js + PostgreSQL",
  },
];

export default function HomeProjects() {
  return (
    <section id="projects" className={classes.wrapper}>
      <Title order={2} ta="center" mb="xl">
        Highlighted Projects
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
        {projects.map((project) => (
          <Paper key={project.title}>
            <Title order={3}>{project.title}</Title>
            <Text mt="sm" c="dimmed">
              {project.blurb}
            </Text>
          </Paper>
        ))}
      </SimpleGrid>
    </section>
  );
}
