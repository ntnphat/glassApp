import React, { Component } from "react";

class GlassItem extends Component {
  render() {
    const { item, handleChoiceGlass } = this.props;
    return (
      <div className="col-3">
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            handleChoiceGlass(item);
          }}
        >
          <img src={item.imgSrc} style={{ width: 100, borderRadius: 20 }} />
        </button>
      </div>
    );
  }
}

export default GlassItem;
