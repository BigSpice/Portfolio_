"use client";

import { socialLinks } from "@/constants";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ShaderGradientCanvas } from "@shadergradient/react"
import { ShaderGradient } from "@shadergradient/react"
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "../app/edit.css";
import { ArrowUpRight, Building2, Calendar, ChevronUp } from "lucide-react";

const GallerySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Track when section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const nameLetters = "Jordan Kaweesa".split("");
    
    return (
        <div
            ref={sectionRef}
            id="gallery"
            className="relative min-h-screen w-full overflow-hidden pt-28 md:pt-[200px]"
        >
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 pointer-events-none -z-10">
                <div className="col-span-full row-start-2 h-[1px] w-full bg-neutral-800 dark:bg-neutral-200 opacity-30 hidden md:block"></div>

                <div
                    className="col-span-full row-start-6 h-[1px] w-full bg-neutral-800 dark:bg-neutral-200 opacity-30 hidden md:block
        "
                ></div>
            </div>

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: isVisible ? 0.7 : 0, x: isVisible ? 0 : -50 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="absolute top-4 left-8 pointer-events-none"
                >
                    <span
                        className={`text-[8rem] font-thin tracking-tighter select-none
            text-neutral-200 dark:text-neutral-800`}
                    >
                        /05
                    </span>
                </motion.div>

                {/* Triangular element - adds visual balance with other sections */}
                <motion.div
                    initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
                    animate={{
                        opacity: isVisible ? 0.05 : 0,
                        rotate: isVisible ? -15 : 0,
                        scale: isVisible ? 1 : 0.8,
                    }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute -left-[25vw] top-[20vh] w-[50vw] h-[50vw] border-t-2 border-l-2 opacity-30 border-neutral-300/50 dark:border-neutral-700/50"
                />

                {/* Circular decorative element - similar to tech stack section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: isVisible ? 0.1 : 0,
                        scale: isVisible ? 1 : 0.8,
                    }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    className="absolute right-[10vw] bottom-[10vh] w-[30vw] h-[30vw] rounded-full border border-neutral-400 dark:border-neutral-600 opacity-20"
                />

                <motion.div
                    initial={{ opacity: 0, rotate: 90, x: 50 }}
                    animate={{ opacity: 0.07, rotate: 90, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="absolute right-[100px] top-0 -translate-y-1/2 select-none pointer-events-none hidden md:block"
                >
                    <span className="text-[120px] md:text-[180px] font-bold tracking-tight opacity-50 text-neutral-900 dark:text-neutral-100">
                        /G
                    </span>
                </motion.div>
            </div>
            <div className="max-w-7xl mx-auto">
        {/* Section Header - Deconstructed and asymmetric, matching other sections */}
        <div className="relative mb-20 md:mb-32 margin_please px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute -left-2 md:left-4 top-0 hidden md:block"
          >
            <div className="flex flex-col items-start space-y-1">
              <div className="h-[1px] w-8 bg-neutral-400"></div>
              <div className="h-[1px] w-16 bg-neutral-400"></div>
              <div className="h-[1px] w-4 bg-neutral-400"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="ml-0 md:ml-20"
          >
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8">
              <span className="block">Gallery</span>
            </h2>
            <p className="text-base max-w-lg text-neutral-600 dark:text-neutral-400">
            Images I’ve created, from real life, to rendered space.
            </p>
          </motion.div>
        </div>
      </div>
            {/* Main content container with improved asymmetric grid */}
            <div className="h-full flex flex-col justify-center py-16 md:py-0">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-16 items-start min-h-[65vh]">
                        <div className="lg:col-span-12 lg:col-start-2 lg:row-start-1 flex flex-col items-start justify-center z-10 order-1 lg:order-2">
                            {/* Section label indicator with enhanced styling */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="mb-8 flex items-center overflow-hidden"
                            >
                                <div className="h-px w-16 md:w-24 bg-neutral-400 dark:bg-neutral-600 mr-4"></div>
                                <div className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-light overflow-hidden">
                                    <motion.span
                                        initial={{ y: 20 }}
                                        animate={{ y: isVisible ? 0 : 20 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        className="inline-block"
                                    >
                                        3D Art and Photography
                                    </motion.span>
                                </div>
                            </motion.div>
                                <div >      
                                    
                                    <div className="bod_parent rounded-lg border border-neutral-200 dark:border-neutral-800 ">
                                        <div className="bod light_cs dark:light_cs ">
                                        <ul className="uls">
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/CG/Thumbnail_F/A3.png?raw=true' alt='Glass_house' />
                                                        <figcaption>Floating Fortress</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/CG/Thumbnail_F/A5.png?raw=true' alt='Datsun' />
                                                        <figcaption>Datsun</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/CG/Thumbnail_F/Limerance2.png' alt='Limerance' />
                                                        <figcaption>Limerance</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/CG/Thumbnail_F/OUIAOU.png' alt='OUIAOU' />
                                                        <figcaption>OUIAOU</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/CG/Thumbnail_F/Reaching_Not_Fleeing.png' alt='Reaching_Not_Fleeing m' />
                                                        <figcaption>Reaching Not Fleeing</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/CG/Thumbnail_F/Reaching_Not_FleeingA7.png' alt='Reaching_Not_Fleeing' />
                                                        <figcaption>Reaching Not Fleeing</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/RLS/SN_OPN/Thumbnail_F/TweLVeSixTy-1030023.png' alt='Colbys' />
                                                        <figcaption>Colby's</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/RLS/SN_OPN/Thumbnail_F/TweLVeSixTy-1030025.png' alt='Horse' />
                                                        <figcaption>Porshe Horse</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/RLS/SN_OPN/Thumbnail_F/TweLVeSixTy-1030039.png' alt='Asthetic' />
                                                        <figcaption>SnapShot</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/RLS/SN_OPN/Thumbnail_F/TweLVeSixTy-1030032.png' alt='Porshe' />
                                                        <figcaption>Porshe Red</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/RLS/SN_OPN/Thumbnail_F/TweLVeSixTy-1030068.png' alt='Staring Carbon' />
                                                        <figcaption>Staring Carbon</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/RLS/SN_OPN/Thumbnail_F/TweLVeSixTy-1030159.png' alt='FullMoon Auto' />
                                                        <figcaption>FullMoon Auto</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/RLS/SN_OPN/Thumbnail_F/TweLVeSixTy-1030187.png' alt='Lincoln' />
                                                        <figcaption>Lincoln</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/RLS/SN_OPN/Thumbnail_F/waxing-1030217.png' alt='WAX' />
                                                        <figcaption>WAX</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <figure>
                                                        <img className="imgz" loading="lazy" src='https://github.com/BigSpice/Portfolio_/blob/main/Images/RLS/SN_OPN/Thumbnail_F/TweLVeSixTy-1030211.png' alt='Huzz_Mobile' />
                                                        <figcaption>Season Opener Fun</figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                        </div>
                                    </div>
                                    {/* Timeline direction indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:flex absolute lefthalf ml-8 top-1/2 transform -translate-y-1/2 items-center gap-2 text-neutral-500"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs uppercase tracking-wider">
                Scroll
              </span>
              <div className="h-12 w-[1px] bg-neutral-400 mt-1"></div>
              <div className="rotate-180">
                <ChevronUp size={20} className="opacity-60" />
              </div>
            </div>
          </motion.div>
                                                    <div className="absolute -bottom-3 left-rem w-12 h-12 md:w-16 md:h-16 border-l-2 border-b-2 border-neutral-400 opacity-40" />

                            </div>

                        </div >{/* Main content container with improved asymmetric grid */}
                    </div>
                </div>
            </div>
            <div className="md:py-28"></div>

        </div>
    );
};

export default GallerySection;
