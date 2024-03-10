import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm Abdul Azeez Adekoya, a results-driven Full Stack Developer specializing in C#, JavaScript, React, TypeScript, and Tailwind CSS.
        Over a years, I've crafted secure hotel reservation systems, dynamic e-commerce platforms, and engaging game listing applications. 
        My passion for clean code and collaborative development makes me eager to contribute my skills to innovative projects. 
        Let's build something great together!
        </p>

        <br />

        <p className="text-xl">
        Dynamic and results-oriented Full Stack Developer with 1  years of hands-on experience in creating innovative and efficient web applications.
        Proficient in C#, JavaScript, React, TypeScript, and skilled in crafting visually appealing UI with Tailwind CSS. 
        Adept at collaborating with cross-functional teams to deliver high-quality solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
