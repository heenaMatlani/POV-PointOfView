import React, { useState, useEffect }  from 'react'
import './SearchPage.css'
import thumbnail from "../assets/thumbnail.png";
import Header from './Header'
import HorizontalCard from './HorizontalCard'
import { Link, useLocation  } from 'react-router-dom';
function SearchPage() {

    const [videos, setVideos] = useState([]);

    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchQuery = searchParams.get('query');

        if (searchQuery) {
            fetch(`/searched?query=${searchQuery}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => console.error('Error:', error));
        }
    }, [location.search]);


    let channel =
    "https://heena0708.s3.ap-south-1.amazonaws.com/icons/ABPNews.jpeg";

  let views = "12"

  let age = "13"

  let cn="ABP News"
  return (
    <div className='search'>
      <Header/>
      <div className="search__content">
      {videos.map(video => (
          <Link key={video[0]} className='search__link' to="/video">
            <HorizontalCard
              video={video[2]}
              thumbnail={video[3]}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={video[6]}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription={video[5]}
            />
          </Link>
        ))}
        </div>
    </div>
  )
}

export default SearchPage
