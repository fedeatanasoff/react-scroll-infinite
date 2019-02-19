import React, { Component } from "react";
import Image from "../image/Image";

export class Images extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card-columns">
            <div className="card">
              <Image />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Images;
