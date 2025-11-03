"use client";
import React from "react";
import Button from "../ui/Button";
import Link from "next/link";
import { staticLinks } from "@/data/staticData";

const Footer = () => {
  return (
    <>
      <div
        id="footer"
        className="flex flex-col justify-between items-center left-[-3rem] md:left-[-5rem] lg:left-[-13rem] relative w-screen z-50 gap-6 py-8 text-primary bg-accent dark:bg-accentDark "
      >
        <div className="flex flex-row gap-4 text-foreground">
          <Button variant="githubButton" link={staticLinks.github} />
          <Button variant="linkedInButton" link={staticLinks.linkedIn} />
        </div>

        <div className="h-6 ">
          Crafted with 🤍 by
          <Link
            href="/#home"
            className="pl-2 m-auto hover:scale-105 font-semibold text-gradient-light"
          >
            Bahadir Pekcan
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
