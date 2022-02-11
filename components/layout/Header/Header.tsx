import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Container } from "../Container";
import { Avatar } from "../../shared/Avatar";
import { NameBanner } from "../../shared/NameBanner";
import { Subheading } from "./../../typography/Headings";
import { SectionPicker, HeaderLinks } from "./components";
import * as S from "./styles";
import { useScrollDistance } from "../../../hooks/useScrollDistance";

export function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const scrollDistance = useScrollDistance();

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
            <SectionPicker />
            <HeaderLinks />
          </Container>
        </S.Header>
      )}
    </AnimatePresence>
  );
}
