import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

export class Image extends Component {
  state = {
    images: [],
    start: 1,
    count: 30
  };

  componentDidMount() {
    const { count, start } = this.state;
    // this.setState({ start: this.state.start + count });
    axios
      .get(`api/photos?count=${count}&start=${start}`)
      .then(res => this.setState({ images: res.data }));
  }

  fecthImages = () => {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + count });
    axios
      .get(`api/photos?count=${count}&start=${start}`)
      .then(res => this.setState({ images: res.data }));
  };

  render() {
    console.log("estado de image =>", this.state);
    return (
      <InfiniteScroll
        dataLength={this.state.images.length}
        next={this.fecthImages}
        hasMore={true}
        loader={<h4> cargando...</h4>}
      >
        {this.state.images.map(imagen => (
          <img key={imagen.id} src={imagen} alt="" />
        ))}
      </InfiniteScroll>
    );
  }
}

export default Image;
