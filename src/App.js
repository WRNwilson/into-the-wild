import React from "react";
import GlobalStyle from "./components/GlobalStyle";
// import ServicesSection from "./components/ServicesSection";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import AboutUs from "./pages/AboutUs";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
// animation
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  // adjust scrll behaviour
  // window.onload = function () {
  //   setTimeout(function () {
  //     window.scrollTo(0, 0);
  //   }, 1);
  // };
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
      {/* <ServicesSection /> */}
    </div>
  );
}

export default App;
