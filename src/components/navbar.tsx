"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Works", href: "#works" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b backdrop-blur bg-muted text-black">
      <div className="container flex h-20 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/test.png"
              alt="logo"
              width={150}
              height={80}
              className="max-h-16 w-auto object-contain"
            />
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
              className="text-sm font-medium transition-colors text-white hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
          </motion.div>
          

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[100%]" side="right">
            <div className="flex flex-col justify-center items-center gap-6 w-full pt-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="w-full"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
