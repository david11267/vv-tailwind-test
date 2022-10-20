import React, { useState, useEffect, Component } from "react";
import Icon from "./Icon";

export default class NavBar extends Component {
  render() {

    function fullNavBar() {
      return (
        <ul className="mt-7 flex space-x-4">
          <li>
            <a href="">APPLY NOW</a>
          </li>
          <li>
            <a href="spaces">SPACES</a>
          </li>
          <li>
            <a href="community">COMMUNITY</a>
          </li>
          <li>
            <a href="contact">CONTACT</a>
          </li>
        </ul>
      )
    }
    function mobileNavBar() {
      return (
        <a className="flex m-10 text-2xl underline" href="">MENU</a>)
    }
    window

    return (
      <div className=" ">
        <div className="border">
          <div className=" flex justify-between mb-80">
            <Icon className="h-20" src="https://hypermedia.varmeverket.com/logo.svg" alt="logo" />

            <div>
              {fullNavBar()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
