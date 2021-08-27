import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import ServicesSection from "./components/ServicesSection";
import Nav from "./components/Nav";
//Import Pages
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />

      {/* <ServicesSection /> */}
    </div>
  );
}

export default App;
