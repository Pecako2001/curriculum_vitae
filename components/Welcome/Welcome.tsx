import { Anchor, Text, Title, Group, Badge, Box } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <Box className={classes.hero}>
      <Group justify="center" align="center" gap="md" mt={60}>
        <img src="/avatar.png" alt="Koen van Wijlick" className={classes.avatar} />
        <div>
          <Title className={classes.title} order={1}>
            Koen van Wijlick
          </Title>
          <Text size="lg" c="dimmed" mt={-4}>
            AI Engineer &amp; Developer
          </Text>
          <Group gap="xs" mt="xs">
            <Badge color="indigo" variant="light">Creative</Badge>
            <Badge color="yellow" variant="light">Problem Solver</Badge>
            <Badge color="teal" variant="light">Team Player</Badge>
          </Group>
        </div>
      </Group>
      <Text ta="center" size="xl" mt="xl" className={classes.subtitle}>
        🚗 Embark on my journey through education, work, and expertise!
      </Text>
      <Text ta="center" c="dimmed" mt="md" size="md">
        Scroll down to follow my career path and discover my story.
      </Text>
    </Box>
  );
}