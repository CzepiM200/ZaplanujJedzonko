import React from "react";
import "./scss/main.scss";
import Header from "./components/landingPageComponents/Header/Header";
import Carousel from "./components/landingPageComponents/Carousel/Carousel";
import CallToAction from "./components/landingPageComponents/CallToAction/Call_to_Action";
import About from "./components/landingPageComponents/About/About";
import SignUpForm from "./components/landingPageComponents/SignUpForm/SignUpForm";
import Author from "./components/landingPageComponents/Author/Author";
import Footer from "./components/landingPageComponents/Footer/Footer";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboardComponents/Dashboard/Dashboard";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <CallToAction />
      <About />
      <SignUpForm />
      <Author />
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route>
            <Dashboard path="/dashboard" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
