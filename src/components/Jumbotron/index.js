import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

function Jumbotron() {
  return (
    <div className="jumbotron" style={{ backgroundImage: "url(/images/background.jpg)" }}>
      <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/logo.png"} />
      <p>CDL-A SCHEDULED REGIONAL TRUCK DRIVER JOBS - 5 NIGHTS OUT ROUTES</p>
      <p>
        <button type="button" className="btn btn-secondary">
          QUICK FORM
          <span><FontAwesomeIcon className="icon" icon={faThumbsUp} /></span>
        </button>
        

      </p>
    </div>
  );
}
export default Jumbotron;
