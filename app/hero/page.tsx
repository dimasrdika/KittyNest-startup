import React from "react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 mt-20 bg-gradient-to-r from-gray-50 to-gray-200">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-800 md:px-10 pb-8 md:pb-12">
          Experience the Magic of{" "}
          <span className="text-gradient bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
            Kitty Nest
          </span>{" "}
          Development
        </h1>
        <p className="text-lg text-gray-600 md:w-2/3 mx-auto">
          Transform your projects with exquisitely crafted components by{" "}
          <span className="font-semibold">Kitty Nest</span>. Dive into a realm
          of charming UI elements tailored for your applications.
        </p>

        <div className="flex justify-center mt-10">
          <button className="mr-4 px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">
            Get Started
          </button>
          <button className="px-8 py-4 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-100 transition duration-300">
            Learn More
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/content/hero-1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
