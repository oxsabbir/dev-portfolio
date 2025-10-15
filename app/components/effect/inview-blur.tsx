"use client";

import { useRef } from "react";
import { useInView, motion } from "motion/react";
("motion/react");

export default function InviewBlur({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -150px 0px", once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(5px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}
