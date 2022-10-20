import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className=' text-black bg-white flex justify-center'>
        <div className='mt-8 w-2/4'>
          <div>
            <p className='mb-4' >Contact</p>
            <h1>
              <span>KEEP.IN.</span><span>TOUCH.</span>
            </h1>
            <p className='mb-4'>Start a conversation</p>
            <h1 className='mb-4'>
              <a href="mailto:info@varmeverket.com">info@varmeverket.com</a>
            </h1>

            <div className="flex">
              <div className="mr-40">
                <h2 className="text-2xl mb-4" >Our office</h2>
                <h1>Stockholm</h1>
                <p className="mb-4">
                  Bredängsvägen 203 <br />
                  12734 Skärholmen <br />
                  Stockholm <br />
                </p>
                <h3 className="text-xl mb-4">OUR POLICY</h3>
                <a className='underline font-semibold'>TERMS OF SERVICE</a>
              </div>

              <div>
                <div className="align-middle">
                  <h2 className="text-2xl mb-4" >Our Socials</h2>
                  <a className="underline text-2xl">LinkedIn</a>
                  <br />
                  <a className="underline text-2xl">Instagram</a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </footer>
    )
  }
}
