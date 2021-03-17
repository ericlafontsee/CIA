import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Card() {
  return (
    <div className="card-group">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">
            Want To Be Home This Weekend? With Hummer's 5-Nights-Out Positions,
            You Will Be!
          </h2>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-danger">
              APPLY NOW 
          <span><FontAwesomeIcon className="icon" icon={faExternalLinkSquareAlt} /></span>
            </button>
            <button type="button" className="btn btn-secondary">
              &#40;866&#41; 913-1352
          <span><FontAwesomeIcon className="icon" icon={faPhoneSquareAlt} /></span>

            </button>
          </div>
          <button type="button" className="btn btn-dark">
              SEARCH JOBS BY AREA
          <span><FontAwesomeIcon className="icon" icon={faSearch} /></span>

            </button>
          <p className="card-text">
            If you're ready to end the home time guessing game, then Hummer's
            CDL-A scheduled regional 5-nights-out truck driving positions are
            for you! Your home time is right there in the job title. These
            scheduled regional driving positions mean you are home every
            weekend, running only where we can be sure that you get home on time
            &#40;typically out mid-day Sunday and back home mid-day Friday&#41;.
            Take a closer look at our hiring areas and see if this opportunity
            is right for you - we'd love to have you on board.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
