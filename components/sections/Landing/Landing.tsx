import React, { Fragment, ReactElement } from "react";
import { StickySection } from "@layout/StickySection";
import { Container } from "@layout/Container";
import { Avatar } from "@shared/Avatar";
import { NameBanner } from "@shared/NameBanner";
import { Accent } from "@typography/Accent";
import { Paragraph } from "@typography/Paragraph";
import { Heading, Subheading, MinorHeading } from "@typography/Headings";
import { useViewPortSize } from "@hooks/useViewPortSize";
import { ViewportSize } from "@hooks/useViewPortSize/types";

export function Landing(): ReactElement {
  const viewPortSize = useViewPortSize();

  return (
    // <StickySection initial>
    //   <
    // </StickySection>
    <StickySection initial>
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
    </StickySection>
  );
}
