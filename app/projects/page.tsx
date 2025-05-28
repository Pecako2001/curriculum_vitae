import {
  AspectRatio,
  Badge,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Title,
  ActionIcon,
} from "@mantine/core";
import {
  IconWorld,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export interface Project {
  title: string;
  description: string;
  tag: string;
  video?: string;
  website?: string;
  github?: string;
  linkedin?: string;
}

export const projects: Project[] = [
  {
    title: "Curriculum Vitae Website",
    description:
      "Interactive website built with Next.js and Mantine to present my professional experience.",
    tag: "Web Project",
    video: "./Frontpage_1.jpeg",
    website: "https://koenvanwijlick.com",
    github: "https://github.com/Pecako2001/curriculum_vitae",
    linkedin: "https://www.linkedin.com/in/koen-van-wijlick-00b820204",
  },
  {
    title: "Run Evolve Application",
    description:
      "A running companion app that tracks progress and offers adaptive training plans.",
    tag: "In Progress",
    github: "https://github.com/Pecako2001/run-evolve",
  },
  {
    title: "Growbot",
    description:
      "Graduation project focused on an autonomous greenhouse robot that optimizes crop growth.",
    tag: "Graduation Project",
    linkedin:
      "https://www.linkedin.com/posts/koen-van-wijlick-00b820204_growbot-autonomous-greenhouse-robot",
  },
  {
    title: "AI Detection",
    description:
      "Traineeship project exploring machine vision techniques for precise product detection.",
    tag: "Traineeship Project",
  },
];

export default function ProjectsPage() {
  return (
    <Container size="lg" py="xl">
      <Title order={1} ta="center" mb="xl">
        My Projects
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
        {projects.map((project) => (
          <Paper key={project.title} shadow="md" radius="md" p="md" withBorder>
            <Title order={3}>{project.title}</Title>
            <Badge variant="light" mt="xs" mb="sm">
              {project.tag}
            </Badge>
            {project.video && (
              <AspectRatio ratio={16 / 9} mb="sm">
                {project.video.includes("youtube") ? (
                  <iframe
                    src={project.video}
                    title={project.title}
                    frameBorder="0"
                    allowFullScreen
                  />
                ) : (
                  <video controls style={{ width: "100%" }}>
                    <source src={project.video} type="video/mp4" />
                    <track kind="captions" />
                  </video>
                )}
              </AspectRatio>
            )}
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
                    <IconWorld size={24} />
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
                    <IconBrandGithub size={24} />
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
                    <IconBrandLinkedin size={24} />
                  </ActionIcon>
                )}
              </Group>
            )}
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
}
