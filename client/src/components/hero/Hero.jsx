import React, { Component } from "react";
import PropTypes from "prop-types";

export class Hero extends Component {
  static propTypes = {};

  render() {
    return (
      <div class="jumbotron">
        <h1 class="display-5">Desafio Unsplash Scroll Infinito </h1>
        <p class="lead">
          Galeria de imagenes con scroll infinito usando Node.js, React y
          Unsplash API.
        </p>
        <hr class="my-4" />
        <p>Este es un desafio de Scotch.io</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Visitar pagina del desafio
          </a>
        </p>
      </div>
    );
  }
}

export default Hero;
