"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Works", href: "#works" },
  ];

  useEffect(() => {
    const updateActiveSection = () => {
      setActiveSection(window.location.hash);
    };

    updateActiveSection();
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b backdrop-blur bg-muted text-black">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setActiveSection("")}
          >
            <Image
              src="/white_no_text.png"
              alt="logo"
              width={150}
              height={80}
              className="max-h-16 w-auto object-contain"
              priority
            />
            <h1 className="text-white md:text-2xl text-lg font-bold">
              Texas Web Art
            </h1>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex md:items-center md:gap-6"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveSection(item.href)}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === item.href ? "text-red-500" : "text-white"
              } hover:text-red-500`}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild>
            <Link
              href="#contact"
              onClick={() => setActiveSection("")}
              className="contact-ka-button bg-blue-900 hover:bg-red-500 transition-colors duration-800 hover:font-extrabold "
            >
              Get Started
            </Link>
          </Button>
        </motion.div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <div
              onClick={() => setIsOpen(true)}
              className="p-3 rounded-md hover:bg-white/20 transition-all cursor-pointer"
            >
              <Menu className="h-10 w-10 text-white" strokeWidth={2} />
              <span className="sr-only">Toggle menu</span>
            </div>
          </SheetTrigger>

          <SheetContent className="w-[100%]  [&>button[data-state=closed]]:hidden" side="right">
            {/* Custom Big Close X Button */}
            <SheetClose asChild>
              {/* <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-red-500"
              >
                <X size={32} strokeWidth={2.5} />
              </button> */}
            </SheetClose>

            <AnimatePresence mode="wait">
              {isOpen && (
                <motion.div
                  key="mobile-menu"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ type: "spring", stiffness: 80, damping: 15 }}
                  className="flex flex-col justify-center items-center gap-6 w-full pt-6"
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * index }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveSection(item.href);
                          setIsOpen(false);
                        }}
                        className={`text-lg font-medium transition-colors duration-300 ${
                          activeSection === item.href
                            ? "text-red-500"
                            : "text-white"
                        } hover:text-red-500`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full"
                  >
                    <Button
                      asChild
                      onClick={() => {
                        setActiveSection("");
                        setIsOpen(false);
                      }}
                      className="w-full contact-ka-button"
                    >
                      <Link href="#contact">Get Started</Link>
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="flex items-center gap-2 mt-4"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm font-medium text-red-500 text-nowrap">
                      Call us: (555) 123-4567
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
