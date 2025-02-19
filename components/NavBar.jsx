import React from "react";
import Link from "next/link";
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
    
    // If we're not on the home page, first navigate to home
    if (router.pathname !== '/') {
      router.push('/').then(() => {
        // After navigation, scroll to work section
        const element = document.getElementById("work-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      });
    } else {
      // If already on home page, just scroll
      const element = document.getElementById("work-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="flex flex-row justify-center py-14 gap-4 z-10">
      <a className="text-center text-2xl font-roobert hover:underline" href="/">
        home
      </a>
      <span className="text-center text-2xl font-roobert"> / </span>
      <a 
        className="text-center text-2xl font-roobert hover:underline"
        href="/#work-section" 
        onClick={handleWorkClick}
      >
        work
      </a>
      <span className="text-center text-2xl font-roobert"> / </span>
      {navLinks.map((link, index) => (
        <React.Fragment key={index}>
          <a
            className="text-center text-2xl font-roobert hover:underline"
            href={link.href}
          >
            {link.label}
          </a>
          {index < navLinks.length - 1 && (
            <span className="text-center text-2xl font-roobert"> / </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default NavBar;