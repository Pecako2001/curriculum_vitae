// components/Skills/Skills.tsx
"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./Skills.module.css";

type Skill = {
  category: string;
  tools: string[];
};

const skills: Skill[] = [
  {
    category: "skills.frontend",
    tools: ["React", "Next.js", "TypeScript", "MUI", "Tailwind"],
  },
  {
    category: "skills.backend",
    tools: ["FastAPI", "Node.js", "MQTT", "Redis", "WebSockets"],
  },
  {
    category: "skills.data",
    tools: ["Python", "TensorFlow", "YOLO", "OpenCV", "ROS 2"],
  },
  {
    category: "skills.devops",
    tools: ["Docker", "Git", "GitHub Actions", "Linux"],
  },
  {
    category: "skills.databases",
    tools: ["PostgreSQL", "SQLite", "Supabase"],
  },
  {
    category: "skills.cad",
    tools: ["SolidWorks", "Inventor", "AutoCAD"],
  },
];

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className={classes.wrapper}>
      <div className={classes.inner}>
        {skills.map((skill) => (
          <article
            key={skill.category}
            className={classes.skillCard}
            style={{ minWidth: "250px" }}
          >
            <h3 className={classes.skillTitle}>{t(skill.category)}</h3>
            <div className={classes.tagGrid}>
              {skill.tools.map((tool) => (
                <span key={tool} className={classes.tag}>
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
