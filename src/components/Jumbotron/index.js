import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div class="jumbotron" style={{backgroundImage: `url()`}}>
      <img src={process.env.PUBLIC_URL + "/images/logo.png"}/>
      <p>...</p>
      <p>
        <a class="btn btn-primary btn-lg" href="#" role="button">
        </a>
      </p>
    </div>
  );
}
export default Jumbotron;
