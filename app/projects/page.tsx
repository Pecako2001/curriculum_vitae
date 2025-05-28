import {
  AspectRatio,
  Badge,
  Container,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

interface Project {
  title: string;
  description: string;
  tag: string;
  video?: string;
}

const projects: Project[] = [
  {
    title: "Curriculum Vitae Website",
    description:
      "Interactive website built with Next.js and Mantine to present my professional experience.",
    tag: "Web Project",
    video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Run Evolve Application",
    description:
      "A running companion app that tracks progress and offers adaptive training plans.",
    tag: "In Progress",
  },
  {
    title: "Growbot",
    description:
      "Graduation project focused on an autonomous greenhouse robot that optimizes crop growth.",
    tag: "Graduation Project",
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
                  </video>
                )}
              </AspectRatio>
            )}
            <Text>{project.description}</Text>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
}
