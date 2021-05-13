import React from "react";
import Weather from "./Weather";
import "./App.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Munich" />
        <Footer />
      </div>
    </div>
  );
}