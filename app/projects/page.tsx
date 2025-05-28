import {
  Badge,
  Container,
  Button,
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
    video: "./Frontpage_1.jpeg",
    linkedin:
      "https://www.linkedin.com/posts/koen-van-wijlick-00b820204_growbot-autonomous-greenhouse-robot",
  },
  {
    title: "Advancements in Greenhouse Automation",
    description:
      "Minor project using machine vision to detect bell peppers, further more researching the capabilities within the greenhoues automation.",
    tag: "Minor A systems",
    video: "./videos/Minor.mp4",
    linkedin:
      "https://www.linkedin.com/posts/koen-van-wijlick-00b820204_met-trots-kan-ik-melden-dat-ik-mijn-onderzoek-activity-7209212549152567297-4tdb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQXQgsBiuWXsp4QkyzdZNYd_BqJiNwB3f4",
  },
  {
    title: "AI Detection",
    description:
      "Traineeship project exploring machine vision techniques for precise product detection.",
    tag: "Traineeship Project",
    video: "./videos/PRJ5_Traineeship.mp4",
    linkedin:
      "https://www.linkedin.com/posts/koen-van-wijlick-00b820204_%F0%9D%91%BB%F0%9D%92%8A%F0%9D%92%86%F0%9D%92%8F-%F0%9D%92%8E%F0%9D%92%86%F0%9D%92%95-%F0%9D%92%86%F0%9D%92%86%F0%9D%92%8F-%F0%9D%92%88%F0%9D%92%93%F0%9D%92%8A%F0%9D%92%87%F0%9D%92%87%F0%9D%92%86%F0%9D%92%8D-inmiddels-activity-7160176481279557635-0XJ5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQXQgsBiuWXsp4QkyzdZNYd_BqJiNwB3f4",
  },
];

export default function ProjectsPage() {
  return (
    <Container size="lg" py="xl">
      <Group justify="center" mb="md">
        <Button component="a" href="/" variant="light" radius="xl">
          Back to main page
        </Button>
      </Group>
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
            {project.video &&
              (project.video.match(/\.(jpeg|jpg|png|gif|webp)$/i) ? (
                <img
                  src={project.video}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 8,
                    display: "block",
                    marginBottom: "1rem",
                  }}
                />
              ) : (
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 8,
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  <source src={project.video} type="video/mp4" />
                  <track kind="captions" />
                </video>
              ))}
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
