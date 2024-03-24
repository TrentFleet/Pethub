"use client"

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";
import Content from "../Content/Page"; // Update the import path to the correct file path

export default function Hero() {
  return (
    <div>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex mb-10 flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-4xl md:text-7xl font-bold dark:text-white text-center">
        Welcome to Pethub 
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Training Guides To Dog Care, Learn Everything In One Place
        </div>
        <Button className="bg-black text-md dark:bg-white w-fit text-white dark:text-black px-6 py-4 hover:opacity-50">
        Try Our Dog Quiz Matcher
        </Button>
      </motion.div>
      <div className="h-screen">
      <Content />
      </div>
    </AuroraBackground>
    </div>
  );
}
