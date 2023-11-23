import ActionButton from "./actionButton";
import Logo from "./logo";
import { NavigationBar } from "./navigation-bar";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white z-50">
      <div className="flex justify-between items-center px-10 py-5 border-b">
        <Logo />
        <NavigationBar />
        <ActionButton />
      </div>
    </div>
  );
};

export default Navbar;
