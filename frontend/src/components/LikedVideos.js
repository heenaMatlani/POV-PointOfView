import React from "react";
import "./LikedVideos.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import Card from "./Card.js";
import thumbnail from "../assets/thumbnail.png";

function LikedVideos() {
  let title = "Samay Raina's Insane Miss | COB: Homecoming | Samay vs Tracy";
  let cn = "Aaj Tak";
  let views = "12";
  let age = "11 months ago";
  return (
    <>
      <Header />
      <div className="recommended">
        <div className="container text-center">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <Link className="video-link" to="/video/31">
                <Card
                  className="recommended-card"
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
              <Link className="video-link" to="/video/31">
                <Card
                  className="recommended-card"
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
              <Link className="video-link" to="/video/31">
                <Card
                  className="recommended-card"
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
              <Link className="video-link" to="/video/31">
                <Card
                  className="recommended-card"
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
              <Link className="video-link" to="/video/31">
                <Card
                  className="recommended-card"
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
    </>
  );
}

export default LikedVideos;
