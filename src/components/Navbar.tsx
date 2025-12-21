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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside or on a link
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
          className="font-display text-2xl font-body  tracking-tight text-foreground hover:text-primary transition-colors duration-300"
        >
          Ing Medrano
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="font-poppins nav-link text-sm uppercase tracking-widest font-medium">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <a
    href="https://drive.google.com/file/d/11Yyshj7D_2gTydaw-SW7-SNYUJElDvUY/view?usp=drive_link"
          className=" cursor-pointer hidden animate-pulse md:inline-flex px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
        >
          <i className="bi bi-file-earmark-person"></i>
         Hire me 
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden relative z-50 p-2 text-foreground hover:text-primary transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/98 backdrop-blur-xl md:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`flex flex-col items-center justify-center h-full transition-all duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className="overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={`font-display font-changa text-4xl font-medium text-foreground hover:text-primary transition-all duration-300 block ${
                    isOpen ? "animate-slide-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={closeMenu}
            className={`mt-12 px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-all duration-300 ${
              isOpen ? "animate-slide-up" : ""
            }`}
            style={{ animationDelay: "600ms" }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
