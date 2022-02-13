import { Transition, Variant } from "framer-motion";

export const sectionVariants: Record<string, Variant> = {
  entry: {
    y: 30,
    opacity: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};
