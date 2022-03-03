import React, { ReactElement } from "react";
import { Accent } from "@typography/Accent";

export function NameBanner(): ReactElement {
  return (
    <span>
      Chet <Accent>Davidson</Accent>
    </span>
  );
}
