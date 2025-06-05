import Button from "./ui/button";
import { navLinks } from "../utils/constants";

export default function Navigation() {
  return (
    <nav className="px-4 py-3 flex items-center justify-between bg-heroBgGradient bg-background mb-3">
      <div>Logo here</div>
      <ul className="flex items-center">
        {navLinks.map((link) => (
          <li
            key={link.path}
            className="hover:bg-white/5 transition-all duration-300 p-4 py-2 rounded-full"
          >
            <a href={link.path} className="flex items-center text-sm   gap-2">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <Button variant="secondery" size="sm" className="!rounded-full">
          Hire Me
        </Button>
      </div>
    </nav>
  );
}
