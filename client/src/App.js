import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SearchPage />}/>
            <Route exact path="/saved"  element={<Saved />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
