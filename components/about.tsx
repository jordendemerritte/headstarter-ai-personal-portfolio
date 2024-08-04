"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
          Throughout my academic studies in{" "}
          <span className="font-medium">Architecture</span>, I grew interested 
          in web development and UX/UI design. I enrolled in Code The Dream, a coding fellowship, and learned{" "}
          <span className="font-medium">front-end web development</span>.{" "} I am familiar with{" "}
          <span className="underline">AutoCAD, Blender, HTML, CSS, JavaScript, React, and TailwindCSS</span>.{" "}
          Outside of classes, I love{" "}<span className="italic">tending to
          my family's backyard garden, perusing through art museums, and lapping
          through literature and prose</span>.{" "} Learning new things is integral to my life. 
          I am currently learning about{" "}
          <span className="font-medium">real estate, economics, and urbanism</span>.
        </p>
    </motion.section>
  );
}
