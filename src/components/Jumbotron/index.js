import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function Jumbotron() {
  return (
    <div
      className="jumbotron container-fluid"
      style={{ backgroundImage: "url(/images/background.jpg)" }}
    >
      <img
        className="img-fluid p-3"
        src={process.env.PUBLIC_URL + "/images/logo.png"}
      />
      <p className="jumbotronText">
        CDL-A SCHEDULED REGIONAL TRUCK DRIVER JOBS - 5 NIGHTS OUT ROUTES
      </p>
      <button type="button" className="btn" style={{ background: "#787878" }}>
        QUICK FORM
        <span>
          <FontAwesomeIcon className="icon" icon={faThumbsUp} />
        </span>
      </button>
    </div>
  );
}
export default Jumbotron;
