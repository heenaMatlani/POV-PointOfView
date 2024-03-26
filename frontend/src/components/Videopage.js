import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./Videopage.css";
import thumbnail from "../assets/thumbnail.png";
import SideCard from "./SideCard";

function Video() {
  const { videoId, videoUrl } = useParams();
  const decodedVideoUrl = decodeURIComponent(videoUrl);
  let title = "Go ferrari and particularly carlos!";
  let cn = "Aaj Tak";
  let views = "12";
  let age = "11 months ago";
  return (
    <div className="video">
      <Header />
      <div className="video__information">
        <div className="video__main">
          {decodedVideoUrl && (
            <div className="video__player">
              <video className="video__play" controls width="100%">
                <source src={decodedVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          <div className="video__description">
            <p className="video__title">{title}</p>
            <div className="hcard__details">
              <img
                src="https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
                className="video__channel"
                alt="channel"
              />
              <p className="video__channelName">{cn}</p>
            </div>
            <div className="video__grey">
            <div className="video__details">
              <p className="video__views">{11} lakh views •</p>
              <p className="video__age">{11} months ago</p>
            </div>
            <p className="video__channelDescription">
            DEVIN AI : The Killer of Software Engineers

Subscribe For More Such Content:
https://www.youtube.com/@aayan_gzi/

-----------------------------------------------------------------------------------------
Connect With Me On:
https://www.linkedin.com/in/mohd-aaya...
https://www.instagram.com/aayan_gzi
-----------------------------------------------------------------------------------------

THANKS FOR WATCHING 😊

-----------------------------------------------------------------------------------------
Hi, I am Aayan.
I am a Computer Science💻 Student at @Christ.
I love to Code and Create Videos .
Actually I enjoy filmmaking📽️.

This Channel is dedicated to:
Coding, Informative Podcasts🎙️and Little Bit Vlogs.

Subscribe!!!
-----------------------------------------------------------------------------------------

✨ Hashtags ✨
#devinai #aitools #softwareengineer #cognition #softwaredeveloper #ai #computerscience #coding #programming #placement #btech #bca #promptengineering #jobs
            </p>
            </div>
          </div>
        </div>

        <div className="video__sideRecom">
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
          <SideCard
            video=""
            thumbnail={thumbnail}
            channel={
              "https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg"
            }
            title={title}
            channelName={cn}
            views={views}
            age={age}
            channelDescription=""
          />
        </div>
      </div>
    </div>
  );
}

export default Video;
