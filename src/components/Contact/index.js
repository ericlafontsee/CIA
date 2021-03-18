import React from "react";
import "./style.css";

function Contact() {
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];

  return (
    <div className="container-fluid contact" style={{ background: "black" }}>
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="row justify-content-center">
            <div>
              <h5>
                Run Hard, Get Home, Get Paid - It's That Simple At Hummer
                Trucking. Learn More Today!
              </h5>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col p-2">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col p-2">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                aria-label="Phone Number"
              />
            </div>
            <div className="col p-2">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                aria-label="City"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col p-2">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                aria-label="Last Name"
              />
            </div>
            <div className="col p-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
              />
            </div>
            <div className="col dropdown p-2">
                <button
                  className="btn col dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  State
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {states.map((o, key) => {
                    return (
                      <a className="dropdown-item" href="#">
                        {o}
                      </a>
                    );
                  })}
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col offset-8 mt-5">
              <button
                type="submit"
                className="btn"
                style={{ background: "#c31d23", border: "1px outset white", marginLeft: '-7px' }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
