import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import UploadProductForm from "./Components/UploadProductForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Views/About";
import Home from "./Views/Home";
import Product from "./Views/Product";
import ContactUs from "./Views/ContactUs";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/contactus">
              <ContactUs />
            </Route>
            <Route path="/uploadproductform">
              <UploadProductForm />
            </Route>
          </Switch>
        </div>
        <div><Footer /></div>
        {/* <div>
          <Switch>
            <Route path="/Legal"><Legal /></Route>
          </Switch>
        </div> */}
        </Router>
      </div>

  );
}

export default App;