import React from "react";
import { useRouter } from "next/router";

const navLinks = [
  { href: "/about", label: "about" },
  {
    href: "https://drive.google.com/file/d/1SYBD-p3pOFEPXoXfBztsl3QD5hqA9oK_/view?usp=sharing",
    label: "resume",
  },
];

const NavBar = () => {
  const router = useRouter();

  const handleWorkClick = (e) => {
    e.preventDefault();
    
    if (router.pathname !== '/') {
      router.push('/').then(() => {
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
      <a className="text-center text-lg sm:text-xl md:text-2xl whitespace-nowrap font-roobert hover:underline" href="/">
        home
      </a>
      <span className="text-center text-lg sm:text-xl md:text-2xl font-roobert"> / </span>
      <a 
        className="text-center text-lg sm:text-xl md:text-2xl whitespace-nowrap font-roobert hover:underline"
        href="/#work-section" 
        onClick={handleWorkClick}
      >
        work
      </a>
      <span className="text-center text-lg sm:text-xl md:text-2xl font-roobert"> / </span>
      {navLinks.map((link, index) => (
        <React.Fragment key={index}>
          <a
            className="text-center text-lg sm:text-xl md:text-2xl whitespace-nowrap font-roobert hover:underline"
            href={link.href}
          >
            {link.label}
          </a>
          {index < navLinks.length - 1 && (
            <span className="text-center text-lg sm:text-xl md:text-2xl font-roobert"> / </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default NavBar;