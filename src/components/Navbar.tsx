import { motion, useScroll, useMotionValueEvent } from "motion/react";
import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Experience", href: "#experience", external: false },
  { name: "Case Studies", href: "/case-studies", external: true },
  { name: "Achievements", href: "#achievements", external: false },
  { name: "Skills", href: "#skills", external: false },
  { name: "Education", href: "#education", external: false },
  { name: "Contact", href: "#contact", external: false },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    external: boolean,
  ) => {
    if (external) return; // let the browser navigate normally
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
        className={cn(
          "fixed inset-x-0 top-0 z-40 flex h-20 items-center justify-between px-6 transition-colors duration-300 md:px-12",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent",
        )}
      >
        {/* LOGO WITH TOOLTIP */}
        <div className="relative">
          
            href="#"
            onClick={(e) => handleScroll(e, "body", false)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="font-display text-xl font-bold tracking-tighter text-white"
          >
            SP<span className="text-blue-500">.</span>
          </a>

          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute left-0 top-8 whitespace-nowrap rounded-md border border-white/10 bg-black/80 px-3 py-1.5 text-xs text-gray-300 backdrop-blur-md"
            >
              Sahil Pandita
            </motion.div>
          )}
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href, item.external)}
                  className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-white"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* RESUME CTA */}
          
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-blue-500 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 transition-all duration-200 hover:bg-blue-500 hover:text-white"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </motion.header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex h-20 items-center justify-between px-6">
            <span className="font-display text-xl font-bold tracking-tighter text-white">
              SP<span className="text-blue-500">.</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {navItems.map((item) => (
              
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href, item.external)}
                className="font-display text-3xl font-medium text-white"
              >
                {item.name}
              </a>
            ))}

            {/* RESUME CTA MOBILE */}
            
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-blue-500 bg-blue-500/10 px-6 py-2.5 text-xl font-medium text-blue-400"
            >
              <FileText className="h-5 w-5" />
              Resume
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
}
