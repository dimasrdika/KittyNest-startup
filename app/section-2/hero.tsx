import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative flex mx-auto mb-10  flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full mb-10 max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/content/hero-2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-10 lg:my-32 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-indigo-500">
              Brand New
            </p>
            <h2 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-none">
              Explore the Enchantment of{" "}
              <span className="text-indigo-400">Kitty Nest</span> Transformation
            </h2>
            <p className="pr-5 mb-4 text-base text-gray-700 md:text-lg">
              Step into the World of Kitty Nest Development. <br />
              Enhance applications with crafted components, Elevate interactions
              with charming UI elements.
            </p>
            <div className="flex items-star mt-6">
              <button className="mr-4 px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
