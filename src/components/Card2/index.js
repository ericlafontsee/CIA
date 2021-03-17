import React from "react";
import "./style.css";

function Card2() {
  return (
    <div className="card-group" >
      <div className="card" style={{background: 'gray'}}>
        <div className="card-body">
         <img  className="img-fluid"
        src={process.env.PUBLIC_URL + "/images/trucker.jpg"}/>
        </div>
      </div>
      <div className="card" style={{background: 'gray'}}>
        <div className="card-body">
          <div className="card-title">
            Hummer's CDL A Scheduled Regional 5-nights-out truck driver
            positions offer:
          </div>
          <ul>
            <li>5 Nights Out on the road, followed by 2 consecutive nights at home every week.</li>
            <li>No guesswork - Drivers will know dispatch time before they are done for the week on Friday.</li>
            <li>Hiring area limited to where freight patterns allow for home time commitments to be met - ask for details!</li>
            <li>Starting pay based on most recent six years of work history.</li>
            <li>Annual pay based on most recent six yeras of work history.</li>
            <li>Benefits, bonus programs and too many advantages to list here!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Card2;
