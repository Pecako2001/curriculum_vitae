// components/Skills/Skills.tsx
"use client";
import React from "react";
import classes from "./Skills.module.css";

type Skill = {
  category: string;
  tools: string[];
};

const skills: Skill[] = [
  {
    category: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "MUI", "Tailwind"],
  },
  {
    category: "Backend & APIs",
    tools: ["FastAPI", "Node.js", "MQTT", "Redis", "WebSockets"],
  },
  {
    category: "Data & AI",
    tools: ["Python", "TensorFlow", "YOLO", "OpenCV", "ROS 2"],
  },
  {
    category: "DevOps",
    tools: ["Docker", "Git", "GitHub Actions", "Linux"],
  },
  {
    category: "Databases",
    tools: ["PostgreSQL", "SQLite", "Supabase"],
  },
  {
    category: "CAD / CAM",
    tools: ["SolidWorks", "Inventor", "AutoCAD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={classes.wrapper}>
      <div className={classes.inner}>
        {skills.map((skill) => (
          <article key={skill.category} className={classes.skillCard}>
            <h3 className={classes.skillTitle}>{skill.category}</h3>
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
