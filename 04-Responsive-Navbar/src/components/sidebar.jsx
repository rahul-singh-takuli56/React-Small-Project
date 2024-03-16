import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-200 py-2">
      {/* larger devices  */}
      <div className="hidden items-center justify-between md:flex">
        <h1 className="text-3xl font-bold">
          Coding <span className="text-blue-400">Addict</span>
        </h1>

        <ul className="flex items-center justify-between gap-10 text-2xl">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center justify-center gap-6 pr-10 text-2xl">
          <VscAccount className="nav-icon" />
          <MdOutlineShoppingCart className="nav-icon" />
        </div>
      </div>

      {/* smaller devices  */}
      <div className="flex items-center justify-between px-4 md:hidden">
        <h1 className="text-2xl font-bold">
          Coding <span className="text-blue-400">Addict</span>
        </h1>

        <div className="text-xl">
          {isOpen ? (
            <FaTimes onClick={handleMenu} />
          ) : (
            <FaBars onClick={handleMenu} />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute inset-y-0 top-0  w-[70%]  bg-gray-300 p-4 md:hidden">
          <h1 className="pb-2 text-center text-2xl font-bold underline underline-offset-4">
            Coding <span className="text-blue-400">Addict</span>
          </h1>
          <ul className="flex flex-col gap-4">
            <li className="hover:bg-blue-200">Home</li>
            <li className="hover:bg-blue-200">About</li>
            <li className="hover:bg-blue-200">Project</li>
            <li className="hover:bg-blue-200">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
