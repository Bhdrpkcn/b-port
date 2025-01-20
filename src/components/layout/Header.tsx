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
    <>
      <div
        id="home"
        className="flex justify-between items-center w-[95%]  z-50 p-4 text-primary hover:opacity-[0.9] rounded-full"
      >
        <Link
          href="/"
          className="flex  cursor-pointer p-3 justify-center items-center rounded-full bg-accent dark:bg-accentDark"
        >
          bp
        </Link>

        <div className="flex w-28 sm:w-32 p-3 px-4 justify-between items-center rounded-full bg-accent dark:bg-accentDark ">
          <ThemeToggle />

          <div className="w-[1px] h-4 bg-primary dark:bg-white opacity-50"></div>

          <Link
            href="mailto:bhdrpkcn@gmail.com?subject=About your Portfolio"
            className="flex cursor-pointer justify-center items-center "
          >
            Contact
          </Link>
        </div>
      </div>

      <motion.header
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed w-[20%] min-w-40 mt-4 z-50 p-3 bg-accent dark:bg-accentDark text-primary hover:opacity-[0.9] rounded-full"
      >
        <nav className="flex justify-between px-4">
          <Link href="#home" className="">
            Home
          </Link>

          <div className="w-[1px] h-6 bg-primary dark:bg-white opacity-50"></div>

          <Link href="/about" className="">
            About
          </Link>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;
