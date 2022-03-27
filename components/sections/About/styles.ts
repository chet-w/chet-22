import { motion, Variant } from "framer-motion";
import styled from "styled-components";

export const Content = styled(motion.div)``;

export const contentVariants: Record<string, Variant> = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const paragraphVariants: Record<string, Variant> = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
