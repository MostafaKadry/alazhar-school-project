import "./App.css";
import React, { useState } from "react";
import Heading from "./components/heading";
import Inputs from "./components/inputs";
import B1 from "./components/B1";
import B2 from "./components/B2";
import B1plusB2 from "./components/B1plusB2";

const App = () => {
  let [B1Number, setB1number] = useState(0);
  let [B2Number, setB2number] = useState(0);

  let renderB1data = (x) => {
    setB1number(x);
    console.log("B1", x);
  };

  let renderB2data = (y) => {
    setB2number(y);
    console.log("b2", y);
  };
  return (
    <div className="App">
      <table className="table table-bordered table">
        <thead>
          <Heading />
        </thead>
        <tbody>
          <B1 B1Number={B1Number} />
          <B2 B2Number={B2Number} />
          <B1plusB2 B1Number={B1Number} B2Number={B2Number} />
        </tbody>
      </table>
      <Inputs renderB1data={renderB1data} renderB2data={renderB2data} />
    </div>
  );
};

export default App;
