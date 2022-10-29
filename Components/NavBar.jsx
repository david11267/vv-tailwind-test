import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import Icon from "./Icon";

function FullNavBar() {
  return (
    <ul className="font mt-7 flex gap-16">
      <li>
        <a className="#modalForm" href="">
          APPLY NOW
        </a>
      </li>
      <li>
        <a href="#spaces">SPACES</a>
      </li>
      <li>
        <a href="#community">COMMUNITY</a>
      </li>
      <li>
        <a href="#contact">CONTACT</a>
      </li>
    </ul>
  );
}
function MobileNavBar() {
  return (
    <a className="flex mt-2 underline" href="">
      MENU
    </a>
  );
}

export default function NavBar() {
  const size = useWindowSize();

  return (
    <div className="p-8 m-auto">
      <div className="max-w-7xl m-auto flex justify-between mt-4">
        <Icon
          className="sm:h-20 md:h-15 lg:h-15 xl:h-20 2xl:h-20 h-14"
          src="https://hypermedia.varmeverket.com/logo.svg"
          alt="logo"
        />
        <div>{size.width > 1000 ? <FullNavBar /> : <MobileNavBar />}</div>
      </div>
    </div>
  );
}
