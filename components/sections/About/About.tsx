import React, { Fragment, ReactElement } from "react";
import { Section } from "../../layout/Section";

export function About(): ReactElement {
  return (
    <Fragment>
      <Section
        direction="horizontal"
        crossAxis="start"
        mainAxis="center"
      ></Section>
    </Fragment>
  );
}
