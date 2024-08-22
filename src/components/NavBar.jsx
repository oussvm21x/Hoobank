import { logo } from "../assets";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  // Function to toggle the state
  const handleState = () => {
    setToggle(!toggle); // Toggle the state between true and false
  };
  return (
    <nav className="flex-center-between md:mb-10 gen-pad ">
      <div>
        <img className="w-[120px] " src={logo} alt="logo" />
      </div>
      <div className="hidden md:block">
        <ul className="flex-center-between ">
          <li className="list-item">
            <a href="#">Home</a>
          </li>
          <li className="list-item ">
            <a href="#">About Us</a>
          </li>
          <li className="list-item">
            <a href="#">Features</a>
          </li>
          <li className="list-item">
            <a href="#">Solution</a>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        {!toggle && <IoMenu onClick={() => setToggle(!toggle)}></IoMenu>}

        {toggle && (
          <div>
            <IoClose onClick={() => setToggle(!toggle)}></IoClose>
            <div
              className={`bg-primary absolute right-[0] left-0 py-5 px-24  w-f slide-bottom `}
            >
              <ul className="flex-center-between flex-col sm:felx-row ">
                <li className="list-item">
                  <a href="#">Home</a>
                </li>
                <li className="list-item ">
                  <a href="#">About Us</a>
                </li>
                <li className="list-item">
                  <a href="#">Features</a>
                </li>
                <li className="list-item">
                  <a href="#">Solution</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
