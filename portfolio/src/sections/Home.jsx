import React, { useMemo, useState, useEffect } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { delay, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import avator from "../assets/avator.png";

const socials = [
  {
    Icon: FaXTwitter,
    label: "X",
    href: "https://twitter.com/yourprofile",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devang-jadav-4404973a5/",
  },
  {
    Icon: FaGithub,
    label: "Github",
    href: "https://github.com/Devang0711",
  },
];

const glowVariants = {
  initial: {
    scale: 1,
    y: 0,
    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
  },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.95,
    y: 0,
    transition: { duration: 0.08 },
  },
};

export default function Home() {
  const roles = useMemo(
    () => ["Web Developer", "Software Developer"],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((prev) => prev + 1);
      } else if (!deleting && subIndex === current.length) {
        setDeleting(true);
      } else if (deleting && subIndex > 0) {
        setSubIndex((prev) => prev - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, deleting ? 50 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackground />

      {/* Background Gradient Blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8ff] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8ff] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          {/* Typing Role */}
          <motion.div
            className="mb-3 text-3xl md:text-4xl lg:text-4xl font-semibold text-white min-h-[1.6em]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {roles[index].substring(0, subIndex)}
            <span className="inline-block w-[2px] h-[1em] ml-1 bg-white animate-pulse align-middle"></span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello , I'm
            <br />
            <span className="text-white block mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-7xl">
              Devang Jadav
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I turn complex ideas into seamless, high-impact web experiences —
            building modern, scalable, lightning-fast applications that make a difference.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all"
            >
              View My Work
            </a>

            <a
              href="/Devang.pdf"
              download
              className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
            >
              My Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-6 text-2xl md:text-3xl justify-center lg:justify-start">
            {socials.map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className=" relative hidden lg:block">

          <div 
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              right: "10px" , width : " min(22vw , 410px )" , height : "min(40vw , 760px)" , borderRadius : "50%",
              filter : "blur(38px)" , opacity : 0.32 , 
              background : "conic-gradient(from 0deg , #1cd8d2 , #00bf8f , #302b63 , #1cd8d2)"
            }}
          />

         
          <motion.img
            src={avator}
            alt="Devang Jadav"
            className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none "
            style={{
              right : "-30px" , width : "min(45vw , 780px) " , maxHeight : "90vh" 
            }}
            initial ={{opacity:0 , y:40 , scale : 0.90}}
            animate= {{opacity:1 , y:0 ,scale:1}}
            transition={{delay:0.2, duration:0.8}}
          
          />
        </div>

      </div>
    </section>
  );
}