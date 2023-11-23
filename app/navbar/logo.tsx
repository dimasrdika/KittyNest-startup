import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src="/cat.png" alt="logo" width={40} height={40} />
      <h1 className="ml-2 font-bold text-slate-900 text-2xl">Kitty Nest</h1>
    </div>
  );
};

export default Logo;
