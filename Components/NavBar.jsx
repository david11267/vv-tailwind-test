import { useWindowSize } from "../hooks/useWindowSize";
import Icon from "./Icon";
import useCollapse from "react-collapsed";
import { useModalContext } from "./ModalContextProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MENU_BREAKPOINT = 1000;

export default function NavBar() {
  const router = useRouter();
  const { setIsOpen } = useModalContext();
  const { getCollapseProps, getToggleProps, isExpanded, setExpanded } = useCollapse();
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > MENU_BREAKPOINT) {
      setExpanded(false);
    }
  }, [size.width]);

  const handleNavigate = (id) => {
    setIsOpen(false);

    setTimeout(() => {
      document.querySelector("#" + id).scrollIntoView();
    }, 20);
  };

  return (
    <div className="p-8 max-w-7xl m-auto">
      <div className="flex mt-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          onClick={() => router.push("/")}
          className="cursor-pointer sm:h-20 md:h-15 lg:h-15 xl:h-20 2xl:h-20 h-14"
          src="https://hypermedia.varmeverket.com/logo.svg"
          alt="värmeverket"
        />
        {size.width > MENU_BREAKPOINT ? (
          <ul className="text-lg ml-auto flex items-center justify-between gap-16">
            <li className="whitespace-nowrap cursor-pointer">
              <a onClick={() => setIsOpen(true)}>APPLY NOW</a>
            </li>
            <li className="whitespace-nowrap cursor-pointer">
              <a onClick={() => handleNavigate("spaces")} href="#spaces">
                SPACES
              </a>
            </li>
            <li className="whitespace-nowrap cursor-pointer">
              <a onClick={() => handleNavigate("community")} href="#community">
                COMMUNITY
              </a>
            </li>
            <li className="whitespace-nowrap cursor-pointer">
              <a onClick={() => handleNavigate("contact")} href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        ) : (
          <div
            className="header ml-auto underline text-xl place-self-end self-center"
            onMouseDown={() => !isExpanded && setIsOpen(false)}
            {...getToggleProps()}>
            {isExpanded ? "CLOSE" : "MENU"}
          </div>
        )}
      </div>
      <div {...getCollapseProps()} className="col-span-2">
        <div className="content text-left mt-24 mb-12 ">
          <ul className="font-GtAmericaExpandedBlack text-4xl ">
            <li className="mb-8">
              <a className="cursor-pointer hover:underline" {...getToggleProps()} onMouseDown={() => setIsOpen(true)}>
                APPLY
              </a>
            </li>
            <li className="mb-8">
              <a className="cursor-pointer hover:underline" href="#community">
                COMMUNITY
              </a>
            </li>
            <li className="mb-8">
              <a className="cursor-pointer hover:underline" href="#spaces">
                SPACES
              </a>
            </li>
            <li className="mb-8">
              <a className="cursor-pointer hover:underline" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
          <div>
            <a href="tel:+46 72 123 45 67"> +46 72 123 45 67</a>
            <br />
            <a href="mailto: booking@varmeverket.com">booking@varmeverket.com</a>
          </div>
        </div>
        <div className="flex space-x-4 underline text-sm">
          <a>TWITTER</a>
          <a>INSTAGRAM</a>
          <a>FACEBOOK</a>
          <a>TIKTOK</a>
        </div>
      </div>
    </div>
  );
}
