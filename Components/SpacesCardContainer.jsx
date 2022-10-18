import React, { Component } from 'react'
import HeroText from './HeroText'
import SpaceCard from './SpaceCard'
export default class SpacesCardContainer extends Component {
  render() {
    return (
      <div>
        <div className='text-5xl mb-20'>
            <span>Our.</span><br/><span className='font-bold'>Spaces.</span>
        </div>
        <div className='flex justify-center'>        
             <div className="flex justify-center flex-wrap mb-80 max-w-4xl">
        <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
        <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
        <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
        <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
        <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
        <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
        <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
        <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
        <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
        <SpaceCard indexNr="#001" bigHeader="VV" littleHeader="Värmeverket" tinyText="template" />
        </div>
        </div>
      </div>
    )
  }
}
