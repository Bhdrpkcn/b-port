"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();

      if (typeof previous === "number") {
        const direction = current - previous;

        if (scrollYProgress.get() < 0.05) {
          setVisible(true);
        } else {
          setVisible(direction < 0);
        }
      }
    }
  });

  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="flex justify-between items-center fixed w-[75%] mt-4 z-50 p-4 bg-accent dark:bg-accentDark text-primary hover:opacity-[0.9] rounded-full"
    >
      <Link href="/" className="text-xl font-bold cursor-pointer">
        bp
      </Link>

      <nav className="flex space-x-6">
        <Link href="#works" className="hover:underline">
          Works
        </Link>
        <Link href="#contact" className="hover:underline">
          Contact
        </Link>
        <ThemeToggle />
      </nav>
    </motion.header>
  );
};

export default Header;
