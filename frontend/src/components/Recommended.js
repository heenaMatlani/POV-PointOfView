import React from "react";
import "./Recommended.css";
import thumbnail from "../assets/thumbnail.png";
import Card from "./Card.js";
import { Link } from "react-router-dom";

function Recommended() {
  let channel =
    "https://heena0708.s3.ap-south-1.amazonaws.com/icons/ABPNews.jpeg";
  let d =
    "Some quick example text to build on the card title and make up the bulk of the card content.";

  let vid = "https://www.youtube.com/watch?v=sjLDT-hLkFQ";
    return (
    <div className="recommended">
      <div className="container text-center">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to ="/video"><Card className="recommended-card" video={vid} thumbnail={thumbnail} channel={channel} description={d}/></Link>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default Recommended;
