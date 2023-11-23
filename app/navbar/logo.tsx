import Image from "next/image";

const Logo = () => {
  return (
    <div className="cursor-pointer flex items-center">
      <Image src="/cat.png" alt="logo" width={50} height={50} />
      <h1 className="ml-2 font-bold text-gradient bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent text-2xl md:opacity-0 lg:opacity-100 xl:opacity-100">
        Kitty Nest
      </h1>
    </div>
  );
};

export default Logo;
