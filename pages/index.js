import Head from "next/head";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import WhatIdo from "@/components/WhatIdo";
import Skills from "@/components/Skills";
import CreativeWorks from "@/components/CreativeWorks";
import ContactUs from "@/components/ContactUs";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sunil Patra | Portfolio</title>
        <meta name="description" content="This website is all about me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <About/>
        <WhatIdo/>
        <Skills/>
        <CreativeWorks/>
        <ContactUs/>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
