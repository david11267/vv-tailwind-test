import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import Icon from "./Icon";
import useCollapse from "react-collapsed";

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
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible text-right">
      <div className="header underline text-xl" {...getToggleProps()}>
        {isExpanded ? "CLOSE" : "MENU"}
      </div>
      <div {...getCollapseProps()}>
        <div className="content text-left mt-24 mb-12 ">
          <ul className="font-GtAmericaExpandedBlack text-4xl ">
            <li className="mb-8 hover:underline">
              <a href="">APPLY</a>
            </li>
            <li className="mb-8 hover:underline">
              <a href="">COMMUNITY</a>
            </li>
            <li className="mb-8 hover:underline">
              <a href="">SPACES</a>
            </li>
            <li className="mb-8 hover:underline">
              <a href="">CONTACT</a>
            </li>
          </ul>
          <div>
            <a href="tel:+46 72 123 45 67"> +46 72 123 45 67</a>
            <br />
            <a href="mailto: booking@varmeverket.com">
              booking@varmeverket.com
            </a>
          </div>
        </div>
        <div className="flex space-x-4 underline">
          <a>TWITTER</a>
          <a>INSTAGRAM</a>
          <a>FACEBOOK</a>
          <a>TIKTOK</a>
        </div>
      </div>
    </div>
  );
}

export default function NavBar() {
  const size = useWindowSize();

  return (
    <div className="p-8 max-w-7xl m-auto">
      <div className="flex items-center justify-between mt-4">
        <Icon
          className="sm:h-20 md:h-15 lg:h-15 xl:h-20 2xl:h-20 h-14"
          src="https://hypermedia.varmeverket.com/logo.svg"
          alt="logo"
        />
        <div className="-mt-12">
          {size.width > 1000 ? <FullNavBar /> : <MobileNavBar />}
        </div>
      </div>
    </div>
  );
}
