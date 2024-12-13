import { NavItem } from "@/constants/customData";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <div className="navbar-component">
        <div className="main flex justify-between items-center px-4 h-16 fixed w-full z-50">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src="/assets/logo.png" alt="Logo" className="w-12" />
            <span className="text-2xl font-semibold">techngx</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex w-2/4 m-auto justify-center items-center">
            <ul className="flex items-center space-x-8 relative">
              {NavItem.map((val) => (
                <li
                  key={val.id}
                  className={`relative text-big cursor-pointer text-base ${
                    location.pathname === val.path ? "text-indigo-600" : ""
                  } hover:text-slate-500`}
                >
                  <Link to={val.path} className="relative">
                    {val.name}
                    {location.pathname === val.path && (
                      <div className="h-0.5 rounded-full bg-indigo-600 absolute left-0 -bottom-1 w-full"></div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button className="text-xl focus:outline-none">&#9776;</button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className="md:hidden bg-white w-full fixed top-16 left-0 shadow-lg hidden"
          id="mobile-menu"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {NavItem.map((val) => (
              <li
                key={val.id}
                className={`text-lg cursor-pointer hover:text-slate-500 ${
                  location.pathname === val.path ? "text-indigo-600" : ""
                }`}
              >
                {val.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
