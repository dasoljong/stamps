import React, { Component } from "react";
import "./Main.scss";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      min: 0,
      max: 4,
      colors: ["transparent", "transparent", "transparent", "transparent"],
    };

    this.changeColor = (number) => {
      const colors = [
          "transparent",
          "transparent",
          "transparent",
          "transparent",
        ],
        _changeColor = ["black", "black", "black", "red"];
      for (let i = 0; i < colors.length; ++i)
        if (number >= i + 1) colors[i] = _changeColor[i];
      return colors;
    };

    this.handlePlus = () => {
      let number = this.state.number;
      if (number + 1 <= this.state.max) ++number;
      const colors = this.changeColor(number);
      this.setState({ number, colors });
    };

    this.handleMinus = () => {
      let number = this.state.number;
      if (number - 1 >= this.state.min) --number;
      const colors = this.changeColor(number);
      this.setState({ number, colors });
    };
  }

  render() {
    return (
      <div className="Main">
        <div className="buttonWrapper">
          <div className="cart">장바구니</div>
          <div>
            <div className="totalNum">상품 개수: {this.state.number}</div>
          </div>
          <input
            type="button"
            className="minusBtn"
            onClick={this.handleMinus}
            defaultValue="-"
          />
          <input
            type="button"
            className="plusBtn"
            onClick={this.handlePlus}
            defaultValue="+"
          />
        </div>
        <ul className="emptyStamps">
          {(() => {
            let list = [];
            const colors = this.state.colors;
            for (let i = 0; i < colors.length; ++i)
              list.push(
                <li style={{ backgroundColor: colors[i] }}>{i + 1}</li>
              );
            return list;
          })()}
        </ul>
      </div>
    );
  }
}
