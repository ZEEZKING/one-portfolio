import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20 md:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm Abdul Azeez Adekoya — a Full Stack Software Engineer passionate about building impactful digital solutions using C#, JavaScript, React, TypeScript, and Tailwind CSS.  
        I've developed everything from CBT applications for secondary schools and finance tracker tools to hotel reservation systems, e-commerce platforms, and interactive game listing apps.  
        I specialize in writing clean, scalable code and collaborating with teams to bring innovative ideas to life.  
        I'm excited to contribute to mission-driven projects that make a real difference.
        </p>

        <br />

        <p className="text-xl">
        Results-driven Full Stack Software Engineer with a strong foundation in both frontend and backend development.  
        Adept at solving complex technical challenges and crafting user-friendly web experiences with precision and performance in mind.  
        Known for delivering high-quality, scalable applications in fast-paced environments — and for bringing energy, creativity, and accountability to every team I'm part of.
        </p>
      </div>
    </div>
  );
};

export default About;
