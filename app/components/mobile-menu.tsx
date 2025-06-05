"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../utils/constants";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div className="block md:hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-transparent p-1 "
      >
        {isOpen ? (
          <X className="w-7 h-7 text-foreground" />
        ) : (
          <Menu className="w-7 h-7 text-foreground" />
        )}
      </button>
      {isOpen && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
          id="overlay"
          className="bg-black/80 backdrop-blur-sm min-h-screen  mt-16 w-full absolute top-0 left-0"
        >
          <ul
            id="menu"
            className={`"flex  items-center w-full  bg-cardGradient bg-background  justify-center flex-col"`}
          >
            {navLinks.map((link) => (
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                key={link.path}
                className="hover:bg-white/5 transition-all duration-300 p-4 border-b border-offWhite"
              >
                <a href={"#"} className="flex items-center text-sm  gap-4">
                  <link.icon className="w-6 h-6" strokeWidth={1.8} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
