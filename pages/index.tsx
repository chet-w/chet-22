import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { Head } from "../components/utilities/Head";
import { Landing } from "../components/sections/Landing/Landing";
import { Theme } from "../theme";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Head />
      <Landing />
    </ThemeProvider>
  );
};

export default Home;
