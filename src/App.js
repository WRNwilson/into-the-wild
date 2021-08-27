import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import ServicesSection from "./components/ServicesSection";
//Import Pages
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
      {/* <ServicesSection /> */}
    </div>
  );
}

export default App;
