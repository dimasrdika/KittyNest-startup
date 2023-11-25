"use client";

import React from "react";
import Image from "next/image";

const Features = [
  {
    name: "Customizable",
    description:
      "Tailor your website to match your unique style and vision. With a vast array of customization options, you have the creative freedom to make your website truly yours. Whether it's choosing colors, fonts, or layouts, the possibilities are endless. Unleash your creativity and design a website that reflects your personality.",
    image: "feature/logo-1.svg",
  },
  {
    name: "Fast",
    description:
      "Experience unparalleled speed with the fastest website builder in the world. We understand the importance of a swift and responsive website, and that's why our platform is optimized for speed. From quick page loads to seamless navigation, your visitors will enjoy a fast and efficient browsing experience, ensuring that your content is delivered in the blink of an eye.",
    image: "feature/logo-2.svg",
  },
  {
    name: "Integration",
    description:
      "Seamlessly connect your website with a variety of third-party services and tools. Our integration capabilities make it easy to link your website with popular services, ranging from social media platforms to e-commerce solutions. Expand the functionality of your website and streamline your workflow by integrating with the tools that matter most to your business.",
    image: "feature/logo-3.svg",
  },
  {
    name: "Full Stack",
    description:
      "Empower your development journey by building your website with Next.js and React. Our full-stack solution allows you to leverage the power of these cutting-edge technologies. Benefit from a robust and scalable architecture, ensuring that your website is not only visually stunning but also performs seamlessly. Elevate your web development experience with the combination of Next.js and React.",
    image: "feature/logo-4.svg",
  },
  {
    name: "Loyalty",
    description:
      "Enjoy exclusive benefits with our loyalty program. As a token of our appreciation, you'll receive a 10% discount on your next purchase. Our loyalty program is designed to reward our valued customers for their continued support. Join the program, accumulate rewards, and unlock special discounts to enhance your experience with us.",
    image: "feature/logo-5.svg",
  },
  {
    name: "Support",
    description:
      "Count on us for dedicated support whenever you need assistance. Our customer support team is here to help you navigate any challenges and provide solutions to ensure your experience is smooth and enjoyable. Whether you have questions, concerns, or need technical assistance, our support team is just a message away. Your satisfaction is our priority.",
    image: "feature/logo-6.svg",
  },
];

const SecondSection = () => {
  return (
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
            Discover comfort and style with Kitty Nest. Our designs create the
            ultimate sanctuary for your feline friends, offering luxury like
            never before.
          </p>
          <div className="flex items-star mt-6">
            <button className="mr-4 px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
