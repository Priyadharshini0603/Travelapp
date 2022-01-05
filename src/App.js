import React from "react";
import "./App.css";
import Navbar from "./navbar";
import Header from "./header.js";
import CoverPage from "./CoverPage";
import Footer from "./footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <CoverPage />
      <Footer />
    </>
  );
}

export default App;
