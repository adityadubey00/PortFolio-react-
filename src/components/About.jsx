import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b pt-72 md:pt-0 from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full h-full">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
       
        <p className="text-xl mt-10">
        Hi there! I'm Aditya, a dedicated and enthusiastic Web Developer with a passion for creating engaging and innovative web solutions. With 1 year of experience in the industry, I have honed my skills in the full MERN stack (MongoDB, Express.js, React, Node.js) and have a strong foundation in both front-end and back-end development.
        </p>

        <br />
        <p className="text-3xl font-bold inline border-b-4 border-gray-500">
        My Journey
          </p>

        <p className="text-xl mt-10">
        My journey into web development began with a curiosity about how websites are built and function. This curiosity quickly grew into a passion as I delved into coding and discovered the endless possibilities it offers. Over the past year, I have worked on various projects that have challenged me to grow and expand my skill set.
          
        </p>
        <br/>
       


        

        </div>

      </div>
    </div>
  );
};

export default About;