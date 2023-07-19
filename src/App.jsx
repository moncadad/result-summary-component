import React from "react";
import "./App.css";
import Result from "./components/Result";
import Summary from "./components/Summary";

export default function App() {
  return (
    <>
      <div className="container">
        <Result />
        <Summary />
      </div>
    </>
  );
}
