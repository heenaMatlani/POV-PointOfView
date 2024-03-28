import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./Videopage.css";
import thumbnail from "../assets/thumbnail.png";
import SideCard from "./SideCard";
import Comment from "./Comment";

function Video() {
  const { videoId } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);
  let video_url = "https://heena0708.s3.ap-south-1.amazonaws.com/videos/9.mp4";
  let title = "Go ferrari and particularly carlos!";
  let cn = "Aaj Tak";
  let views = "12";
  let age = "11 months ago";
  let video_description = `Testing weirdly realistic SLIME FOOD cooking kits from GTCreations Slime shop that I found on tiktok.
Pls subscribe :)

Watch these videos NEXT!
Ranking VIRAL Slime textures:
  

 • Ranking VIRAL Tiktok Slime Textures  
I Bought RARE Viral Slime:
  

 • I Bought RARE Viral Slime  

Main channel:  @HopeScope  
  

 / @hopescope  

@HopeScope on INSTAGRAM
 

 / hopescope  

@HopeScope on Tiktok
 

 / hopescope  `;
  let comment_count = 232;
  let username = "Aarushi";
  let c = "When I watched Tracy for first time , I wrote she is Judith Polgar of COB and she proved my words to be true . Congratulations Tracy . But was rooting for most disciplined student who eventually never wins .";
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="video">
      <Header />
      <div className="video__information">
        <div className="video__main">
          {video_url && (
            <div className="video__player">
              <video className="video__play" controls width="100%">
                <source src={video_url} type="video/mp4" />
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
                {showFullDescription
                  ? video_description
                  : video_description.split("\n").slice(0, 3).join("\n")}
                <span className="video__showMore" onClick={toggleDescription}>
                  ...{showFullDescription ? "Show less" : "more"}
                </span>
              </p>
            </div>
          </div>
          <div className="video__comments">
            <p className="video__commentHead">{comment_count} Comments</p>
            <div className="video__addComment">
            <div className="comment__icon"><i class="bi bi-person-circle video__icon"></i></div>
            <div>
            <div className="comment__text"><input type="text" className="video__comment" placeholder="Add Comment"/></div>
            <button className="btn comment__button">Comment</button>
            </div>
            </div>
            <div className="video__prevComments">
              <Comment username = "Amritjot" commentVal = {c}/>
              <Comment username = "Heena" commentVal = "When I watched Tracy for first time."/>
              <Comment username = "Amritjot" commentVal = {c}/>
              <Comment username = "Aarushi" commentVal = "Interesting topic!"/>
              <Comment username = "Amritjot" commentVal = {c}/>
              <Comment username = "Heena" commentVal = {c}/>
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
        </div>
      </div>
    </div>
  );
}

export default Video;
