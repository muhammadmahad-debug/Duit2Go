import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactUsScreen from "./Screens/ContactUs/ContactUsScreen";

function App() {
  return (
    <BrowserRouter>
      <div id="page" className="page">
        <Navbar />
        <Switch>
          <Route path="/contacts.html" component={ContactUsScreen} />
          <Route path="*" component={HomeScreen} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
