"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { motion } from "motion/react";
import React from 'react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Works", href: "#works" },
  ];

  // Set active section on hash change or initial load
  useEffect(() => {
    const updateActiveSection = () => {
      setActiveSection(window.location.hash);
    };

    updateActiveSection(); // On mount
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
          <Link href="/" className="flex items-center gap-2" onClick={() => setActiveSection("")}>
            <Image
              src="/white_no_text.png"
              alt="logo"
              width={150}
              height={80}
              className="max-h-16 w-auto object-contain"
            />
          <h1 className="text-white text-2xl font-bold ">Texas Web Art</h1>
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
              className="contact-ka-button bg-blue-900 hover:bg-red-500 transition-colors duration-800 hover:font-extrabold"
            >
              Get Started
            </Link>
          </Button>
        </motion.div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-28 w-10" size={48} color="#ffffff" strokeWidth={1.75} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[100%]" side="right">
            <div className="flex flex-col justify-center items-center gap-6 w-[100%] pt-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href);
                    setIsOpen(false);
                  }}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    activeSection === item.href ? "text-red-500" : "text-white"
                  } hover:text-red-500`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="w-full"
                asChild
                onClick={() => {
                  setActiveSection("");
                  setIsOpen(false);
                }}
              >
                <Link href="#contact">Get Started</Link>
              </Button>
              <div className=" flex items-center gap-2 mt-4">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm font-medium text-red-500 text-nowrap">Call us: (555) 123-4567</span>
                      </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
