import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Project from '@/components/1project-template/project-template'
import AcademicHistory from '@/public/History.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience/>
      <Image src={AcademicHistory} alt="" height={2000} width={1000} />
      <Contact />
    </main>
  );
}
