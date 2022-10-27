import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className=' text-black bg-white '>
        <div className='mt-8 ml-20'>
          <div>
            <p id="contact" className='mb-4 ' >Contact</p>
            <h1 className="text-9xl mb-12">
              <span>KEEP.IN.</span><span className="font-bold">TOUCH.</span>
            </h1>
            <p className='mb-12 text-4xl'>Start a conversation</p>
            <h1 className='mb-12 text-7xl'>
              <a href="mailto:info@varmeverket.com">info@varmeverket.com</a>
            </h1>

            <div className="flex pb-12">
              <div className="mr-40">
                <h2 className="text-5xl mb-4" >Our office</h2>
                <h1 className="text-7xl mb-4">Stockholm</h1>
                <p className="mb-4 text-4xl">
                  Bredängsvägen 203
                </p>
                <p className="mb-4 text-4xl">
                  12734 Skärholmen
                </p>
                <p className="mb-12 text-4xl"> Stockholm </p>
                <h3 className="text-3xl mb-4 font-GtAmericaMono">OUR POLICY</h3>
                <a className='underline text-4xl font-semibold'>TERMS OF SERVICE</a>
              </div>

              <div>
                <div className="mt-20">
                  <h2 className="text-5xl mb-20" >Our Socials</h2>
                  <a className="underline text-5xl">LinkedIn</a>
                  <br />
                  <a className="underline text-5xl">Instagram</a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </footer>
    )
  }
}
