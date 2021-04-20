import React, { Component } from "react";
import Header from "./Header";
import Model from "./Model";
import GlassList from "./GlassList";

class GlassApp extends Component {
  state = {
    glassImg: {
      name: "GUCCI G8759H",
      imgSrc: "./img/glassesImage/v2.png",
      price: "$50",
    },
    listImage: [
      {
        name: "GUCCI G8850U",
        imgSrc: "./img/glassesImage/v1.png",
        price: "$30",
      },
      {
        name: "GUCCI G8759H",
        imgSrc: "./img/glassesImage/v2.png",
        price: "$50",
      },
      {
        name: "DIOR D6700HQ",
        imgSrc: "./img/glassesImage/v3.png",
        price: "$30",
      },
      {
        name: "DIOR D6005U",
        imgSrc: "./img/glassesImage/v4.png",
        price: "$30",
      },
      {
        name: "PRADA P8750",
        imgSrc: "./img/glassesImage/v5.png",
        price: "$30",
      },
      {
        name: "PRADA P9700",
        imgSrc: "./img/glassesImage/v6.png",
        price: "$30",
      },
      {
        name: "FENDI F8750",
        imgSrc: "./img/glassesImage/v7.png",
        price: "$30",
      },
      {
        name: "FENDI F8500",
        imgSrc: "./img/glassesImage/v8.png",
        price: "$30",
      },
      {
        name: "FENDI F4300",
        imgSrc: "./img/glassesImage/v9.png",
        price: "$30",
      },
    ],
  };
  handleChoiceGlass = (glassItem) => {
    this.setState({ glassImg: glassItem });
  };
  render() {
    return (
      <div className="glass-app bg-dark" style={{ height: "100vh" }}>
        <Header />
        <div className="d-flex justify-content-center align-items-center">
          <div className="container row">
            <Model glassImg={this.state.glassImg} />
            <GlassList
              glassList={this.state.listImage}
              handleChoiceGlass={this.handleChoiceGlass}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GlassApp;
