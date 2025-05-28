"use client";

import { Badge, Group, Paper, SimpleGrid, Stack, Title } from "@mantine/core";

const categories = [
  {
    label: "Programming & AI",
    skills: ["Python", "C++", "ROS 2", "YOLO", "OpenCV"],
  },
  {
    label: "Dev Tools",
    skills: ["Docker", "Git", "Linux"],
  },
  {
    label: "CAD & PLC",
    skills: ["SolidWorks", "AutoCAD", "Siemens PLC (TIA Portal)"],
  },
];

export default function Skills() {
  return (
    <section>
      <Title order={2} ta="center" mb="md">
        Skills &amp; Tools
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
        {categories.map((cat) => (
          <Paper key={cat.label} shadow="sm" radius="md" p="md">
            <Stack gap="xs">
              <Title order={4}>{cat.label}</Title>
              <Group gap="xs" wrap="wrap">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="light">
                    {skill}
                  </Badge>
                ))}
              </Group>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </section>
  );
}
