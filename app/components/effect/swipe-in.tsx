"use client";

import { useRef } from "react";
import { useInView, motion } from "motion/react";
("motion/react");

export default function SwipeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -140px 0px", once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(5px)", y: 50, opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", y: 0, opacity: 100 } : {}}
      className={className}
      transition={{
        duration: 1,
        type: "spring",
      }}
    >
      {children}
    </motion.div>
  );
}
