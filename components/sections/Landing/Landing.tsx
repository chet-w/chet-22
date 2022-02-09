import React, { ReactElement } from "react";
import { Section } from "../../layout/Section";
import { Heading, Subheading, MinorHeading } from "../../typography/Headings";

export function Landing(): ReactElement {
  return (
    <Section direction="vertical" crossAxis="start" mainAxis="center">
      <Heading as="h1">Chet Davidson</Heading>
      <Subheading>Front-End Developer</Subheading>
      <MinorHeading>Wellington, New Zealand</MinorHeading>
    </Section>
  );
}
