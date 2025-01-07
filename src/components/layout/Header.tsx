"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md fixed w-full z-50"
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
      </nav>
    </motion.header>
  );
};

export default Header;
