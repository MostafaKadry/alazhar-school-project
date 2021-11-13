import React from "react";

const B2 = (props) => {
  let y = props.B2Number;
  let b2Data = {
    B2SchoolSports: y * 0.5,
    B2familyBox: y * 5,
    B2BuildingFixes: y * 8.5,
    B2YouthHouses: y * 0.8,
    B2Offices: y * 0.14,
    B2Computers: y * 7,
    B2CollaporationBox: y * 3,
    B2SportsActivity: y * 0.25,
    B2upperBoard: y * 0.25,
    b2Number: y,
  };

  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
  let B2gross = sumValues(b2Data);
  return (
    <tr>
      <th scope="row" id="B1gross">
        {Number(B2gross).toFixed(2)}
      </th>
      <td id="B2SchoolSports">{b2Data.B2SchoolSports}</td>
      <td id="B2familyBox">{b2Data.B2familyBox}</td>
      <td id="B2BuildingFixes">{b2Data.B2BuildingFixes}</td>

      <td id="B2YouthHouses">{b2Data.B2YouthHouses.toFixed(2)}</td>
      <td id="B2Offices">{b2Data.B2Offices.toFixed(2)}</td>

      <td id="B2Computers">{b2Data.B2Computers}</td>
      <td id="B2CollaporationBox">{b2Data.B2CollaporationBox}</td>
      <td id="B2SportsActivity">{b2Data.B2SportsActivity}</td>
      <td id="B2upperBoard">{b2Data.B2upperBoard}</td>
      <td id="b2Number">{b2Data.b2Number}</td>
      <td>شهادة ب</td>
    </tr>
  );
};
export default B2;
