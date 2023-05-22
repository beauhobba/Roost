import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Rules,
  Contact,
  Supporters,
  Blog,
  Expansion
} from "./components";
import Purchase from "./components/Purchase";
import {Amplify} from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);



ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/purchase" element={<Purchase />}/>
      <Route path="/expansion" element={<Expansion />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/supporters" element={<Supporters />}/>

    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
