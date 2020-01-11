import React from "react";
import Home from "./Pages/Home";
// import Registrasi from "./Pages/Registrasi";
// import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      {/* <Route path="/registrasi" component={Registrasi} /> */}
    </Router>
  );
}

export default App;
