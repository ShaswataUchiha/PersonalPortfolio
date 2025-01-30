"use client";
import { useState } from "react";

export const Header = () => {
  const [active, setActive] = useState("Home");
  const navItems = [
    {name: "Home", href: "#home"}, 
    {name: "Projects", href: "#projects"},  
    {name: "About", href: "#about"},  
    {name: "Contact", href: "#contact"}, 
  ];

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav
        className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur
      "
      >
        {navItems.map((item) => (
          <a
            href={item.href}
            key={item.name}
            onClick={(e) => {
              e.preventDefault();
              setActive(item.name);
              document.querySelector(item.href)?.scrollIntoView({behavior: "smooth"})
            }}
            className={`nav-item transition-all duration-200
                ${
                  active === item.name
                    ? "bg-white text-gray-900"
                    : "hover:bg-white/20 hover:text-gray-300"
                }`}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};
