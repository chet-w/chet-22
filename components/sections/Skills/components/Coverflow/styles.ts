import styled from "styled-components";
import { StickyContentProps } from "./types";

export const Wrapper = styled.div`
  overflow: auto;
  width: 992px;
  position: relative;
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
