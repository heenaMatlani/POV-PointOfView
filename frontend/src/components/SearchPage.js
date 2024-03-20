import React from 'react'
import './SearchPage.css'
import thumbnail from "../assets/thumbnail.png";
import Header from './Header'
import HorizontalCard from './HorizontalCard'
import { Link } from 'react-router-dom';
function SearchPage() {
    let channel =
    "https://heena0708.s3.ap-south-1.amazonaws.com/icons/ABPNews.jpeg";
  let d =
    "Some quick example text to build on the card title and make up the bulk of the card content.";

  let vid = "https://www.youtube.com/watch?v=sjLDT-hLkFQ";

  let views = "12"

  let age = "13"

  let cn="ABP News"

  let cd="Buying and trying candy, snacks, makeup, hair products, clothing and more created by YOUTUBERS. Are they worth buying?!?"
  return (
    <div className='search'>
      <Header/>
      <div className="search__content">
      <Link className='search__link' to="/video"><HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} title={d} views={views} age={age} channelName={cn} channelDescription={cd}/></Link>
      <Link className='search__link' to="/video"><HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} title={d} views={views} age={age} channelName={cn} channelDescription={cd}/></Link>
      <Link className='search__link' to="/video"><HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} title={d} views={views} age={age} channelName={cn} channelDescription={cd}/></Link>
      <Link className='search__link' to="/video"><HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} title={d} views={views} age={age} channelName={cn} channelDescription={cd}/></Link>
      <Link className='search__link' to="/video"><HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} title={d} views={views} age={age} channelName={cn} channelDescription={cd}/></Link>
      <Link className='search__link' to="/video"><HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} title={d} views={views} age={age} channelName={cn} channelDescription={cd}/></Link>
      <Link className='search__link' to="/video"><HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} title={d} views={views} age={age} channelName={cn} channelDescription={cd}/></Link>
      <Link className='search__link' to="/video"><HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} title={d} views={views} age={age} channelName={cn} channelDescription={cd}/></Link>
      <Link className='search__link' to="/video"><HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} title={d} views={views} age={age} channelName={cn} channelDescription={cd}/></Link>
      </div>
    </div>
  )
}

export default SearchPage
