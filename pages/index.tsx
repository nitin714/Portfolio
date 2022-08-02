import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "./../components/Navbar";
import Main from "./../components/Main";
import About from "./../components/About";
import Skills from "./../components/Skills";
import Projects from "./../components/Projects";
import Contact from "./../components/Contact";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/narutoheadbandsign.webp" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
