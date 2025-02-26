import React from "react";
import { useRouter } from "next/router";

const navLinks = [{ href: "/about", label: "about" }, {}];

const NavBar = () => {
  const router = useRouter();

  const Spacer = () => (
    <span className="text-center text-lg sm:text-xl md:text-2xl font-roobert">
      {" "}
      /{" "}
    </span>
  );

  const handleWorkClick = (e) => {
    e.preventDefault();

    if (router.pathname !== "/") {
      router.push("/").then(() => {
        const element = document.getElementById("work-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      });
    } else {
      const element = document.getElementById("work-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="flex flex-row justify-center py-6 sm:py-10 md:py-14 gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 overflow-x-auto">
      <a
        href="/"
        className="text-center text-lg sm:text-xl md:text-2xl whitespace-nowrap font-roobert hover:underline"
      >
        home
      </a>
      <Spacer />
      <a
        className="text-center text-lg sm:text-xl md:text-2xl whitespace-nowrap font-roobert hover:underline"
        href="/#work-section"
        onClick={handleWorkClick}
      >
        work
      </a>
      <Spacer />
      <a
        href="/about"
        className="text-center text-lg sm:text-xl md:text-2xl whitespace-nowrap font-roobert hover:underline"
      >
        about
      </a>
      <Spacer />
      <a
        href="https://drive.google.com/file/d/1SYBD-p3pOFEPXoXfBztsl3QD5hqA9oK_/view?usp=sharing"
        className="text-center text-lg sm:text-xl md:text-2xl whitespace-nowrap font-roobert hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        resume
      </a>
    </nav>
  );
};

export default NavBar;
