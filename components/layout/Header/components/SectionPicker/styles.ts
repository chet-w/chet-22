import { motion, Transition, Variant } from "framer-motion";
import styled from "styled-components";
import { DropdownButttonProps } from "./types";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const CurrentSection = styled.div`
  display: flex;
  align-items: center;
`;

export const DropdownButton = styled(motion.button)<DropdownButttonProps>`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;

  &:hover svg {
    transform: translateY(2px);
  }

  & svg {
    transition: 0.2s ease;
    pointer-events: none;
    transform: ${(props) => (props.isActive ? "translateY(2px)" : "none")};
  }

  & circle,
  polyline {
    stroke: ${(props) => props.theme.colors.primary};
  }
`;

export const IconWrapper = styled(motion.span)``;

export const buttonVariants: Record<string, Variant> = {
  normal: {
    rotate: 0,
  },
  active: {
    rotate: -90,
  },
};

export const Options = styled(motion.ul)`
  position: fixed;
  top: 0.5rem;
  left: 47vw;
  padding: 0;
  list-style: none;
  background: ${(props) => props.theme.colors.translucent.white};
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
`;

export const optionsVariants: Record<string, Variant> = {
  hidden: {
    height: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  visible: {
    height: "auto",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

export const Option = styled(motion.li)`
  a {
    display: block;
    padding: 1rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(2px);
      color: ${(props) => props.theme.colors.tertiary};
    }
  }
`;

export const optionVariants: Record<string, Variant> = {
  hidden: {
    y: -5,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
