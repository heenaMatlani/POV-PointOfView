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


  let views = "12"

  let age = "13"
  return (
    <div className='search'>
      <Header/>
      <div className="search__content">
      {videos.map(video => (
          <Link key={video[0]} className='search__link' to="/video">
            <HorizontalCard className="search__card"
              video={video[2]}
              thumbnail={video[3]}
              channel={video[9]}
              title={video[6]}
              channelName = {video[8]}
                                    views = {video[11]}
                                    age = {video[10]}
              channelDescription={video[5]}
            />
          </Link>
        ))}
        </div>
    </div>
  )
}

export default SearchPage
