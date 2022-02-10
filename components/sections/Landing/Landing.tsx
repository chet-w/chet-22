import React, { ReactElement } from "react";
import { Section } from "../../layout/Section";
import { Accent } from "../../typography/Accent";
import { Container } from "../../layout/Container";
import { Heading, Subheading, MinorHeading } from "../../typography/Headings";
import { Avatar } from "../../shared/Avatar";
import { NameBanner } from "../../shared/NameBanner";

export function Landing(): ReactElement {
  return (
    <Section direction="horizontal" crossAxis="start" mainAxis="center">
      <Container direction="vertical">
        <Heading as="h1">
          <NameBanner />
        </Heading>
        <Subheading>
          <Accent>Front-End</Accent> Developer
        </Subheading>
        <MinorHeading>Wellington, New Zealand</MinorHeading>
      </Container>
      <Avatar size="large" />
    </Section>
  );
}
