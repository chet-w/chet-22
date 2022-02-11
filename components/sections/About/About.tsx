import React, { Fragment, ReactElement } from "react";
import { Section } from "../../layout/Section";
import { Accent } from "../../typography/Accent/styles";
import { Heading } from "../../typography/Headings";
import { Paragraph } from "../../typography/Paragraph";

export function About(): ReactElement {
  return (
    <Fragment>
      <Section direction="vertical" crossAxis="start" mainAxis="start">
        <Heading>
          <Accent>About me</Accent>
        </Heading>
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          consequatur libero blanditiis cum, consequuntur sint nobis ea
          voluptatem at perspiciatis obcaecati eveniet consectetur saepe tempore
          ex est optio? Inventore, eveniet.
        </Paragraph>
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          consequatur libero blanditiis cum, consequuntur sint nobis ea
          voluptatem at perspiciatis obcaecati eveniet consectetur saepe tempore
          ex est optio? Inventore, eveniet.
        </Paragraph>
      </Section>
    </Fragment>
  );
}
