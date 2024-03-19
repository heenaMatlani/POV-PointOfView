import React from 'react'
import './SearchPage.css'
import thumbnail from "../assets/thumbnail.png";
import Header from './Header'
import HorizontalCard from './HorizontalCard'
function SearchPage() {
    let channel =
    "https://heena0708.s3.ap-south-1.amazonaws.com/icons/ABPNews.jpeg";
  let d =
    "Some quick example text to build on the card title and make up the bulk of the card content.";

  let vid = "https://www.youtube.com/watch?v=sjLDT-hLkFQ";
  return (
    <div>
      <Header/>
      <h1>searched me??</h1>
      <HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} description={d}/>
      <HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} description={d}/>
      <HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} description={d}/>
      <HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} description={d}/>
      <HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} description={d}/>
      <HorizontalCard video={vid} thumbnail={thumbnail} channel={channel} description={d}/>
      
    </div>
  )
}

export default SearchPage
