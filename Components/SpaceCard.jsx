import React, { Component } from "react";

export default class SpaceCard extends Component {
  render() {
    return (
      <div className="block h-fit w-fit border border-white bg-red-600">
        <div>
          <span>#001</span>
          <div>
            <h2 className="text-center w-full align-middle">h2</h2>
            <p>VerketVerket</p>
            <p>sum text</p>
          </div>
        </div>
      </div>
    );
  }
}
