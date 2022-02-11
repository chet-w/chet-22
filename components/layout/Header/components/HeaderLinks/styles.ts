import styled from "styled-components";

export const HeaderLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin-left: auto;
`;

export const HeaderLink = styled.li`
  margin: 0 0.75rem;

  svg {
    transition: 0.2s ease;
  }

  svg *:first-child {
    stroke: none;
  }

  svg circle:last-child {
    fill: ${(props) => props.theme.colors.primary};
  }

  circle,
  polyline,
  rect,
  line,
  path {
    stroke: ${(props) => props.theme.colors.primary};
  }
`;

export const Link = styled.a`
  display: inline-block;
  cursor: pointer;

  &:hover {
    svg {
      transform: translateY(2px);
    }
  }
`;
