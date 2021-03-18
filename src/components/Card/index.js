import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Card() {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 }
  });

  const Demo = (
    <>
      <div onClick={() => toggle(!state)}>
        <animated.div
          style={{
            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
              })
              .interpolate((x) => `scale(${x})`)
          }}
        >
          APPLY NOW
          <span>
            <FontAwesomeIcon className="icon" icon={faExternalLinkSquareAlt} />
          </span>
        </animated.div>
      </div>
    </>
  );

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div class="card-group col-8">
          <div className="card">
            <div className="card-body">
              <h1 className="redText">
                Want To Be Home This Weekend? With Hummer's 5-Nights-Out
                Positions, You Will Be!
              </h1>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="row m-0">
                <button
                  type="button"
                  className="col mr-1 btn apply"
                  style={{ background: "#c31d23" }}
                >
                  {Demo}
                </button>
                <button
                  type="button"
                  className="col ml-1 btn phone"
                  style={{ background: "#787878" }}
                >
                  &#40;866&#41; 913-1352
                  <span>
                    <FontAwesomeIcon className="icon" icon={faPhoneSquareAlt} />
                  </span>
                </button>
              </div>
              <div className="row m-0">
                <button
                  type="button"
                  className="col-12 btn mt-2 searchBtn"
                  style={{ background: "black" }}
                >
                  SEARCH JOBS BY AREA
                  <span>
                    <FontAwesomeIcon className="icon" icon={faSearch} />
                  </span>
                </button>
              </div>
              <div className="row">
                <p className="col-12 card-text  mt-4 summary">
                  If you're ready to end the home time guessing game, then
                  Hummer's CDL-A scheduled regional 5-nights-out truck driving
                  positions are for you! Your home time is right there in the
                  job title. These scheduled regional driving positions mean you
                  are home every weekend, running only where we can be sure that
                  you get home on time &#40;typically out mid-day Sunday and
                  back home mid-day Friday&#41;. Take a closer look at our
                  hiring areas and see if this opportunity is right for you -
                  we'd love to have you on board.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
