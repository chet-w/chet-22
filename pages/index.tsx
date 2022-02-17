import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import useScrollSpy from "react-use-scrollspy";
import { Head } from "../components/utilities/Head";
import { Landing } from "../components/sections/Landing";
import { Header } from "../components/layout/Header";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Skills } from "../components/sections/Skills";
import { Contact } from "../components/sections/Contact";
import { Theme } from "../theme";
import { useRef } from "react";

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
        <Skills ref={SkillsSectionRef} />
        <Contact ref={ContactSectionRef} />
      </main>
    </ThemeProvider>
  );
};

export default Home;
