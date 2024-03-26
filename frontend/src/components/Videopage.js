import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./Videopage.css";
import HorizontalCard from "./HorizontalCard";
import thumbnail from '../assets/thumbnail.png'

function Video() {
  const { videoId, videoUrl } = useParams();
  const decodedVideoUrl = decodeURIComponent(videoUrl);
  let title = "Go ferrari and particularly carlos! 🏎️"
  let cn = "Aaj Tak"
  let views = "12"
  let age = "12"
  return (
    <div className="video">
      <Header />
     <div className="video__information">
     <div className="video__main">
        {decodedVideoUrl && (
          <div className="video__player">
            <video className="video__play" controls width='100%'>
              <source src={decodedVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <div className="video__description">
          

        </div>
      </div>
      <div className="video__sideRecom">
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      <HorizontalCard
              video=""
              thumbnail={thumbnail}
              channel={'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'}
              title={title}
              channelName = {cn}
              views = {views}
              age={age}
              channelDescription=""
            />
      </div>
     </div>
    </div>
  );
}

export default Video;
