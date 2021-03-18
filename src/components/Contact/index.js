import React from "react";
import "./style.css";



function Contact() {

  const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];


  return (
<div className="container contact">
    <form>
      <div className="mb-3 row">
        <input
          type="name"
          className="form-control col-md-4"
          id="exampleDropdownFormEmail1"
          placeholder="First Name"
        />
        <input
          type="password"
          className="form-control col-md-4"
          id="exampleDropdownFormPassword1"
          placeholder="Phone Number"
        />
        <input
          type="password"
          className="form-control col-md-4"
          id="exampleDropdownFormPassword1"
          placeholder="City"
        />
      </div>
      <div className="mb-3 row">
        <input
          type="name"
          className="form-control col-md-4"
          id="exampleDropdownFormEmail1"
          placeholder="Last Name"
        />
        <input
          type="password"
          className="form-control col-md-4"
          id="exampleDropdownFormPassword1"
          placeholder="Email"
        />
        <input
          type="password"
          className="form-control col-md-4"
          id="exampleDropdownFormPassword1"
          placeholder="State"
        />

        <ul class="nav">
          <li>
            <div class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                State
              </a>
              <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                {states.map((o, key) => {
              return(<li>
                <a class="dropdown-item" href="#">
                {o}
                </a>
                  </li>
                );
              })}3
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <button type="submit" className="btn btn-danger">
        Submit
      </button>
    </form>
    </div>
  );
}
export default Contact;
