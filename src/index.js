import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
} from "./components";
import Skills from "./components/Skills";
import {Amplify} from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/purchase" element={<Skills />}/>
      <Route path="/blog" element={<Blog />}/>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
