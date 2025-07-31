"use client";
import Button from "./ui/button";
import { navLinks } from "../utils/constants";
import MobileMenu from "./mobile-menu";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log();
        if (!entry.isIntersecting) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [sentinelRef.current]);

  return (
    <>
      <div ref={sentinelRef}></div>
      <div className={clsx(scrolled ? "sticky top-0 z-40" : "relative")}>
        <nav
          className={clsx(
            "px-4 py-3  flex items-center justify-between duration-150 transition-all relative bg-heroBgGradient mb-3",
            scrolled ? "bg-[#000000af]  backdrop-blur-sm" : "bg-background"
          )}
        >
          <div>Logo here</div>
          <ul className="items-center md:flex hidden">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className="hover:bg-white/5 cursor-pointer transition-all duration-300 p-4 py-2 rounded-full"
              >
                <a
                  href={link.path}
                  className="flex items-center text-base  gap-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <Button
              variant="secondery"
              size="sm"
              className="!rounded-full  hidden md:block"
            >
              Hire Me
            </Button>
            <MobileMenu />
          </div>
        </nav>
      </div>
    </>
  );
}
