import styled from "styled-components";
import { StickyContentProps } from "./types";

export const Wrapper = styled.div`
  overflow: auto;
  position: relative;
  width: 100%;

  @media (max-width: 1200px) {
    max-width: 992px;
  }

  @media (max-width: 992px) {
    max-width: 768px;
  }

  @media (max-width: 768px) {
    max-width: 540px;
  }

  @media (max-width: 425px) {
    max-width: 320px;
  }
`;

export const StickyContent = styled.div<StickyContentProps>`
  display: flex;
  justify-content: center;
  position: sticky;
  left: 0;
  width: fit-content;
  transition: all 0.2s ease;
  transform: translateX(${(props) => props.offset}px);
`;

export const ScrollContent = styled.div`
  height: 250px;
  width: 150vw;
`;
