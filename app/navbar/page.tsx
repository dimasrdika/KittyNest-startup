import ActionButton from "./actionButton";
import Logo from "./logo";
import { NavigationBar } from "./navigation-bar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-7 border-b">
      <Logo />
      <NavigationBar />
      <ActionButton />
    </div>
  );
};

export default Navbar;
