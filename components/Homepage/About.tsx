import { Avatar, Group, Grid, Paper, Text, Title } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import classes from "./About.module.css";

export default function About() {
  return (
    <Paper
      className={classes.container}
      style={{ backdropFilter: "blur(4px)" }}
    >
      <Grid align="center">
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Avatar src="/avatar.jpg" size={160} radius={160} mx="auto" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 8 }}>
          <Title order={2}>About Me</Title>
          <Text mt="sm" className={classes.bio}>
            I&apos;m Koen from Panningen, Netherlands. I focus on Mechatronics
            and AI with a passion for robotics.
          </Text>
          <Group mt="md" gap="xs" className={classes.socials}>
            <a href="mailto:koenvanwijlick@gmail.com" aria-label="Email">
              <IconMail size={24} />
            </a>
            <a
              href="https://github.com/Pecako2001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IconBrandGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/koen-van-wijlick-00b820204/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={24} />
            </a>
          </Group>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}
