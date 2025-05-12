"use client";

import ProjectCard from "@/components/project-card";
import { useTheme } from "next-themes";
import ContactSection from "../components/contact-section";
import Experience from "../components/experience";
import HeroSection from "../components/hero";
import TechStack from "../components/tech-stack";
import GallerySection from "../components/gallery-section";
import React from "react";
import AnimatedCursor from "react-animated-cursor"
import { ShaderGradientCanvas } from "@shadergradient/react"
import { ShaderGradient } from "@shadergradient/react"

export default function Page() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
    
  return (

    <main className="relative overflow-hidden">
      <div className=" bg bg_fill dark:bg_fill"></div>

 


      <div
        className={`fixed inset-0 opacity-[0.03] ${
          isDark ? "opacity-[0.07]" : "opacity-[0.03]"
        } pointer-events-none z-[-1]`}
     
       /*  style={{
          backgroundImage: `linear-gradient(${
            isDark ? "#fff" : "#000"
          } 1px, transparent 1px), linear-gradient(90deg, ${
            isDark ? "#fff" : "#000"
          } 1px, transparent 1px)`,
          backgroundSize: "10px 10px",

          transition: "background-position 0.1s ease-out",
        }} */







        
      />
     
      


      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 pointer-events-none -z-10">
        <div className="col-start-3 row-span-full w-[1px] h-full bg-neutral-800 dark:bg-neutral-200 opacity-30 hidden md:block"></div>
        <div className="col-start-11 row-span-full w-[1px] h-full bg-neutral-800 dark:bg-neutral-200 opacity-30 hidden md:block"></div>
      </div>

      <HeroSection />
      <TechStack />
      <Experience />
      <ProjectCard />
      <GallerySection />
      <ContactSection />
    </main> 
  );
}
