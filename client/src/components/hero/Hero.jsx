import React, { Component } from "react";

export class Hero extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-5">
          Desafio Unsplash Scroll Infinito{" "}
        </h1>
        <p className="lead">
          Galeria de imagenes con scroll infinito usando
          Node.js, React y Unsplash API.
        </p>
        <hr className="my-4" />
        <p>Este es un desafio de Scotch.io</p>
        <p className="lead">
          <a
            className="btn btn-primary btn-lg"
            href="#"
            role="button"
          >
            Visitar pagina del desafio
          </a>
        </p>
      </div>
    );
  }
}

export default Hero;
