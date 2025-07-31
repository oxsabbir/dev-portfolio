import Button from "./ui/button";
import { navLinks } from "../utils/constants";
import MobileMenu from "./mobile-menu";

export default function Navigation() {
  return (
    <nav className="px-4 py-3  flex items-center justify-between relative bg-heroBgGradient bg-[#000000af]  backdrop-blur-sm mb-3">
      <div>Logo here</div>
      <ul className="items-center md:flex hidden">
        {navLinks.map((link) => (
          <li
            key={link.path}
            className="hover:bg-white/5 cursor-pointer transition-all duration-300 p-4 py-2 rounded-full"
          >
            <a href={link.path} className="flex items-center text-base  gap-2">
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
  );
}
