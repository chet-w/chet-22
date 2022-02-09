import React, { ReactElement } from "react";
import { Section } from "../../layout/Section";
import { Accent } from "../../typography/Accent";
import { Heading, Subheading, MinorHeading } from "../../typography/Headings";

export function Landing(): ReactElement {
  return (
    <Section direction="vertical" crossAxis="start" mainAxis="center">
      <Heading as="h1">
        Chet <Accent>Davidson</Accent>
      </Heading>
      <Subheading>
        <Accent>Front-End</Accent> Developer
      </Subheading>
      <MinorHeading>Wellington, New Zealand</MinorHeading>
    </Section>
  );
}
