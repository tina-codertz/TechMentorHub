import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="text-center p-6 mt-9 cursor-pointer ">
        <h2 className="text-5xl font-bold">
          At{" "}
          <span className="bg-gradient-to-r  from-blue-950 to-[#0077CC] text-transparent bg-clip-text">
            TechMentorHub
          </span>
        </h2>
        <p className="p-6 text-3xl text-wrap font-serif">
          we've designed an intuitive and engaging platform that makes easy to
          navigate <br />
          connect and learn for both mentors and mentees ensuring that everyone
          an find exactly what they need{" "}
        </p>
      </div>
      <div className="flex justify-between p-6 gap-16">
        <div className="shadow-lg  hover:shadow-2xl rounded-lg p-6 w-full mx-auto">
          <h2 className="text-3xl font-serif">Mentors</h2>
          <p className="text-xl p-6 font-serif">
            These section allows seasoned professionals to showcase their
            expertise across various tech sectors from software development to
            blockchain, machine learning Internet of Things(IOT) and more Here
            mentors can create detailed profiles set availability and offer
            personalized guidance to learners
          </p>
        </div>
        <div className="shadow-lg  hover:shadow-2xl rounded-lg p-6 w-full mx-auto">
          <h2 className="text-3xl font-serif">Mentee</h2>
          <p className="p-6 text-xl font-serif">
            In mentee section tech enthusiasts and learners can browse through a
            vast pool of tech sectors and expert mentors view their profiles and
            directly book sessions for guidance on specific topics or
            projects.Filters by area of expertise availability and experience
            level make it easy for mentee to find right mentor for their needs{" "}
          </p>
        </div>
      </div>
      <div className="shadow-lg  hover:shadow-2xl rounded-lg p-6 max-w-3xl mx-auto mt-8">
        <p className="p-6 text-xl font-serif ">
          For both mentors and mentees TechMentorHub gives a comprehensive view
          of upcoming sessions,messages and progress with seamless navigation
          and a user-friendly interface.TechMentorHub fosters meaning full
          connections and supports continuous learning in tech community{" "}
        </p>
      </div>

      <div className="text-center text-2xl p-8 font-serif">
        <p className="p-6">Join TechMentorHub today and start your journey to mastering the tech world</p>
      <button>
        <a href="#Signup" className="text-white bg-[#0077CC] rounded-full p-3">Join Now</a>

        </button>
    
      </div>
    </div>
  );
};

export default Hero;
