import React from "react";
import logo from "../../assets/lws-logo-en.svg";

const Nav = () => {
  return (
    <nav className="py-6">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <img className="h-[40px]" src={logo} alt="Lws" />
        </a>

        <a className="rounded-[44px] bg-[#172227] px-5 py-2" href="#">
          Get Admission
        </a>
      </div>
    </nav>
  );
};

export default Nav;
