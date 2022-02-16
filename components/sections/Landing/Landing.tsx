import React, { ReactElement } from "react";
import { Section } from "../../layout/Section";
import { Accent } from "../../typography/Accent";
import { Container } from "../../layout/Container";
import { Heading, Subheading, MinorHeading } from "../../typography/Headings";
import { Avatar } from "../../shared/Avatar";
import { NameBanner } from "../../shared/NameBanner";
import { useViewPortSize } from "../../../hooks/useViewPortSize";
import { ViewportSize } from "../../../hooks/useViewPortSize/types";

export function Landing(): ReactElement {
  const viewPortSize = useViewPortSize();

  return (
    <Section
      direction="horizontal"
      crossAxis="start"
      mainAxis="center"
      size="big"
      id="landing"
    >
      <Container direction="vertical">
        <Heading as="h1">
          <NameBanner />
        </Heading>
        <Subheading>
          <Accent>Front-End</Accent> Developer
        </Subheading>
        <MinorHeading>Wellington, New Zealand</MinorHeading>
      </Container>
      {viewPortSize < ViewportSize.Medium ? <Avatar size="large" /> : <div />}
    </Section>
  );
}
