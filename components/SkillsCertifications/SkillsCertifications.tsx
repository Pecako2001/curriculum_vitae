"use client";
import { Title, Grid, Paper, List, Badge, Group } from "@mantine/core";
import classes from "./SkillsCertifications.module.css";

export default function SkillsCertifications() {
  return (
    <section id="skills" className={classes.wrapper}>
      <Title order={2} ta="center" mb="xl">
        Skills & Certifications
      </Title>
      <Grid gutter="xl" justify="center" className={classes.grid}>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper>
            <Title order={3}>Robotics & AI</Title>
            <List size="sm" mt="sm">
              <List.Item>Python</List.Item>
              <List.Item>C++</List.Item>
              <List.Item>ROS 2</List.Item>
              <List.Item>OpenCV</List.Item>
              <List.Item>YOLO</List.Item>
            </List>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper>
            <Title order={3}>Web & Data</Title>
            <List size="sm" mt="sm">
              <List.Item>React</List.Item>
              <List.Item>FastAPI</List.Item>
              <List.Item>PostgreSQL</List.Item>
              <List.Item>MQTT</List.Item>
            </List>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper>
            <Title order={3}>DevOps & Tools</Title>
            <List size="sm" mt="sm">
              <List.Item>Docker</List.Item>
              <List.Item>Git</List.Item>
              <List.Item>Linux</List.Item>
              <List.Item>Redis</List.Item>
              <List.Item>TIA Portal</List.Item>
            </List>
          </Paper>
        </Grid.Col>
      </Grid>
      <Group justify="center" mt="xl" className={classes.certs} gap="sm">
        <Badge variant="light">SolidWorks</Badge>
        <Badge variant="light">VCA</Badge>
      </Group>
    </section>
  );
}
