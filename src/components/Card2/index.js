import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Card2() {
  return (
    <div className="container-fluid" style={{ background: "#eeeeee" }}>
      <div className="row justify-content-center">
      <div class="card-group col-8">
        <div className="card" style={{ background: "none" }}>
          <div className="card-body">
            <img
              className="img-fluid mx-auto mt-0 pt-0"
              alt="Hummer Trucker"
              src={process.env.PUBLIC_URL + "/images/trucker.jpg"}
            />
          </div>
        </div>
        <div className="card" style={{ background: "none" }}>
          <div className="card-body">
            <div
              className="card-title"
              style={{ fontWeight: "bold" }}
            >
              Hummer's CDL A Scheduled Regional 5-nights-out truck driver
              positions offer:
            </div>
            <ul>
              <li>
                5 Nights Out on the road, followed by 2 consecutive nights at
                home every week.
              </li>
              <li>
                No guesswork - Drivers will know dispatch time before they are
                done for the week on Friday.
              </li>
              <li>
                Hiring area limited to where freight patterns allow for home
                time commitments to be met - ask for details!
              </li>
              <li>
                Starting pay based on most recent six years of work history.
              </li>
              <li>
                Annual pay based on most recent six yeras of work history.
              </li>
              <li>
                Benefits, bonus programs and too many advantages to list here!
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    <div className="row">
        <button
          type="button"
          className="col-12 btn mt-2"
        >
            <FontAwesomeIcon className="icon arrow" icon={faChevronDown}  style={{background: 'none', color: "#c31d23", fontSize: '50pt' }} />
        </button>
      </div>
    </div>
  );
}
export default Card2;
