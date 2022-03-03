import styled from "styled-components";
import { ItemProps } from "./types";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

export const Item = styled.article<ItemProps>`
  scroll-snap-align: center;
  margin: 1rem 2rem;
  padding: 2rem;
  min-width: 992px;
  background: ${(props) => props.theme.colors.translucent.primary};
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    max-width: 992px;
    min-width: 992px;
  }

  @media (max-width: 992px) {
    max-width: 768px;
    min-width: 768px;
  }

  @media (max-width: 768px) {
    max-width: 540px;
    min-width: 540px;
  }

  @media (max-width: 425px) {
    max-width: 320px;
    min-width: 320px;
  }
`;
