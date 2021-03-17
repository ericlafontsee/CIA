import React from "react";
import "./style.css";

function Navbar() {
  return (
<ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Company</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Drivers</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
</ul>
  );
}
export default Navbar;
