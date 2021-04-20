import React, { Component } from "react";
import GlassItem from "./GlassItem";

class GlassList extends Component {
  render() {
    const { glassList, handleChoiceGlass } = this.props;
    return (
      <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
        {glassList.map((item, index) => {
          return (
            <GlassItem item={item} handleChoiceGlass={handleChoiceGlass} />
          );
        })}
      </section>
    );
  }
}

export default GlassList;
