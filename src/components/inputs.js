import React from "react";
import { useState } from "react";

const Inputs = (props) => {
  // States
  const [frstInpt, setFrstInpt] = useState(0);
  const [secInpt, setsecInpt] = useState(0);
  // update state | receive what written in inputs
  const updateFrstInpt = (e) => {
    setFrstInpt(e.target.value);
  };
  const updateSecInpt = (e) => {
    setsecInpt(e.target.value);
  };

  // Send data which have recieved as B1 and B2 To App.js file
  const sendB1datatoApp = () => {
    props.renderB1data(frstInpt);
  };

  const sendB2datatoApp = () => {
    props.renderB2data(secInpt);
  };

  return (
    <section className="lastupdate" id="lastupdate">
      <div className="container">
        <div className="row">
          {/*[1] first input to Get B1 */}
          <div className="col-12 mb-5 m-auto">
            <div className="card text-center" id="GET-B1Card">
              <div className="card-body">
                <h2 className="card-title">أدخل عدد طلاب نقل ب </h2>
                <input
                  type="text"
                  className="text-end"
                  placeholder="أكتب عدد الطلاب هنا"
                  style={{
                    display: "block",
                    margin: "10px auto",
                  }}
                  onChange={updateFrstInpt}
                />
                <button
                  type="button"
                  className="btn btn-outline-info"
                  onClick={sendB1datatoApp}
                >
                  أضغط هنا لعرض النتيجة لنقل ب فقط
                </button>
              </div>
            </div>
          </div>
          {/* [2] Second Cart to get B2 */}
          <div className="col-12 mb-5 m-auto">
            <div className="card text-center" id="GET-B2Card">
              <div className="card-body">
                <h2 className="card-title">أدخل عدد طلاب شهادة ب </h2>
                <input
                  type="text"
                  className="text-end"
                  placeholder="أكتب عدد الطلاب هنا"
                  style={{
                    display: "block",
                    margin: "10px auto",
                  }}
                  onChange={updateSecInpt}
                />
                <button
                  type="button"
                  className="btn btn-outline-info"
                  onClick={sendB2datatoApp}
                >
                  أضغط هنا لعرض النتيجة لنقل ب فقط
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inputs;
