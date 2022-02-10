import React, { ReactElement } from "react";
import { Section } from "../../layout/Section";

export function About(): ReactElement {
  return (
    <Section
      direction="horizontal"
      crossAxis="start"
      mainAxis="center"
    ></Section>
  );
}
