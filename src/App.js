import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import ServicesSection from "./components/ServicesSection";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import AboutUs from "./pages/AboutUs";
//Router
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
      {/* <ServicesSection /> */}
    </div>
  );
}

export default App;
