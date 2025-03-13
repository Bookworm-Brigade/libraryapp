import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const PagesLayout = (props) => {
  return (
    <>
    <div className=" h-full flex flex-col justify-between">
       <Navbar />
      {props.children}
      <Footer />
    </div>
     
    </>
  );
};
export default PagesLayout;