import "./App.css";
import React, { useState } from "react";
import Heading from "./components/heading";
import Inputs from "./components/inputs";
import B1 from "./components/B1";
import B2 from "./components/B2";
import B1plusB2 from "./components/B1plusB2";
//second tabel
import Heading2 from "./components/heading2";
import B1B from "./components/B1B";
import B2B from "./components/B2B";
import Inputs2 from "./components/inputs2";
import B1BplusB2B from "./components/B1BplusB2B";
import ContactUS from "./components/contactus";
const App = () => {
  // first Tabel methods and vars
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
  // second tabel method and vars
  let [B1BNumber, setB1Bnumber] = useState(0);
  let [B2BNumber, setB2Bnumber] = useState(0);

  let renderB1Bdata = (x) => {
    setB1Bnumber(x);
    console.log("B1", x);
  };

  let renderB2Bdata = (y) => {
    setB2Bnumber(y);
    console.log("b2", y);
  };
  return (
    <div className="App">
      <div className="frst-tabel-container">
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
      <br></br>
      {/* Start Second Table */}
      <div className="sec-tabel-container">
        <table className="table table-bordered table">
          <thead>
            <Heading2 />
          </thead>
          <tbody>
            <B1B B1BNumber={B1BNumber} />
            <B2B B2BNumber={B2BNumber} />
            <B1BplusB2B B1BNumber={B1BNumber} B2BNumber={B2BNumber} />
          </tbody>
        </table>
        <Inputs2 renderB1Bdata={renderB1Bdata} renderB2Bdata={renderB2Bdata} />
      </div>
      {/* Contact us footer */}

      <ContactUS />
    </div>
  );
};

export default App;
