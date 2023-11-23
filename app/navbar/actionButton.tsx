import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { TbMenuDeep } from "react-icons/tb";
import Link from "next/link";
const ActionButton = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <TbMenuDeep className="text-2xl" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg mt-10">
                  <Link href="/">Sign in</Link>
                  <Link href="/">Get Started</Link>
                  <Link href="/">Pricing</Link>
                  <Link href="/">Features</Link>
                  <Link href="/">Contact</Link>
                  <Link href="/">About</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:space-x-4">
        <Button className="text-md " variant="ghost">
          Sign In
        </Button>
        <Button
          className="text-md bg-indigo-500 hover:bg-indigo-600 text-white"
          variant="destructive"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default ActionButton;
