// components/ProjectsTimeline/ProjectsTimeline.tsx
"use client";
import {
  Badge,
  Button,
  Group,
  Paper,
  Text,
  ActionIcon,
} from "@mantine/core";
import {
  IconWorld,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import classes from "./projects.module.css";

export interface Project {
  title: string;
  description: string;
  tag: string;
  year: number;
  video?: string;
  website?: string;
  github?: string;
  linkedin?: string;
}

export const projects: Project[] = [
  {
    title: "Curriculum Vitae Website",
    description:
      "The CV website is an interactive and responsive portfolio built using Next.js and the Mantine UI library, designed to showcase my professional experience, projects, and skills in a modern and user-friendly format. It features dynamic sections for education, work history, technical skills, and personal projects, all presented with smooth animations and clean design. The site includes downloadable documents, live project links, and a contact form, making it both informative and engaging. With a focus on performance and accessibility, this project also serves as a practical demonstration of my frontend development abilities and attention to user experience.",
    tag: "Web Project",
    year: 2025,
    website: "https://koenvanwijlick.com",
    github: "https://github.com/Pecako2001/curriculum_vitae",
    linkedin: "https://www.linkedin.com/in/koen-van-wijlick-00b820204",
  },
  {
    title: "Run Evolve Application",
    description:
      "One of my passions is running. My interest in artificial intelligence inspired me to create a personal running companion—an application that analyzes my performance to provide insights and predict my best times. It also generates personalized training plans tailored to my abilities and progress. I use this project as a testing ground for newly released AI models and neural networks, allowing me to explore the latest advancements in a practical and meaningful way.",
    tag: "In Progress",
    year: 2025,
    github: "https://github.com/Pecako2001/run-evolve",
  },
  {
    title: "Growbot",
    description:
      "The GrowBot is an autonomous greenhouse robot designed to optimize crop growth through real-time data collection and AI analysis. It navigates independently between plant rows, measuring environmental factors like temperature, humidity, and soil moisture. Using computer vision and machine learning, it assesses plant health, detects issues early, and tracks growth. Based on this data, it suggests or triggers adjustments to improve growing conditions. GrowBot supports sustainable agriculture by enabling precise, data-driven cultivation and reducing manual intervention.",
    tag: "Graduation Project",
    year: 2025,
    video: "./Frontpage_1.jpeg",
    linkedin:
      "https://www.linkedin.com/posts/koen-van-wijlick-00b820204_growbot-autonomous-greenhouse-robot",
  },
  {
    title: "Advancements in Greenhouse Automation",
    description:
      "This machine vision system was developed as part of research into automated harvesting of bell peppers. It uses computer vision techniques and deep learning models to detect and localize ripe peppers in real-time from RGB images. The system was trained to identify different ripeness stages. Built using frameworks like YOLO, OpenCV, the project demonstrates practical application of AI in agriculture, contributing to more efficient and selective harvesting processes in controlled environments such as greenhouses.",
    tag: "Minor A Systems",
    year: 2024,
    video: "./videos/Minor.mp4",
    linkedin:
      "https://www.linkedin.com/posts/koen-van-wijlick-00b820204_met-trots-kan-ik-melden-dat-ik-mijn-onderzoek-activity-7209212549152567297-4tdb",
  },
  {
    title: "AI Detection",
    description:
      "During my internship at Mechatronic Machinery, I developed an AI-powered platform for object detection and localization, earning a final grade of 9.0. The system enables robots to identify and accurately locate objects for automated picking tasks, opening new possibilities in smart industrial automation. The platform allows users to easily train and deploy AI networks, making advanced machine vision more accessible.",
    tag: "Traineeship",
    year: 2023,
    video: "./videos/PRJ5_Traineeship.mp4",
    linkedin:
      "https://www.linkedin.com/posts/koen-van-wijlick-00b820204_%F0%9D%91%BB%F0%9D%92%8A%F0%9D%92%86%F0%9D%92%8F-%F0%9D%92%8E%F0%9D%92%86%F0%9D%92%95-%F0%9D%92%86%F0%9D%92%86%F0%9D%92%8F-%F0%9D%92%88%F0%9D%92%93%F0%9D%92%8A%F0%9D%92%87%F0%9D%92%87%F0%9D%92%86%F0%9D%92%8D-inmiddels-activity-7160176481279557635-0XJ5",
  },
];

/* Sort projects by year DESC */
const sorted = [...projects].sort((a, b) => b.year - a.year);

export default function ProjectsTimeline() {
  return (
    <section id="projects" className={classes.wrapper}>
      <div className={classes.container}>
        {/* Back button */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
          <Button component="a" href="/" variant="light" radius="xl">
            Back to main page
          </Button>
        </div>

        <h1 className={classes.headingPrimary}>My Projects</h1>

        {sorted.map((project, idx) => {
          const side = idx % 2 === 0 ? classes.right : classes.left;
          return (
            <div
              key={project.title}
              className={`${classes.entry} ${side}`}
              data-year={project.year}
            >
              <Paper withBorder={false} shadow="md" className={classes.card}>
                <h3 className={classes.cardTitle}>{project.title}</h3>
                <Badge className={classes.cardTag} size="md">
                  {project.tag}
                </Badge>

                {project.video &&
                  (project.video.match(/\.(jpeg|jpg|png|gif|webp)$/i) ? (
                    <img
                      src={project.video}
                      alt={project.title}
                      className={classes.media}
                    />
                  ) : (
                    <video controls className={classes.media}>
                      <source src={project.video} type="video/mp4" />
                      <track kind="captions" />
                    </video>
                  ))}

                <Text>{project.description}</Text>

                {(project.website || project.github || project.linkedin) && (
                  <Group className={classes.actions} gap="xs">
                    {project.website && (
                      <ActionIcon
                        className={classes.iconBtn}
                        component="a"
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Website"
                        size="lg"
                        variant="subtle"
                      >
                        <IconWorld size={24} />
                      </ActionIcon>
                    )}
                    {project.github && (
                      <ActionIcon
                        className={classes.iconBtn}
                        component="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        size="lg"
                        variant="subtle"
                      >
                        <IconBrandGithub size={24} />
                      </ActionIcon>
                    )}
                    {project.linkedin && (
                      <ActionIcon
                        className={classes.iconBtn}
                        component="a"
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        size="lg"
                        variant="subtle"
                      >
                        <IconBrandLinkedin size={24} />
                      </ActionIcon>
                    )}
                  </Group>
                )}
              </Paper>
            </div>
          );
        })}
      </div>
    </section>
  );
}