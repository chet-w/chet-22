import React, { ReactElement } from "react";
import { CaretCircleDown } from "phosphor-react";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import { MinorHeading } from "../../../../typography/Headings";
import { Section, SectionPickerProps } from "./types";
import * as S from "./styles";
import { AnimatePresence } from "framer-motion";

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

  return (
    <S.Wrapper>
      <S.CurrentSection className={isOpen ? "visible" : ""} role="menu">
        <S.DropdownButton {...buttonProps} isActive={isOpen}>
          <MinorHeading noMargin>{sectionOptions[props.activeSection].title}</MinorHeading>
          <S.IconWrapper
            variants={S.buttonVariants}
            animate={isOpen ? "active" : "normal"}
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
