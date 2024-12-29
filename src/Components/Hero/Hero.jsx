import React, { useState } from "react";

const Hero = () => {

  return (
    <div className="">
      <div className="text-center p-6 mt-9 lg:mt-20 cursor-pointer">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          At{" "}
          <span className="bg-gradient-to-r from-blue-950 to-[#0077CC] text-transparent bg-clip-text">
            TechMentorHub
          </span>
        </h2>
        <p className="p-4 text-lg sm:text-xl lg:text-2xl font-serif">
          We've designed an intuitive and engaging platform that makes it easy
          to navigate, connect, and learn for both mentors and mentees,
          ensuring that everyone can find exactly what they need.
        </p>
      </div>
      <div className=" flex mt-10 justify-center p-6 gap-8">
        <div className="shadow-lg hover:shadow-2xl rounded-lg p-6 w-full lg:w-1/2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif">Mentors</h2>
          <p className="text-sm sm:text-lg lg:text-xl p-4 font-serif">
            This section allows seasoned professionals to showcase their
            expertise across various tech sectors from software development to
            blockchain, machine learning, Internet of Things (IoT), and more.
            Here, mentors can create detailed profiles, set availability, and
            offer personalized guidance to learners.
          </p>
        </div>
        <div className="shadow-lg hover:shadow-2xl rounded-lg p-6 w-full lg:w-1/2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif">Mentees</h2>
          <p className="text-sm sm:text-lg lg:text-xl p-4 font-serif">
            In the mentee section, tech enthusiasts and learners can browse
            through a vast pool of tech sectors and expert mentors, view their
            profiles, and directly book sessions for guidance on specific
            topics or projects. Filters by area of expertise, availability, and
            experience level make it easy for mentees to find the right mentor
            for their needs.
          </p>
        </div>
      </div>
      <div className="shadow-lg hover:shadow-2xl rounded-lg p-6 max-w-3xl mx-auto mt-8">
        <p className="text-sm sm:text-lg lg:text-xl font-serif p-4">
          For both mentors and mentees, TechMentorHub provides a comprehensive
          view of upcoming sessions, messages, and progress. With seamless
          navigation and a user-friendly interface, TechMentorHub fosters
          meaningful connections and supports continuous learning in the tech
          community.
        </p>
      </div>
      <div className="text-center text-lg sm:text-xl lg:text-2xl p-8 font-serif">
        <p className="p-4">
          Join TechMentorHub today and start your journey to mastering the tech
          world.
        </p>
        <button className="bg-[#0077CC] text-white rounded-full px-6 py-3 mt-4">
          <a href="#Signup">Join Now</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
