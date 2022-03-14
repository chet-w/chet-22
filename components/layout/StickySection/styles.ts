import styled from "styled-components";
import { StickySectionProps } from "./types";

export const StickySection = styled.div`
  position: sticky;
  top: 0;
  background-color: aliceblue;
`;

export const StickyContent = styled.div<StickySectionProps>`
  height: 100vh;
  padding-top: 25vh;
  margin-top: ${(props) => (props.initial ? 0 : "-100vh")};
`;

export const Buffer = styled.div`
  height: 100vh;
`;

export const Container = styled.div`
  position: relative;
`;
