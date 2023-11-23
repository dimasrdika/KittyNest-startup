import Image from "next/image";

const Logo = () => {
  return (
    <div className="cursor-pointer flex items-center">
      <Image src="/cat.png" alt="logo" width={50} height={50} />
      <h1 className="ml-2 font-bold text-slate-900 text-2xl md:opacity-0 lg:opacity-100 xl:opacity-100">
        Kitty Nest
      </h1>
    </div>
  );
};

export default Logo;
