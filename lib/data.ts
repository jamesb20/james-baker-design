import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";

import Keychron_K2 from '@/public/Keychron_K2/1.jpg'
import GarlicWheel from '@/public/GarlicWheel/1.jpg'
import SafariCart from '@/public/SafariCart/1.jpg'
import Fan_Heater from '@/public/Fan_Heater/1.jpg'
import Benie_Bike from '@/public/Benie_Bike/1.jpg'

import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { title } from "process";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Keychron_K2",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: Keychron_K2,
    slug: "Keychron_K2",
    picLen: 6
  },
  {
    title: "Garlic Wheel",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: GarlicWheel,
    slug: "GarlicWheel",
    picLen: 7
  },
  {
    title: "Safari Cart",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: SafariCart,
    slug: "SafariCart",
    picLen: 7
  },
  {
    title: "Fan Heater",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Fan_Heater,
    slug: "Fan_Heater",
    picLen: 7
  },
  {
    title: "Benie Bike",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Benie_Bike,
    slug: "Benie_Bike",
    picLen: 7
  },
] as const;

export const skillsData = [
  "Creo Parametric",
  "3DS Max",
  "Corel Suite",
  "DaVinci Resolve",
  "MS Excel",
  "MS Project",
  "Canva",
  "Ansys Granta",
  "Arduino",

  "Product Visualization & Simulation",
  "CAD Modeling & Rapid Prototyping",
  "User-Centered Design & Usability Testing",
  "Motion Design & Storyboarding",
  "Project Management & Team Collaboration"

  

] as const;
