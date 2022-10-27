import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className=' text-black bg-white '>
        <div className='mt-8 sm:ml-20 ml-4'>
          <div>
            <p id="contact" className='mb-4 ' >Contact</p>
            <h1 className="md:text-7xl xl:text-9xl mb-12">
              <span>KEEP.IN.</span><span className="font-bold">TOUCH.</span>
            </h1>
            <p className='mb-12 md:2xl 2xl:text-4xl'>Start a conversation</p>
            <h1 className='mb-12 md:text-4xl 2xl:text-7xl'>
              <a href="mailto:info@varmeverket.com">info@varmeverket.com</a>
            </h1>

            <div className="flex pb-12">
              <div className="mr-20 md:mr-28 2xl:mr-40">
                <h2 className="md:text-2xl 2xl:text-5xl mb-4" >Our office</h2>
                <h1 className="md:text-4xl 2xl:text-7xl mb-4">Stockholm</h1>
                <p className="mb-4 md:text-md 2xl:text-4xl">
                  Bredängsvägen 203
                </p>
                <p className="mb-4 md:text-md 2xl:text-4xl">
                  12734 Skärholmen
                </p>
                <p className="mb-12"> Stockholm </p>
                <h2 className="md:text-md 2xl:text-3xl mb-8 font-GtAmericaMono">OUR POLICY</h2>
                <a className='underline md:text-md 2xl:text-4xl font-semibold'>TERMS OF SERVICE</a>
              </div>

              <div>
                <div className="md:mt-32 2xl:mt-20">
                  <h2 className=" md:text-2xl 2xl:text-5xl mb-20" >Our Socials</h2>
                  <a className="underline md:text-3xl 2xl:text-5xl">LinkedIn</a>
                  <br />
                  <a className="underline md:text-3xl 2xl:text-5xl">Instagram</a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </footer>
    )
  }
}
