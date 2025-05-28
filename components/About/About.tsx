// components/AboutMe/AboutMe.tsx
"use client";
import React from "react";
import classes from "./About.module.css";

export default function AboutMe() {
  return (
    <section id="about" className={classes.wrapper}>
      <div className={classes.inner}>
        {/* Left – photo */}
        <div className={classes.photoWrap}>
          <img src="/avatar.jpg" alt="Koen van Wijlick smiling" />
        </div>

        {/* Right – introduction */}
        <article className={classes.content}>
          <h2 className={classes.heading}>Who I Am</h2>
          <p className={classes.paragraph}>
            I’m Koen van Wijlick — a mechatronics engineer turned AI enthusiast
            on a mission to make technlogies smarter and more sustainable. From
            a young age I was fascinated by how mechanical systems spring to
            life when guided by clever software, and that curiosity led me
            through a degree in Mechatronics and deep dives into robotics,
            computer vision and autonomous control. Today I build greenhouse
            robots that see, think and act on their own, freeing growers to
            focus on cultivating healthier crops while saving precious
            resources.
            <br />
            <br />I thrive where hardware meets code: designing precision
            mechanics in SolidWorks, wiring up ROS 2 nodes in C++ and squeezing
            every last bit of insight from camera feeds with Python and YOLO.
            Collaboration, transparent communication and relentless iteration
            are my trademarks; I believe great tech emerges when diverse minds
            unite around a shared goal. Beyond the lab you’ll find me running
            woodland trails, sketching new interface ideas or sharing knowledge
            at local maker meet‑ups. I strive to craft solutions that are not
            only technically elegant but also genuinely helpful for people and
            planet. If that resonates with you, let’s connect and grow something
            extraordinary together.
          </p>
        </article>
      </div>
    </section>
  );
}
