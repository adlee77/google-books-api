import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import SearchPage from "./Pages/SearchPage"
import Saved from "./Pages/Saved";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <br/>
        <Router>
          <Route exact path="/" component={SearchPage}/>
          <Route exact path="/saved" component={Saved}/>
        </Router>
      </div>
    );
  }
}

export default App;
