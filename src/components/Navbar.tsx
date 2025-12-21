import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Ing Medrano
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-widest font-medium text-foreground hover:text-primary transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://drive.google.com/file/d/11Yyshj7D_2gTydaw-SW7-SNYUJElDvUY/view"
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
        >
          <i className="bi bi-file-earmark-person" />
          Hire me
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 z-[60] text-foreground hover:text-primary transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-background/95 backdrop-blur-xl md:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`h-full flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-4xl font-medium text-foreground hover:text-primary transition-all"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {link.name}
            </a>
          ))}

         <a
          href="https://drive.google.com/file/d/11Yyshj7D_2gTydaw-SW7-SNYUJElDvUY/view"
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
        >
          <i className="bi bi-file-earmark-person" />
          Hire me
        </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
