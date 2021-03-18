import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function Jumbotron() {
  return (
    <div className="container-fluid contact"   style={{ backgroundImage: "url(/images/background.jpg)" }}>
      <div className="row justify-content-center">
        <div
          className="jumbotron col-8 pl-0 pr-0"
        >
          <img
            className="img-fluid p-3"
            src={process.env.PUBLIC_URL + "/images/logo.png"}
          />
          <p className="jumbotronText">
            CDL-A SCHEDULED REGIONAL TRUCK DRIVER JOBS - 5 NIGHTS OUT ROUTES
          </p>
          <button
            type="button"
            className="btn"
            style={{ background: "#787878" }}
          >
            QUICK FORM
            <span>
              <FontAwesomeIcon className="icon" icon={faThumbsUp} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Jumbotron;
