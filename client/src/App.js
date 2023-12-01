import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import SearchPage from "./Pages/SearchPage"
import Saved from "./Pages/Saved";


const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />
  },
  {
    path: "/saved",
    element: <Saved />
  }
])
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <br/>
        <RouterProvider router={router} />
      </div>
    );
  }
}

export default App;
