import { useEffect, useState } from "react";

const TableOfContents = ({ sections }) => {
  const [showToc, setShowToc] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // show toc when the user has scrolled past half the screen height
      if (window.scrollY > window.innerHeight / 2) {
        setShowToc(true);
      } else {
        setShowToc(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerHeight / 2 - element.clientHeight / 2;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  if (!showToc) {
    return null;
  }

  return (
    <nav className="fixed top-1/2 right-5 transform -translate-y-1/2 p-4 text-right bg-white border border-black">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(event) => handleClick(event, section.id)}
              className={`block px-2 py-1 transition-all text-black hover:text-red-500`}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
