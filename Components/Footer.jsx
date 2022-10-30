import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="text-black bg-white md:pt-8 pt-4 pb-32">
        <div className="max-w-7xl m-auto mt-8 p-4">
          <p id="contact" className="mb-8 font-semibold">
            CONTACT
          </p>
          <h1 className="md:text-7xl text-5xl mb-6">
            <span>KEEP.IN.</span>
            <span className="font-bold">TOUCH.</span>
          </h1>
          <p className="mb-12 md:text-md">Start a conversation</p>
          <h1 className="mb-12 md:text-4xl">
            <a href="mailto:info@varmeverket.com">info@varmeverket.com</a>
          </h1>
          <div className="flex pb-12">
            <div className="mr-20 md:mr-28 2xl:mr-40">
              <h2 className="md:text-2xl mb-6">Our office</h2>
              <h1 className="md:text-4xl mb-2">Stockholm</h1>
              <p className="md:text-md">Bredängsvägen 203</p>
              <p className="md:text-md">12734 Skärholmen</p>
              <p className="md:text-md mb-12"> Stockholm </p>
              <h2 className="md:text-md mb-8 ">OUR POLICY</h2>
              <a className="underline md:text-md">TERMS OF SERVICE</a>
            </div>
            <div>
              <h2 className="text-2xl mb-6">Our socials</h2>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="underline text-2xl"
              >
                LinkedIn
              </a>
              <br />
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="underline text-2xl"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
