import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: auto;
  width: 992px;
  background: purple;
  position: relative;
`;

export const StickyContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: sticky;
  left: 0;
  width: fit-content;
`;

export const ScrollContent = styled.div`
  background: red;
  height: 250px;
  width: 150vw;
`;
