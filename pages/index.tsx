import Footer from "components/Footer";
import Grid from "components/Grid";
import Header from "components/Header";
import ScrollToTopBtn from "components/ScrollToTopBtn";
import React from "react";

const Index = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Grid />
      <Footer />
      <ScrollToTopBtn />
    </>
  );
};

export default Index;
