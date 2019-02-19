import React, { Component } from "react";
// import PropTypes from "prop-types";

export class Images extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card-columns">
            <div className="card">
              <img
                src="https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/w_582,c_limit/pulsar-831502910.jpg."
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Images;
