import React, { Component } from 'react'
import Icon from './Icon'

export default class NavBar extends Component {
  render() {
    return (
      <div className='flex justify-between'>
            <Icon className="h-20 " src="https://hypermedia.varmeverket.com/logo.svg" alt="logo"/>
            <div>
                <ul className='mt-7 flex space-x-4'>
                    <li><a href="">APPLY NOW</a></li>
                    <li><a href="spaces">SPACES</a></li>
                    <li><a href="community">COMMUNITY</a></li>
                    <li><a href="contact">CONTACT</a></li>
                </ul>
            </div>
      </div>
    )
  }
}
