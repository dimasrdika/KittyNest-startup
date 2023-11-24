"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  {
    url: "/logo/logo-1.svg",
    alt: "logo-1",
  },
  {
    url: "/logo/logo-2.svg",
    alt: "logo-2",
  },
  {
    url: "/logo/logo-3.svg",
    alt: "logo-3",
  },
  {
    url: "/logo/logo-4.svg",
    alt: "logo-4",
  },
  {
    url: "/logo/logo-5.svg",
    alt: "logo-5",
  },
  {
    url: "/logo/logo-6.svg",
    alt: "logo-6",
  },
  {
    url: "/logo/logo-7.svg",
    alt: "logo-7",
  },
  {
    url: "/logo/logo-8.svg",
    alt: "logo-8",
  },
  {
    url: "/logo/logo-9.svg",
    alt: "logo-9",
  },
  {
    url: "/logo/logo-10.svg",
    alt: "logo-10",
  },
  {
    url: "/logo/logo-11.svg",
    alt: "logo-11",
  },
  {
    url: "/logo/logo-12.svg",
    alt: "logo-12",
  },
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 mb-10">
      <div className="text-center font-bold text-4xl text-gradient bg-gradient-to-r from-green-500 to-indigo-500 bg-clip-text text-transparent">
        Trusted by 100+ brands, Kitty Nest is the epitome of simple
        sophistication for cats
      </div>
      <div className="grid grid-cols-3 p-4 md:flex items-center justify-center">
        <AnimatePresence custom={currentImage}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImage ? 1 : 1,
                scale: index === currentImage ? 1.2 : 1,
                transition: { duration: 0.5 },
              }}
              exit={{ opacity: 0 }}
              custom={index}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center h-40 w-40 mx-auto"
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={200}
                height={200}
                className="object-contain h-20 w-20 mx-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
