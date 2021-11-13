import React from "react";

const B1B = (props) => {
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
  let B1gross = sumValues(b1Data);
  return (
    <tr>
      <th scope="row" id="B1gross">
        {Number(B1gross).toFixed(2)}
      </th>
      <td id="B1SchoolSports">{b1Data.B1SchoolSports}</td>
      <td id="B1familyBox">{b1Data.B1familyBox}</td>
      <td id="B1BuildingFixes">{b1Data.B1BuildingFixes}</td>

      <td id="B1YouthHouses">{b1Data.B1YouthHouses.toFixed(2)}</td>
      <td id="B1Offices">{b1Data.B1Offices.toFixed(2)}</td>

      <td id="B1Computers">{b1Data.B1Computers}</td>
      <td id="B1CollaporationBox">{b1Data.B1CollaporationBox}</td>
      <td id="B1SportsActivity">{b1Data.B1SportsActivity}</td>
      <td id="B1upperBoard">{b1Data.B1upperBoard}</td>
      <td className="font-weight-bold" id="b1Number">
        {b1Data.b1Number}
      </td>
      <td className="font-weight-bold">نقل ب</td>
    </tr>
  );
};
export default B1B;
