import { BiCart, BiSearch } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // openloginAccount
  const [openAcc, setOpenAcc] = useState(false);
  const openAccount = () => {
    setOpenAcc(!openAcc);
  };

  // handleOpenNav
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className=" relative">
      {/* first header */}
      <nav className=" p-3 bg-[#f0ecec]  hidden md:block ">
        <div className="  container">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-slate-500">
              <span className="mr-2">🚚</span> Free Shipping for orders over $50
            </div>
            <div className="text-sm font-semibold text-slate-500">
              <span className="mr-2">📞</span> Call us: 123-456-789
              <span
                onClick={openAccount}
                className="ml-4 cursor-pointer text-sm"
              >
                🙍🏻‍♂️ My Account
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* login */}

      {openAcc && (
        <div data-aos="fade-up" className=" absolute right-16  ">
          <div className=" w-40 p-2 bg-white shadow flex-col justify-center text-center items-center">
            <div>
              {" "}
              <a
                href="/login"
                className="text-slate-500  text-sm font-semibold"
              >
                Login
              </a>
            </div>
            <div>
              {" "}
              <a href="#" className="text-slate-500  text-sm font-semibold">
                Register
              </a>
            </div>
            <div>
              {" "}
              <a href="#" className="text-slate-500  text-sm font-semibold">
                Logout
              </a>
            </div>
            <div className=" border shadow-xl">
              {" "}
              <a
                href="/admin/login"
                className="text-slate-500 text-sm font-semibold"
              >
                Admin Login
              </a>
            </div>
          </div>
        </div>
      )}

      {/* second header */}

      <nav className="bg-[#ffff] p-8 font-poppins shadow">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
          <div>
            <button
              id="menu-button"
              className="text-slate-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6 mr-2 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <a href="#" className="text-slate-500 text-2xl font-bold">
              Book <span className=" text-3xl text-red-700">House</span>
            </a>
          </div>

          <div className="md:hidden  cursor-pointer ">
            <button
              onClick={handleOpenNav}
              className="text-slate-500 focus:outline-none"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <div className="hidden md:flex space-x-4  text-lg font-semibold">
            <a
              className="group text-slate-500 hover:text-red-800 transition-all duration-300 ease-in-out"
              href="/"
            >
              <span className="bg-left-bottom hover:shadow-md hover:p-2   hover:shadow-bottom hover:shadow-red-700 bg-gradient-to-r from-red-900 to-red-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Home
              </span>
            </a>
            <a
              className="group text-slate-500 hover:text-red-800 transition-all duration-300 ease-in-out"
              href="/"
            >
              <span className="bg-left-bottom hover:shadow-md hover:p-2   hover:shadow-bottom hover:shadow-red-700 bg-gradient-to-r from-red-900 to-red-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Categoey
              </span>
            </a>
            <a
              className="group text-slate-500 hover:text-red-800 transition-all duration-300 ease-in-out"
              href="/"
            >
              <span className="bg-left-bottom hover:shadow-md hover:p-2   hover:shadow-bottom hover:shadow-red-700 bg-gradient-to-r from-red-900 to-red-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Books
              </span>
            </a>
            <a
              className="group text-slate-500 hover:text-red-800 transition-all duration-300 ease-in-out"
              href="/"
            >
              <span className="bg-left-bottom hover:shadow-md hover:p-2   hover:shadow-bottom hover:shadow-red-700 bg-gradient-to-r from-red-900 to-red-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
               About
              </span>
            </a>
            <a
              className="group text-slate-500 hover:text-red-800 transition-all duration-300 ease-in-out"
              href="/"
            >
              <span className="bg-left-bottom hover:shadow-md hover:p-2   hover:shadow-bottom hover:shadow-red-700 bg-gradient-to-r from-red-900 to-red-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Contact
              </span>
            </a>
          </div>

          <div className="md:flex hidden font-bold text-slate-500 space-x-2">
            <div className=" ">
              <BiSearch size={30} />
            </div>
            <div>
              <CiSettings size={30} />
            </div>
            <div className="text-3xl text-red-700">
              <BiCart size={30} />
            </div>
          </div>
        </div>

        {/* mobile menu */}

        {openNav && (
          <div data-aos="fade-left " className=" md:hidden">
            <a
              href="#"
              className="block px-4 py-2 mt-5 text-slate-500 hover:bg-blue-600"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-slate-500 hover:bg-blue-600"
            >
              About
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-slate-500 hover:bg-blue-600"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-slate-500 hover:bg-blue-600"
            >
              Contact
            </a>
          </div>
        )}
      </nav>


        
      <nav className="bg-[#F8F8F8] p-8 font-poppins text-center  md:hidden justify-center items-center text-4xl font-bold shadow-xl">
        Your Cart
      </nav>
    </div>
  );
}
