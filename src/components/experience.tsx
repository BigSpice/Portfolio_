"use client";

import { ArrowUpRight, Building2, Calendar, ChevronUp } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

// Helper function to safely check if we're in a browser environment
const isBrowser = typeof window !== "undefined";

interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  color: string;
  isCurrent: boolean;
}

const experiences: Experience[] = [
  {
    title: "Technical Implementation Specialist",
    company: "BFG Enterprise Services",
    companyUrl: "https://bfg.ca/",
    period: "03/2023 – present",
    description:
      "Technical deployment and support of our software solutions.",
    achievements: [
      "Managed cloud software services and service panels for clients, handling deployment, configuration, and maintenance on AWS and Azure.",
      "Tested, reviewed, and troubleshot installed systems to ensure functionality and reliability",
   "Installed, dressed, and terminated UTP, CAT5-6, supporting bandwidths of 10-100 Gbps",
   "Performed maintenance and troubleshooting of medical apparatus, for elderly homes and hospitals.",
   
    ],
    skills: [
      "STM32",
      "Java",
      "AWS",
      "Networking",
      "VxWorks",
      "WireShark",
      "Windows Diag",
      "NCR Systems",
      "NAIC Components",
      "PLC Programming",     
    ],
    color: "#10B981", // emerald
    isCurrent: true,
  },
  {
    title: "Lab Research Engineer - Stroke and Recovery",
    company: "University of Ottawa",
    companyUrl: "https://www.uottawa.ca/research-innovation/brain/research/stroke",
    period: "12/2023 – 05/2025",
    description:
      "Ottawa, Canada",
    achievements: [
      "Developed and enhanced test apparatus for stroke and rehabilitation research",
      "Programmed and integrated Arduino and Raspberry Pi systems for automated testing and data collection, with extensive use of GPIO, SPI for embedded systems design",
      "Utilized Python, Ruby, and C to develop automation and AI-driven solutions in the DeepLab suite and tools.",
      "Created and trained custom AI models using NumPy and MATLAB for advanced data analysis",
      "Leveraged NVIDIA hardware for AI-driven video analysis and automated report generation",
    ],
    skills: [
      "NVIDIA Jetson",
      "Fusion360",
      "Python",
      "C",
      "TensorFlow",
      "Arduino",
      "Raspberry Pi",
      "OpenCV",
      "Matlab",
      "NumPy",
      
    ],
    color: "#EC6241", 
    isCurrent: false,
  },
  {
    title: "Field Technician",
    company: "IBM",
    companyUrl: "https://www.ibm.com",
    period: "11/2022 – 10/2023",
    description:
      "Ottawa, Canada",
    achievements: [
      "Managed the installation, configuration, and maintenance of hardware/software systems, including servers, desktops, laptops, and printers.",
    "Diagnosed and resolved complex technical issues, providing timely user support.",
    "Implemented system updates, security patches, and performance optimizations, enhancing overall system stability and reducing vulnerabilities.",
    
    
    
    ],
    skills: [
      "AWS",
      "Linux",
      "Windows",
      "Networking",

    ],
    color: "#052e62", // blue
    isCurrent: false,
  },
  {
    title: "Hardware characterization",
    company: "Ciena",
    companyUrl: "https://www.ciena.com/",
    period: "09/2021 – 03/2022",
    description:
      "Ottawa, Canada",
    achievements: [
      "Developed and enhanced the automation framework by implementing new features using C#, Python and Java, improving test coverage.",
      "Created improved encryption for custom scripts to enhance security and improve hash verification reliability (SHA-3,BLAKE-3) .",
      "Created custom drivers and interfaces using QNX for closed source modification.", 
      "Designed and implemented a new Test Automation Suite to a modern Java UI custom created for the new system.",
      "Refactored and optimized existing testing software methods using Visual Studio C#, Python and Ruby.",
     
    ],
    skills: [
      "Server Admin",
      "Visual Basic",
      "Python",
      "C#",
      "Ruby",
      "Java",
      "Hardware Design",
      "Circut Electronics",
      "Test Automation",
      "QNX",
    ],
    color: "#8E0C1D",
    isCurrent: false,
  },
  {
    title: "Research Assistant",
    company: "University of Ottawa",
    companyUrl: "https://www.uottawa.ca/research-innovation/brain/research/stroke",
    period: "05/2021 – 09/2021",
    description:
      "Ottawa, Canada",
    achievements: [
      "Developed and optimized an automated testing environment for stroke research and treatment in collaboration with a research team.",
      "Designed and implemented Python scripts to automate testing procedures, ensuring efficiency and safety.",
      "Enhanced the testing environment using CAD and software to optimize conditions and procedures.",
      "Utilized NVIDIA Jetson, Arduino, OpenCV, and socket applications for real-time tracking and recognition of test elements.",
      "Implemented real-time data collection methods to analyze test results and drive improvements.",
      "Provided technical support, troubleshooting issues, and maintaining up-to-date documentation for future enhancements.",
     
   
    ],
    skills: [
      "NVIDIA Jetson",
      "Raspberry Pi",
      "Arduino",
      "Autocad",
      "C",
      "OpenCV",
      "Python",
      "TensorFlow",
    ],
    color: "#EC6241", 
    isCurrent: false,
  },
  {
    title: "Hardware Software Engineer",
    company: "Ciena",
    companyUrl: "https://www.ciena.com/",
    period: "01/2021 – 05/2021",
    description:
      "Ottawa, Canada",
    achievements: [
      "Designed custom code for ARM based devices using low level interfaces.",
      "Developed and executed new test case embedded software, making use of reverse engineering on the communication protocol of hardware.",
      "Created new hardware communication lines using CAD and making use of CAN communication standards.",
    "Created modern automation scripts using Python for test chambers and network switches.",
    "Optimized outdated testing software by reverse-engineering legacy code.",
    
    ],
    skills: [
      "Embedded Hardware",
      "QNX",
      "Python",
      "C++",
      "IDA",
      "DOT Peek",
      "Visual Basic",
      "Assembly",
    ],
    color: "#8E0C1D", 
    isCurrent: false,
  },
];

export default function Experience() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseEnter, setMouseEnter] = useState(false);

  // Track mouse position for interactive elements
  useEffect(() => {
    if (!isBrowser) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Track when section is in view
  useEffect(() => {
    if (!isBrowser) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
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

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      id="experience"
      ref={sectionRef}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 pointer-events-none -z-10">
        {/* Horizontal guide lines with varying opacity */}
        <div className="col-span-full row-start-1 h-[1px] w-full bg-neutral-800 dark:bg-neutral-200 opacity-30 hidden md:block"></div>
        <div className="col-span-full row-start-2 h-[1px] w-full bg-neutral-800 dark:bg-neutral-200 opacity-30 hidden md:block"></div>
      </div>

      {/* Minimal geometric background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Diamond element */}
        <motion.div
          initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
          animate={{
            opacity: isInView ? 0.05 : 0,
            rotate: isInView ? 45 : 60,
            scale: isInView ? 1 : 0.8,
            x: mouseEnter ? (mousePosition.x - 0.5) * -20 : 0,
            y: mouseEnter ? (mousePosition.y - 0.5) * -20 : 0,
          }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -right-[15vw] top-[30vh] w-[30vw] h-[30vw] border-neutral-300 dark:border-neutral-700 border opacity-40"
        />

        {/* Vertical line pattern for timeline */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{
            scaleY: isInView ? 1 : 0,
            opacity: isInView ? 0.1 : 0,
            x: mouseEnter ? (mousePosition.x - 0.5) * 10 : 0,
          }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-1/2 top-[20%] bottom-[10%] w-[1px] bg-neutral-400 dark:bg-neutral-600"
        />

        {/* Section indicator overlay */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 0.7 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute top-20 left-8 pointer-events-none"
        >
          <span
            className="text-[8rem] font-thin tracking-tighter select-none
            text-neutral-200 dark:text-neutral-800"
          >
            /03
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, rotate: 90, x: 50 }}
        animate={{ opacity: 0.07, rotate: 90, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute right-[100px] top-0 -translate-y-1/2 select-none pointer-events-none hidden md:block"
      >
        <span className="text-[120px] md:text-[180px] font-bold tracking-tight opacity-50 text-neutral-900 dark:text-neutral-100">
          /H
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header - Deconstructed and asymmetric, matching other sections */}
        <div className="relative mb-20 md:mb-32 px-4 sm:px-6 lg:px-8">
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
              <span className="block">History</span>
            </h2>
            <p className="text-base max-w-lg text-neutral-600 dark:text-neutral-400">
            A snapshot of my career and contributions.
            </p>
          </motion.div>
        </div>

        {/* Timeline indicator - vertical line that connects all experiences */}
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-neutral-300 dark:bg-neutral-700 opacity-30 hidden md:block" />

          {/* Experiences Container with Timeline */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-32 sm:mb-40 md:mb-56 relative">
                <ExperienceCard
                  experience={exp}
                  index={index}
                  totalExperiences={experiences.length}
                  mousePosition={mousePosition}
                  mouseEnter={mouseEnter}
                />

                {/* Timeline connector between experiences */}
                {index < experiences.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -bottom-24 text-neutral-400"
                  >
                    <ChevronUp
                      size={24}
                      className="animate-bounce opacity-40"
                    />
                  </motion.div>
                )}
              </div>
            ))}

            {/* Timeline markers updated to match reverse chronological flow */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center"
            >
              <div className="relative h-6 w-6 rounded-full flex items-center justify-center">
                <span className="absolute -top-8 right-rem text-xs tracking-wider text-neutral-500 whitespace-nowrap">
                  Present
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-12 hidden md:flex flex-col items-center justify-center"
            >
              <div className="h-4 w-4 rotate-45 bg-green-500 dark:bg-green-400 border border-neutral-300 dark:border-neutral-700" />
              <span className="mt-4 text-xs tracking-wider text-neutral-500">
                Past
              </span>
            </motion.div>
          </div>

          {/* Timeline direction indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:flex absolute left-full ml-8 top-1/2 transform -translate-y-1/2 items-center gap-2 text-neutral-500"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs uppercase tracking-wider">Career</span>
              <span className="text-xs uppercase tracking-wider">
                Progression
              </span>
              <div className="h-12 w-[1px] bg-neutral-400 mt-1"></div>
              <div className="rotate-180">
                <ChevronUp size={20} className="opacity-60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
  totalExperiences,
  mousePosition,
  mouseEnter,
}: {
  experience: Experience;
  index: number;
  totalExperiences: number;
  mousePosition: { x: number; y: number };
  mouseEnter: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const expRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardRect, setCardRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Track when element is in view for animations
  useEffect(() => {
    if (!isBrowser) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (expRef.current) {
      observer.observe(expRef.current);
    }

    return () => {
      if (expRef.current) {
        observer.unobserve(expRef.current);
      }
    };
  }, []);

  // Update window dimensions
  useEffect(() => {
    if (!isBrowser) return;

    // Initialize window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Update on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update card position for mouse interactions
  useEffect(() => {
    if (!isBrowser || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setCardRect({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    });
  }, [isInView, windowSize]);

  // Calculate relative mouse position to this card
  const relativeMouseX = isBrowser
    ? mousePosition.x * windowSize.width - cardRect.x
    : 0;
  const relativeMouseY = isBrowser
    ? mousePosition.y * windowSize.height - cardRect.y
    : 0;
  const mouseOverCard =
    mouseEnter &&
    relativeMouseX > 0 &&
    relativeMouseX < cardRect.width &&
    relativeMouseY > 0 &&
    relativeMouseY < cardRect.height;

  return (
    <motion.article
      ref={expRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative"
    >
      {/* Timeline position indicator */}
      <div className="absolute -left-20 top-12 hidden md:block">
        <span className="text-xs uppercase tracking-wider text-neutral-500">
          {index === 0
            ? "Current"
            : index === totalExperiences - 1
            ? "First Role"
            : ""}
        </span>
      </div>

      {/* Timeline node */}
      <div  className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{background: experience.color}}
          className= { `h-5 w-5 rounded-full ${ 
            experience.isCurrent
              ? "bg-neutral-700 dark:bg-neutral-300"
              : "bg-neutral-200 dark:bg-neutral-800"
          } border border-neutral-300 dark:border-neutral-700 flex items-center justify-center`}
        >
          {experience.isCurrent && (
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75 bg-neutral-400"></span>
          )}
        </motion.div>
      </div>

      {/* Main grid layout for each experience - fixed alignment */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 relative">
        {/* Role and Company Card - consistent positioning for both sides */}
        <div
          className={`md:col-span-5 ${
            isEven ? "md:col-start-1" : "md:col-start-8"
          } row-start-1 relative order-1`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={cardRef}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6 md:p-8 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md relative"
          >
            <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-4">
              {experience.title}
            </h3>

            <div className="space-y-4 mb-6">
              <Link
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2"
              >
                <Building2 size={18} className="text-neutral-500" />
                <span className="relative font-light text-lg group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-300">
                  {experience.company}
                  <span className="absolute -bottom-px left-0 h-px w-full bg-current transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-neutral-500 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-neutral-500" />
                <span
                  className={`font-light text-neutral-600 dark:text-neutral-400`}
                >
                  {experience.period}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[10px] uppercase tracking-wider border rounded-none bg-transparent border-neutral-300/30 dark:border-neutral-700/30 text-neutral-700 dark:text-neutral-400"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -bottom-3 -left-3 w-12 h-12 md:w-16 md:h-16 border-l-2 border-b-2 border-neutral-400 opacity-40" />
            <div className="absolute -top-3 -right-3 w-12 h-12 md:w-16 md:h-16 border-r-2 border-t-2 border-neutral-400 opacity-40" />

            {/* Timeline connector from card to center line */}
            <div
              className={`absolute ${
                isEven ? "right-0" : "left-0"
              } top-1/2 h-[1px] w-6 md:w-12 bg-neutral-300 dark:bg-neutral-700 opacity-30 hidden md:block`}
            />
          </motion.div>
        </div>

        {/* Description and Achievements Card - fixed alignment for consistent spacing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`md:col-span-5 ${
            isEven ? "md:col-start-7" : "md:col-start-2"
          } md:row-start-1 relative z-10 order-2`}
        >
          <div className="mt-0 rounded-lg md:mt-[100px] p-6 md:p-8 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-lg">
            <p className="mb-8 text-sm md:text-base font-light text-neutral-600 dark:text-neutral-400">
              {experience.description}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-4">
                  Description
                </h4>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : -10,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.6 + i * 0.1,
                      }}
                      className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="inline-block h-3 w-[2px] bg-neutral-400 mt-1.5 flex-shrink-0" />
                      <span className="text-sm font-light">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline connector from card to center line */}
          <div
            className={`absolute ${
              isEven ? "left-0" : "right-0"
            } top-[calc(100px+50%)] h-[1px] w-6 md:w-12 bg-neutral-300 dark:bg-neutral-700 opacity-30 hidden md:block`}
          />

          {/* Decorative side element */}
          <div
            className={`absolute ${
              isEven ? "right-0" : "left-0"
            } top-[70px] w-[1px] h-16 bg-neutral-400 opacity-30 hidden md:block`}
          />
        </motion.div>
      </div>
    </motion.article>
  );
}
