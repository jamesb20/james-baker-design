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
      className="mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My great grandad’s years as a coach-builder sparked my Dad's passion for creative projects, it wasn’t long until I followed suit for myself, heading towards a career in Industrial Design.

        I eventually landed on the University of Liverpool's Industrial Design course, and have never looked back.
      </p>
      <br />
      <p>
        It wasn’t until my University application process that I was sure ID was the right path for me. Having applied onto an Automotive design course, I was fortunate enough to present my portfolio to prominent Automotive and Industrial designer Rich Gilmartin. Despite not having studied any design subjects during my A-levels, I had dedicated 4 months to create a portfolio of work from scratch. Being reviewed against other applicants didn’t give me confidence that I would have success during the interview. However, that interview changed the course of my life. Rich not only acknowledged my potential but also spent time with me exploring the world of design, sharing his journey, and demonstrating his skills through live sketches, sketches which I still have to this day.
      </p>
      <br />
      <p>
        I eventually landed on the University of Liverpool's Industrial Design course, and have never looked back.
      </p>
    </motion.section>
  );
}
