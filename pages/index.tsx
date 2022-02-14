import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { Head } from "../components/utilities/Head";
import { Landing } from "../components/sections/Landing";
import { Header } from "../components/layout/Header";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Skills } from "../components/sections/Skills";
import { Contact } from "../components/sections/Contact";
import { Theme } from "../theme";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Head />
      <Header />
      <Landing />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </ThemeProvider>
  );
};

export default Home;
