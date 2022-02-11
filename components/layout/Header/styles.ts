import styled from "styled-components";
import { motion, Variant } from "framer-motion";

export const Header = styled(motion.header)`
  position: fixed;
  padding: 0.5rem 0;
  width: 100%;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.colors.translucent.white};
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

export const AvatarWrapper = styled(motion.div)`
  & > div {
    margin-left: 0;
  }
`;

export const headerVariants: Record<string, Variant> = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: -50,
    opacity: 0,
  },
};

export const avatarVariants: Record<string, Variant> = {
  visible: {
    scale: 1,
    opacity: 1,
  },
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
};
