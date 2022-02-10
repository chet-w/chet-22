import React, { Fragment, ReactElement } from "react";
import { Section } from "../../layout/Section";
import { Header } from "../../layout/Header";

export function About(): ReactElement {
  return (
    <Fragment>
      <Header />
      <Section
        direction="horizontal"
        crossAxis="start"
        mainAxis="center"
      ></Section>
    </Fragment>
  );
}
