import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isShowMobileNav, setIsShowMobileNav] = useState(false);
  const [activeSection, setActiveSection] = useState("#Home");

  // const handleLinkClick = (section: string) => {
  //   setActiveSection(section);
  // };

  // Handle link click for scrolling manually
  const handleLinkClick = (section: string) => {
    document.querySelector(section)?.scrollIntoView({
      behavior: "smooth",
    });
    setActiveSection(section); // Set manually on click
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.7 } // Adjust threshold as needed
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleToggle = () => {
    setIsShowMobileNav((prev) => !prev);
  };

  const isActive = (path: string) =>
    activeSection === path ? "text-light-purple" : "text-white";

  return (
    <div className="fixed top-0 left-0 right-0 bg-dark-background h-20 flex justify-between items-center px-8 md:px-12 lg:px-24 z-30">
      <Link href="/">
        <h2 className="text-3xl font-semibold text-light-purple">
          Algimantas Skara
        </h2>
      </Link>
      <nav className="hidden md:flex items-center justify-center font-semibold">
        <ul className="flex justify-between items-center gap-8 text-white ">
          <li>
            <Link
              href="#Home"
              onClick={() => handleLinkClick("#Home")}
              className={isActive("#Home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#AboutMe"
              onClick={() => handleLinkClick("#AboutMe")}
              className={isActive("#AboutMe")}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              href="#Projects"
              onClick={() => handleLinkClick("#Projects")}
              className={isActive("#Projects")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#Contact"
              onClick={() => handleLinkClick("#Contact")}
              className={isActive("#Contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* HeaderMobile */}
      <div className="md:hidden flex justify-center items-center ">
        <button
          className="flex justify-center items-center w-14 h-14"
          onClick={handleToggle}
        >
          <svg viewBox="0 0 100 75" width="36" height="36" fill="#5918F9">
            <rect width="100" height="12" rx="6" ry="6" fill="white"></rect>
            <rect
              y="31.5"
              width="100"
              height="12"
              rx="6"
              ry="6"
              fill="white"
            ></rect>
            <rect
              y="61"
              width="100"
              height="12"
              rx="6"
              ry="6"
              fill="white"
            ></rect>
          </svg>
        </button>

        <nav
          className={`pt-10 flex flex-col gap-8 text-center absolute bg-[#291F3E] text-white text-3xl top-20 h-screen w-full transition-all duration-300 ${
            isShowMobileNav ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul>
            <li>
              <Link href="/" onClick={() => handleToggle()}>
                Home
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#AboutMe" onClick={() => handleToggle()}>
                About me
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#Projects" onClick={() => handleToggle()}>
                Projects
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#Contact" onClick={() => handleToggle()}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
