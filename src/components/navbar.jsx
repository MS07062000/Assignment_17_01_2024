import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="px-8 pt-10 fixed w-full z-[100]">
      <div className="w-full h-16 bg-zinc-300 bg-opacity-10 rounded-lg shadow-inner backdrop-blur-2xl md:flex justify-between items-center py-3 px-10 hidden">
        <NavbarItem text="HomePage" link={"/home"} />
        <div className="flex justify-between items-center gap-5">
          <NavbarItem text="Login" link={"/login"} />
          <NavbarItem
            text="Create Account"
            link={"/createAccount"}
            className={
              "w-40 h-9 rounded-lg border-2 border-white py-1.5 px-3.5"
            }
          />
        </div>
      </div>
      <div className="bg-zinc-300 bg-opacity-10 rounded-lg shadow-inner backdrop-blur-2xl md:hidden ">
        <div
          className="flex flex-row justify-end p-2 h-12 sm:h-14 sm:p-3"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          {" "}
          {openMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 384 512"
            >
              <path
                fill="#ffffff"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          )}
        </div>
        <div
          className={`${
            openMenu ? "" : "hidden"
          } flex flex-col items-end gap-2 p-2`}
        >
          <NavbarItem text="HomePage" link={"/home"} />
          <NavbarItem text="Login" link={"/login"} />
          <NavbarItem text="Create Account" link={"/createAccount"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const NavbarItem = ({ text, link, className }) => (
  <Link to={link}>
    <p
      className={`text-white text-lg font-semibold font-['Euclid Circular B'] leading-tight ${className}`}
    >
      {text}
    </p>
  </Link>
);
