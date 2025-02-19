"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setIsScrollable(scrollableHeight > 0);
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);

    return () => {
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (isScrollable && typeof current === "number") {
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
        className="flex justify-between items-center w-full z-50 py-8 text-primary rounded-full relative"
      >
        <motion.header
          initial={{ opacity: 1, y: 0 }}
          animate={{
            y: visible || !isScrollable ? 0 : -100,
            opacity: visible || !isScrollable ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="fixed self-center w-[15%] min-w-40 mt-4 z-50 bg-accent dark:bg-accentDark text-primary hover:opacity-[0.9] rounded-full"
        >
          <nav className="flex justify-between">
            <Link href="/#home" className="p-3 m-auto hover:scale-105">
              Home
            </Link>

            <div className="w-[1px] h-6 bg-primary my-auto dark:bg-white opacity-50"></div>

            <Link href="/about" className="p-3 m-auto hover:scale-105">
              About
            </Link>
          </nav>
        </motion.header>

        <div className="flex absolute bottom-0 right-0 w-36 sm:w-40 px-2 gap-2 justify-between items-center rounded-full bg-accent dark:bg-accentDark max-[460px]:w-24">
          <ThemeToggle />

          <div className="w-[1px] h-4 bg-primary dark:bg-white opacity-50 m-auto max-[460px]:hidden"></div>

          <Link
            href="mailto:bhdrpkcn@gmail.com?subject=About your Portfolio"
            className="flex py-3 pl-0 cursor-pointer justify-center items-center m-auto hover:scale-105"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
