import React from "react";
import "../components/LikedVideos.css";
import Header from "../components/Header"
import { Link } from "react-router-dom";
import Card from "../components/Card";
import thumbnail from "../assets/thumbnail.png";

function Sports() {
  let title = "Samay Raina's Insane Miss | COB: Homecoming | Samay vs Tracy";
  let cn = "Aaj Tak";
  let views = "12";
  let age = "11 months ago";
  let videoId = 31;
  return (
    <div className="likedVideos">
      <Header/>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to="/video/31">
              <Card
                video=""
                thumbnail={thumbnail}
                channel={
                  "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
                }
                title={title}
                channelName={cn}
                views={views}
                age={age}
              />
            </Link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to="/video/31">
              <Card
                video=""
                thumbnail={thumbnail}
                channel={
                  "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
                }
                title={title}
                channelName={cn}
                views={views}
                age={age}
              />
            </Link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to="/video/31">
              <Card
                video=""
                thumbnail={thumbnail}
                channel={
                  "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
                }
                title={title}
                channelName={cn}
                views={views}
                age={age}
              />
            </Link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to="/video/31">
              <Card
                video=""
                thumbnail={thumbnail}
                channel={
                  "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
                }
                title={title}
                channelName={cn}
                views={views}
                age={age}
              />
            </Link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to="/video/31">
              <Card
                video=""
                thumbnail={thumbnail}
                channel={
                  "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
                }
                title={title}
                channelName={cn}
                views={views}
                age={age}
              />
            </Link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to="/video/31">
              <Card
                video=""
                thumbnail={thumbnail}
                channel={
                  "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
                }
                title={title}
                channelName={cn}
                views={views}
                age={age}
              />
            </Link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to="/video/31">
              <Card
                video=""
                thumbnail={thumbnail}
                channel={
                  "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
                }
                title={title}
                channelName={cn}
                views={views}
                age={age}
              />
            </Link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <Link className="video-link" to="/video/31">
              <Card
                video=""
                thumbnail={thumbnail}
                channel={
                  "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
                }
                title={title}
                channelName={cn}
                views={views}
                age={age}
              />
            </Link>
          </div>
        </div>
        
         
      </div>
    </div>
  );
}

export default Sports;
