import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (href) => {
    setMenuOpen(false);

    const target = document.querySelector(href);

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a
          href="#home"
          className="navbar-brand"
          onClick={() => setMenuOpen(false)}
        >
          <span className="navbar-brand-icon">
            <Terminal size={17} strokeWidth={2} />
          </span>

          <span className="navbar-brand-text">
            <span className="navbar-brand-name">HZ</span>
            <span className="navbar-brand-cursor">_</span>
          </span>
        </a>

        <nav className="navbar-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                handleNavigation(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="navbar-contact"
          onClick={(event) => {
            event.preventDefault();
            handleNavigation("#contact");
          }}
        >
          Let's Connect
        </a>

        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="navbar-mobile-links">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavigation(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                className="navbar-mobile-contact"
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation("#contact");
                }}
              >
                Let's Connect
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;