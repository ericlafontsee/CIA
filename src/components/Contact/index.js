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
            <div className="col">
              <div className="h5">
                Run Hard, Get Home, Get Paid - It's That Simple At Hummer
                Trucking. Learn More Today!
              </div>
            </div>
          </div>
          <form class="row g-3">
            <div class="col-md-4 pb-3">
              <input3
                type="text"
                class="form-control"
                placeholder="First Name"
              />
            </div>
            <div class="col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="Phone Number"
              />
            </div>
            <div class="col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="City"
              />
            </div>
            <div class="col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
              />
            </div>
            <div class="col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="Email"
              />
            </div>
            <div class="col-md-4">
              <select id="inputState" class="form-select">
                <option selected>State...</option>
                {/* Maps through states array to provide user with all 50 options */}
                {states.map((o, key) => {
                  return <option> {o}</option>;
                })}
              </select>
            </div>
            <div className="col-12 offset-md-8 mt-5 mb-2">
              <button
                type="submit"
                className="btn"
                style={{
                  background: "#c31d23",
                  border: "1px outset #ffffff",
                  marginLeft: "2px"
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
