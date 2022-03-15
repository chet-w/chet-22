import { useRef } from "react";
import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import useScrollSpy from "react-use-scrollspy";
import { Header } from "@layout/Header";
import { About } from "@sections/About";
import { Contact } from "@sections/Contact";
import { Experience } from "@sections/Experience";
import { Landing } from "@sections/Landing";
import { Skills } from "@sections/Skills";
import { Head } from "@utilities/Head";
import { Theme } from "../theme";

const Home: NextPage = () => {
  const AboutSectionRef = useRef(null);
  const ExperienceSectionRef = useRef(null);
  const SkillsSectionRef = useRef(null);
  const ContactSectionRef = useRef(null);

  const activeSection = useScrollSpy({
    sectionElementRefs: [
      AboutSectionRef,
      ExperienceSectionRef,
      SkillsSectionRef,
      ContactSectionRef,
    ],
    offsetPx: -100,
  });

  return (
    <ThemeProvider theme={Theme}>
      <Head />
      <Header activeSection={activeSection} />
      <main>
        <Landing />
        <About ref={AboutSectionRef} />
        <Experience ref={ExperienceSectionRef} />
        <About ref={AboutSectionRef} />
        <Experience ref={ExperienceSectionRef} />
      </main>
    </ThemeProvider>
  );
};

export default Home;
