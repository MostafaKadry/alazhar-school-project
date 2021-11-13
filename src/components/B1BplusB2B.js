import React from "react";

const B1BplusB2B = (props) => {
  // B1 Data
  let x = props.B1BNumber;
  let b1Data = {
    B1SchoolSports: x * 2.26,
    B1familyBox: x * 1.7,
    B1BuildingFixes: x * 3.82,
    B1YouthHouses: x * 0.48,
    B1Offices: x * 2.13,
    B1Computers: x * 1.7,
    B1CollaporationBox: x * 2.55,
    B1SportsActivity: x * 0.21,
    B1upperBoard: x * 0.21,
    b1Number: x,
  };
  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
  let B1gross = Number(sumValues(b1Data));
  // B2 Data
  let y = props.B2BNumber;
  let b2Data = {
    B2SchoolSports: y * 1.81,
    B2familyBox: y * 1.7,
    B2BuildingFixes: y * 3.82,
    B2YouthHouses: y * 0.48,
    B2Offices: y * 2.13,
    B2Computers: y * 1.7,
    B2CollaporationBox: y * 0,
    B2SportsActivity: y * 0.21,
    B2upperBoard: y * 0.21,
    b2Number: y,
  };
  let B2gross = Number(sumValues(b2Data));
  return (
    <tr>
      <th scope="row" id="B1grossPlusB2gross">
        {(B1gross + B2gross).toFixed(2)}
      </th>
      <td id="B1-2SchoolSports">
        {b1Data.B1SchoolSports + b2Data.B2SchoolSports}
      </td>
      <td id="B1-2familyBox">{b1Data.B1familyBox + b2Data.B2familyBox}</td>
      <td id="B1-2BuildingFixes">
        {b1Data.B1BuildingFixes + b2Data.B2BuildingFixes}
      </td>

      <td id="B1-2YouthHouses">
        {(b1Data.B1YouthHouses + b2Data.B2YouthHouses).toFixed(2)}
      </td>
      <td id="B1-2Offices">
        {(b1Data.B1Offices + b2Data.B2Offices).toFixed(2)}
      </td>

      <td id="B1-2Computers">{b1Data.B1Computers + b2Data.B2Computers}</td>
      <td id="B1-2CollaporationBox">
        {b1Data.B1CollaporationBox + b2Data.B2CollaporationBox}
      </td>
      <td id="B1-2SportsActivity">
        {b1Data.B1SportsActivity + b2Data.B2SportsActivity}
      </td>
      <td id="B1-2upperBoard">{b1Data.B1upperBoard + b2Data.B2upperBoard}</td>
      <td id="b1-2Number">
        {Number(b1Data.b1Number) + Number(b2Data.b2Number)}
      </td>
      <td>الاجمالى</td>
    </tr>
  );
};

export default B1BplusB2B;
