import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const CurrentSection = styled.div`
  display: flex;
  align-items: center;
`;

export const DropdownButton = styled.button`
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
  }

  & circle,
  polyline {
    stroke: ${(props) => props.theme.colors.primary};
  }
`;
