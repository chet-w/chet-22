import React, { Fragment, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Container } from "@layout/Container";
import { Avatar } from "@shared/Avatar";
import { NameBanner } from "@shared/NameBanner";
import { Subheading } from "@typography/Headings";
import { useScrollDistance } from "@hooks/useScrollDistance";
import { useViewPortSize } from "@hooks/useViewPortSize";
import { ViewportSize } from "@hooks/useViewPortSize/types";
import { SectionPicker, HeaderLinks } from "./components";
import { HeaderProps } from "./types";
import * as S from "./styles";

export function Header({ activeSection }: HeaderProps) {
  const [showHeader, setShowHeader] = useState(false);
  const { scrollDistance } = useScrollDistance();
  const viewPortSize = useViewPortSize();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowHeader(scrollDistance > window.innerHeight / 3);
    } else {
      setShowHeader(false);
    }
  }, [scrollDistance]);

  return (
    <AnimatePresence>
      {showHeader && (
        <S.Header
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={S.headerVariants}
        >
          <Container direction="horizontal" crossAxis="center">
            <S.AvatarWrapper
              variants={S.avatarVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <Avatar size="small" />
            </S.AvatarWrapper>
            <Subheading noMargin>
              <NameBanner />
            </Subheading>
            {viewPortSize > ViewportSize.Small && (
              <Fragment>
                <SectionPicker activeSection={activeSection} />
                <HeaderLinks />
              </Fragment>
            )}
          </Container>
        </S.Header>
      )}
    </AnimatePresence>
  );
}
