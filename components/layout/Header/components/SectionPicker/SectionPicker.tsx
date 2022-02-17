import React, { ReactElement } from "react";
import { CaretCircleDown } from "phosphor-react";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import { MinorHeading } from "../../../../typography/Headings";
import { Section, SectionPickerProps } from "./types";
import * as S from "./styles";
import { AnimatePresence } from "framer-motion";
import { useScrollDistance } from "@hooks/useScrollDistance";

export function SectionPicker(props: SectionPickerProps): ReactElement {
  const sectionOptions: Section[] = [
    {
      title: "About me",
      link: "#about",
    },
    {
      title: "Experience",
      link: "#experience",
    },
    {
      title: "Skills",
      link: "#skills",
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ];

  const { buttonProps, itemProps, isOpen } = useDropdownMenu(2);
  const { scrollDirection } = useScrollDistance();

  return (
    <S.Wrapper>
      <S.CurrentSection className={isOpen ? "visible" : ""} role="menu">
        <S.DropdownButton {...buttonProps} isActive={isOpen}>
          {sectionOptions.map(({ title }) => (
            <AnimatePresence exitBeforeEnter key={title}>
              {sectionOptions[props.activeSection].title === title && (
                <MinorHeading
                  variants={S.sectionPickerHeadingVariants}
                  initial={scrollDirection === "down" ? "entry" : "exit"}
                  animate="animate"
                  exit={scrollDirection === "down" ? "exit" : "entry"}
                  style={{ position: "absolute" }}
                  noMargin
                >
                  {title}
                </MinorHeading>
              )}
            </AnimatePresence>
          ))}
          <S.IconWrapper
            variants={S.buttonVariants}
            animate={isOpen ? "active" : "normal"}
            style={{ position: "absolute", right: 0 }}
          >
            <CaretCircleDown size={28} />
          </S.IconWrapper>
        </S.DropdownButton>
        <AnimatePresence>
          {isOpen && (
            <S.Options
              variants={S.optionsVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {sectionOptions.map(({ link, title }, index) => (
                <S.Option
                  variants={S.optionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  key={link}
                >
                  <a {...itemProps[index]} href={link}>
                    {title}
                  </a>
                </S.Option>
              ))}
            </S.Options>
          )}
        </AnimatePresence>
      </S.CurrentSection>
    </S.Wrapper>
  );
}
