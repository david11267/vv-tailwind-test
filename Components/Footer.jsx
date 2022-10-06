import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
            <p>Contact</p>
            <h2>Keep in touch</h2>
            <p>Start a conversation</p>
            <a>
                <p>Info@varmeverket.com</p>
            </a>
            <div className='flex flex-row'>
                <div className='basis-1/2'>
                    <p>Our office</p>
                    <p>Stockholm</p>
                    <p>Bredängsvägen 203
                    127 34 Skärholmen
                    Stockholm</p>
                    <p>Our policy</p>
                    <p>Terms of service</p>
                </div>
                <div className='basis-1/2'> <p>Our socials</p>
                    <p>LinkedIn</p>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
      </footer>
    )
  }
}
