import { motion, type Variants } from "framer-motion";
import React from "react";

type RevealVariant =
  | "fade-up"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "blur"
  | "bounce-up"
  | "pop";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
}

const variantMap: Record<RevealVariant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 18 },
    },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 18 },
    },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 18 },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 14 },
    },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 20 },
    },
  },
  "bounce-up": {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 10, mass: 0.8 },
    },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.6, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  },
};

export const Reveal: React.FC<RevealProps> = ({
  delay = 0,
  className = "",
  variant = "fade-up",
  children,
}) => {
  const v = variantMap[variant];

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.15 }}
      variants={v}
      transition={{ delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* Stagger container for animating children in sequence */
export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = "", staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* Individual stagger item — use inside StaggerContainer */
export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.92 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 120, damping: 14 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
