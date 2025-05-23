import Image from "next/image";
import AppLogo from "../assets/images/logosaas.png";
import MenuSVG from "../assets/icons/menu.svg";
import MenuLinks from "./MenuLinks";

const menuOptions = [
  { name: "About", path: "#" },
  { name: "Features", path: "#" },
  { name: "Update", path: "#" },
  { name: "Help", path: "#" },
  { name: "Customers", path: "#" },
];

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(#FCD6FF,#29D8FF,#FFFD80,#F89AC0,#FCD6FF)] blur-md"></div>
            <Image
              src={AppLogo}
              alt="App logo"
              className="h-12 w-12 relative"
            />
          </div>
          <div className="border border-white border-opacity-30  h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuSVG className="text-white" />
          </div>
          <nav className="hidden sm:flex gap-6 items-center">
            {menuOptions.map((option, index) => (
              <MenuLinks key={index} href={option.path} text={option.name} />
            ))}
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
