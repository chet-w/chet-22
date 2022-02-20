import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  overflow-x: auto;
  position: absolute;
  left: 0;
  scroll-snap-type: x mandatory;
  scroll-snap-align: start;
`;

export const Item = styled.article`
  margin: 1rem 2rem;
  padding: 2rem;
  min-width: 768px;
  background: ${(props) => props.theme.colors.translucent.primary};
  border-radius: 1.5rem;

  &:first-of-type {
  }
`;
