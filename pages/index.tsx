import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { Head } from "../components/utilities/Head";
import { Landing } from "../components/sections/Landing";
import { Header } from "../components/layout/Header";
import { About } from "../components/sections/About";
import { Theme } from "../theme";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Head />
      <Header />
      <Landing />
      <About />
    </ThemeProvider>
  );
};

export default Home;
