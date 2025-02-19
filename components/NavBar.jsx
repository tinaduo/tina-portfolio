import React from "react";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "about" },
  {
    href: "https://drive.google.com/file/d/1SYBD-p3pOFEPXoXfBztsl3QD5hqA9oK_/view?usp=sharing",
    label: "resume",
  },
];

const NavBar = () => {
  const scrollToWork = (e) => {
    e.preventDefault();
    const element = document.getElementById("work-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex flex-row justify-center py-14 z-10">
      <a className="text-center text-2xl font-roobert hover:underline" href="/">
        home
      </a>
      <span className="text-center text-2xl font-roobert px-2"> / </span>
      <Link 
        className="text-center text-2xl font-roobert px-2"
        href="/#work-section" 
        onClick={scrollToWork}
        >
            work
    </Link>
      <span className="text-center text-2xl font-roobert px-2"> / </span>
      {navLinks.map((link, index) => (
        <React.Fragment key={index}>
          <a
            className="text-center text-2xl font-roobert hover:underline"
            href={link.href}
          >
            {link.label}
          </a>
          {index < navLinks.length - 1 && (
            <span className="text-center text-2xl font-roobert px-2"> / </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default NavBar;
