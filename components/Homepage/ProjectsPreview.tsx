"use client";

import React from "react";
import {
  ActionIcon,
  Badge,
  Button,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconWorld,
} from "@tabler/icons-react";

import { projects } from "@/app/projects/page";

export default function ProjectsPreview() {
  const topProjects = projects.slice(0, 3);

  return (
    <section id="projects-preview">
      <Title order={2} mb="md">
        Featured Projects
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
        {topProjects.map((project) => (
          <Paper key={project.title} withBorder>
            <Title order={4}>{project.title}</Title>
            <Badge variant="light" mt="xs" mb="sm">
              {project.tag}
            </Badge>
            <Text>{project.description}</Text>
            {(project.website || project.github || project.linkedin) && (
              <Group mt="sm" gap="xs">
                {project.website && (
                  <ActionIcon
                    component="a"
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                    variant="subtle"
                    size="lg"
                  >
                    <IconWorld size={20} />
                  </ActionIcon>
                )}
                {project.github && (
                  <ActionIcon
                    component="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    variant="subtle"
                    size="lg"
                  >
                    <IconBrandGithub size={20} />
                  </ActionIcon>
                )}
                {project.linkedin && (
                  <ActionIcon
                    component="a"
                    href={project.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    variant="subtle"
                    size="lg"
                  >
                    <IconBrandLinkedin size={20} />
                  </ActionIcon>
                )}
              </Group>
            )}
          </Paper>
        ))}
      </SimpleGrid>
      <Group justify="center" mt="lg">
        <Button component="a" href="/projects">
          See all
        </Button>
      </Group>
    </section>
  );
}
