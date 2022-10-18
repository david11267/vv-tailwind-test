import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className=''>
        <div className=' bg-white text-black'>
            <p className='font-bold'>Contact</p>
            <div className='flex mt-8 mb-8'>
            <h2 className='text-6xl'>Keep in touch</h2>
            <img className='filter invert w-20 ml-2' src="https://hypermedia.varmeverket.com/logo.svg" alt="logo" />
            </div>
            
            <p className='text-sm'>Start a conversation</p>
            <a className='underline text-3xl' href="mailto:info@varmeverket.com">
                <p>Info@varmeverket.com</p>
            </a>
            <div className='flex flex-row'>
                <div className='basis-1/2'>
                    <p className='text-sm font-bold'>Our office</p>
                    <p className='text-4xl'>Stockholm</p>
                    <p >Bredängsvägen 203
                    127 34 Skärholmen
                    Stockholm</p>
                    <p>Our policy</p>
                    <p>Terms of service</p>
                </div>
                <div className='basis-1/2'> 
                    <p className='text-sm font-bold'>Our socials</p>
                    <a className='underline text-3xl' href='https://www.linkedin.com/company/varmeverket/about/'>
                        <p>LinkedIn</p>
                    </a>
                    <a className='underline text-3xl' href='https://www.instagram.com/varmeverket/'>
                        <p>
                           Instagram 
                        </p>
                    </a>
                </div>
            </div>
        </div>
      </footer>
    )
  }
}
