import React from "react";
import "./App.css";
import Content from "./Components/Content";
import FilterBox from "./Components/FilterBox";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { GlobalProvider } from "./State/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Content />
        <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;
