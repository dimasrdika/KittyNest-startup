import Image from "next/image";

const Features = [
  {
    name: "Customizable",
    description:
      "Tailor your site with endless customization options, choosing colors, fonts, and layouts to reflect your unique style.",
    image: "/feature/logo-1.png",
  },
  {
    name: "Fast",
    description:
      "Experience unparalleled speed with our optimized platform. Deliver content in the blink of an eye.",
    image: "/feature/logo-2.png",
  },
  {
    name: "Integration",
    description:
      "Seamlessly connect your website with third-party services. Expand functionality and streamline workflow.",
    image: "/feature/logo-3.png",
  },
  {
    name: "Full Stack",
    description:
      "Empower your development with Next.js and React. Leverage cutting-edge technologies for a seamless web experience.",
    image: "/feature/logo-4.png",
  },
  {
    name: "Loyalty",
    description:
      "Enjoy exclusive benefits with our loyalty program. Get a 10% discount on your next purchase and unlock special rewards.",
    image: "/feature/logo-5.png",
  },
  {
    name: "Support",
    description:
      "Count on dedicated support whenever you need assistance. Our team ensures a smooth and enjoyable experience.",
    image: "/feature/logo-6.png",
  },
];

const FeaturesCard = () => {
  return (
    <div className="flex-col items-center justify-center">
      <div className="text-3xl text-center md:text-5xl font-bold pt-5 pb-10 bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text text-transparent">
        Product Features
      </div>
      <div className="grid grid-cols-1 p-4 md:grid-cols-3 gap-4 cursor-pointer md:px-10">
        {Features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-6 pb-10 border p-8 rounded-xl w-full hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <div className="text-slate-700 text-3xl font-bold">
              {feature.name}
            </div>
            <div className="relative h-40 w-40 mb-4">
              <Image
                src={feature.image}
                layout="fill"
                objectFit="contain"
                alt={feature.name}
              />
            </div>
            <div className="text-slate-600 text-lg text-center">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesCard;
