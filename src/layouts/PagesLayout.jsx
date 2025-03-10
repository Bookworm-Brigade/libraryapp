import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const PagesLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};
export default PagesLayout;