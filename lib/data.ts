import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import project1aImg from "@/public/project-1a.png";
import project2eImg from "@/public/project-2e.png";
import project3aImg from "@/public/project-3a.png";
import project4dImg from "@/public/project-4d.png";
import project5Img from "@/public/project-5.png";
import project10Img from "@/public/project-10.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student in Code The Dream",
    location: "Miami, FL",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
  {
    title: "SDG Challenge Intern",
    location: "Miami, FL",
    description:
      `Collaborated within a team of four with representatives from Impact Hub, to alleviate the company’s core SDG problems within a proposed South Florida expansion.`,
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "AnitaB.org Advancing Inclusion Scholar",
    location: "Philadephia, PA",
    description:
      "",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
      title: "Presence",
      description: "A model inspired by a Morrocan bracelent which intertwines mysical features with the Miami coastline.",
      tags: ["AutoCAD", "Modeling", "Rendering"],
      imageUrl: project1aImg,
  },
  {
      title: "Weave",
      description: "Iterations of the model attempt to translate the  piece’s ornate features into simple forms.",
      tags: ["Modeling", "Rendering"],
      imageUrl: project4dImg,
  },
  {
      title: "Impact Hub",
      description: "Collaborated with a team to create a co-working space for the Impact Hub in Miami.",
      tags: ["Revit", "Photoshop", "Lumion"],
      imageUrl: project3aImg,
  },
  {
      title: "Centralization",
      description: "Created within my class, Architectural Materials and Construcation, this features an electrical plan.",
      tags: ["AutoCAD"],
      imageUrl: project2eImg,
  },
  {
      title: "Wall Section",
      description: "",
      tags: ["AutoCAD"],
      imageUrl: project10Img,
  },
  {
      title: "Openness",
      description: "A drawing of the Adrienne Arsht Center for the Performing Arts of Miami Dade.",
      tags: ["Drawing"],
      imageUrl: project5Img,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Blender",
] as const;