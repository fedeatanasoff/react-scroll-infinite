import React, { Component } from "react";
import axios from "axios";

export class Image extends Component {
  state = {
    images: [],
    start: 1,
    count: 30
  };

  componentDidMount() {
    const { count, start } = this.state;

    axios
      .get(`api/photos?count=${count}&start=${start}`)
      .then(res => this.setState({ images: res.data }));
  }

  render() {
    console.log("estado de image =>", this.state);
    return <p>hello friend</p>;
  }
}

export default Image;
