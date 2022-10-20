import React, { useState, useEffect, Component } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import Icon from "./Icon";

function FullNavBar() {
  return (
    <ul className=" font mt-7 flex space-x-4">
      <li>
        <a className="" href="">
          APPLY NOW
        </a>
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
  );
}
function MobileNavBar() {
  return (
    <a className="flex m-10 text-2xl underline" href="">
      MENU
    </a>
  );
}

export default function NavBar() {
  const size = useWindowSize();

  return (
    <div className=" ">
      <div className="border">
        <div className=" flex justify-between mb-80">
          <Icon className="h-20" src="https://hypermedia.varmeverket.com/logo.svg" alt="logo" />
          <div className="mr-8">{size.width > 1000 ? <FullNavBar /> : <MobileNavBar />}</div>
        </div>
      </div>
    </div>
  );
}
