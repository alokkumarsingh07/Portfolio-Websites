import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function NavBar() {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center m-10 text-4xl">
          <p className="mx-2 w-10">PortFolio</p>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          {" "}
          <a
            href="https://www.linkedin.com/in/alokkumarsingh07/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/alokkumarsingh07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
