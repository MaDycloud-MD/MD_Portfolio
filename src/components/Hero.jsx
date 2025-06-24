import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
   <section
  id="about"
  className="relative overflow-hidden pt-32 sm:pt-36 md:pt-40 pb-16 flex flex-col md:flex-row items-center md:items-start justify-start gap-6 md:gap-12"
>
  
  <div className="text-center md:text-left relative z-10 md:w-2/3">
    
   <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 drop-shadow-[0_1px_12px_rgba(168,85,247,0.45)] animated-gradient">
      Mohammed Shoaib. Makandar
    </h1>


    <div className="mt-2 text-2xl font-semibold text-gray-800 dark:text-gray-200 h-10">
      <TypeAnimation
        sequence={[
          'DevOps Engineer',
          2000,
          'Cloud Specialist',
          2000,
          'Oracle Certified',
          2000,
          'CI/CD Enthusiast',
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>

    <p className="mt-5 text-lg text-gray-600 dark:text-gray-300">
        Specializing in AWS, Kubernetes, CI/CD automation, and secure SaaS deployment for scalable businesses.
    </p>

    <div className="mt-6 flex gap-5 justify-center md:justify-start text-xl">
      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/myselfmd"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <img
          src="/logos/linkedin.svg"
          alt="LinkedIn"
          className="w-6 h-6 sm:w-7 sm:h-7"
        />
      </a>

      {/* Email */}
      <a
        href="mailto:md.shoaib.i.makandar@gmail.com"
        className="hover:scale-110 transition-transform duration-300"
      >
        <img
          src="/logos/gmail.svg"
          alt="Email"
          className="w-6 h-6 sm:w-7 sm:h-7"
        />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/MaDycloud-MD"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <img
          src="/logos/github2.svg"
          alt="GitHub"
          className="w- h-6 sm:w-7 sm:h-7"
        />
      </a>
    </div>


    <a
      href="/Resume.pdf"
      target="_blank"
      className="inline-block mt-6 px-6 py-2 rounded-full bg-primary text-black font-semibold hover:bg-yellow-400 transition"
    >
      Download Resume
    </a>

    <div className="mt-8 flex justify-center md:justify-start">
      <a
        href="#contact"
        className="group flex items-center gap-2 text-sm font-medium text-primary hover:underline hover:scale-105 transition"
      >
        Hire Me <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
      </a>
    </div>
  </div>


  <div className="relative w-40 h-40 sm:w-48 sm:h-48 z-10 transform md:translate-x-20 md:translate-y-8">
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-yellow-300 blur-xl opacity-30 animate-pulse"></div>
    <img
      src="/Profile1.jpg"
      alt="Shoaib"
      className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
    />
  </div>
</section>
  );
}
