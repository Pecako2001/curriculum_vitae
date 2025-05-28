// components/ProjectsTimeline/ProjectsTimeline.tsx
"use client";
import { Badge, Button, Group, Paper, Text, ActionIcon } from "@mantine/core";
import {
  IconWorld,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import classes from "./projects.module.css";

export interface Project {
  key: string;
  year: number;
  video?: string;
  website?: string;
  github?: string;
  linkedin?: string;
}

const projects: Project[] = [
  {
    key: "growbot",
    year: 2025,
    video: "./Frontpage_1.jpeg",
    linkedin:
      "https://www.linkedin.com/posts/koen-van-wijlick-00b820204_growbot-autonomous-greenhouse-robot",
  },
  {
    key: "cvsite",
    year: 2025,
    website: "https://koenvanwijlick.com",
    github: "https://github.com/Pecako2001/curriculum_vitae",
    linkedin: "https://www.linkedin.com/in/koen-van-wijlick-00b820204",
  },
  {
    key: "runEvolve",
    year: 2025,
    github: "https://github.com/Pecako2001/run-evolve",
  },
  {
    key: "greenhouseAutomation",
    year: 2024,
    video: "./videos/Minor.mp4",
    linkedin:
      "https://www.linkedin.com/posts/koen-van-wijlick-00b820204_met-trots-kan-ik-melden-dat-ik-mijn-onderzoek-activity-7209212549152567297-4tdb",
  },
  {
    key: "aiDetection",
    year: 2023,
    video: "./videos/PRJ5_Traineeship.mp4",
    linkedin:
      "https://www.linkedin.com/posts/koen-van-wijlick-00b820204_%F0%9D%91%BB%F0%9D%92%8A%F0%9D%92%86%F0%9D%92%8F-%F0%9D%92%8E%F0%9D%92%86%F0%9D%92%95-%F0%9D%92%86%F0%9D%92%86%F0%9D%92%8F-%F0%9D%92%88%F0%9D%92%93%F0%9D%92%8A%F0%9D%92%87%F0%9D%92%87%F0%9D%92%86%F0%9D%92%8D-inmiddels-activity-7160176481279557635-0XJ5",
  },
];

const sorted = [...projects].sort((a, b) => b.year - a.year);

export default function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <section id="projects" className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.headingPrimary}>{t("projects.heading")}</h1>

        {sorted.map((project, idx) => {
          const side = idx % 2 === 0 ? classes.right : classes.left;
          return (
            <div
              key={project.key}
              className={`${classes.entry} ${side}`}
              data-year={project.year}
            >
              <Paper withBorder={false} shadow="md" className={classes.card}>
                <h3 className={classes.cardTitle}>
                  {t(`projects.items.${project.key}.title`)}
                </h3>
                <Badge className={classes.cardTag} size="md">
                  {t(`projects.items.${project.key}.tag`)}
                </Badge>

                {project.video &&
                  (project.video.match(/\.(jpeg|jpg|png|gif|webp)$/i) ? (
                    <img
                      src={project.video}
                      alt={t(`projects.items.${project.key}.title`)}
                      className={classes.media}
                    />
                  ) : (
                    <video controls className={classes.media}>
                      <source src={project.video} type="video/mp4" />
                      <track kind="captions" />
                    </video>
                  ))}

                <Text>{t(`projects.items.${project.key}.description`)}</Text>

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
