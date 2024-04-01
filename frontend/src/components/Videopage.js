import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./Videopage.css";
import thumbnail from "../assets/thumbnail.png";
import SideCard from "./SideCard";
import Comment from "./Comment";
import axios from "axios";

function Video() {
  const { videoId } = useParams();
  console.log(videoId);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [commentCount, setCommentCount] = useState(0); // Initial comment count
  const [liked, setLiked] = useState(false); // State for like button
  const [videoData, setVideoData] = useState([]);

useEffect(() => {
  console.log("Component rendered");
  console.log("videoId:", videoId);

  const fetchVideoDetails = async () => {
    try {
      console.log("Fetching video details...");
      const response = await axios.get(`/video/${videoId}`);
      console.log("Response:", response.data);
      setVideoData(response.data);
      setCommentsList(response.data[4]);
      setCommentCount(response.data[4].length);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  fetchVideoDetails();
}, [videoId]);



  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    try {
      await axios.post("/submit-comment", { videoId, comment });
      setCommentsList([...commentsList, comment]);
      setCommentCount(commentCount + 1);
      setComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handleLikeClick = async () => {
    try {
      const response = await axios.post("/toggle-like", { videoId });
      if (response.data.message.includes("added")) {
        setLiked(true);
        setVideoData({ ...videoData, like_count: videoData.like_count + 1 });
      } else {
        setLiked(false);
        setVideoData({ ...videoData, like_count: videoData.like_count - 1 });
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <div className="video">
      <Header />
      <div className="video__information">
        <div className="video__main">
            <div className="video__player">
            {videoData && videoData.length > 0 && (
              <video className="video__play" controls width="100%">
                <source src={videoData[0][2]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              )}
            </div>

          <div className="video__description">
            <p className="video__title">{videoData[0][6]}</p>
            <div className="hcard__details">
              <img
                src={videoData[0][9]}
                className="video__channel"
                alt="channel"
              />
              <p className="video__channelName">{videoData[0][8]}</p>
              <button className={`btn video__likebutton ${liked ? "liked" : ""}`} onClick={handleLikeClick}>
                <i className="fa fa-thumbs-up video__icon"></i>
              </button>
            </div>
            <div className="video__grey">
              <div className="video__details">
                <p className="video__views">{videoData[2]} lakh views •</p>
                <p className="video__age">{videoData[1]}</p>
              </div>
              <p className="video__channelDescription">
                {showFullDescription
                  ? videoData[0][5]
                  : videoData[0][5].split("\n").slice(0, 3).join("\n")}
                <span className="video__showMore" onClick={toggleDescription}>
                  ...{showFullDescription ? "Show less" : "more"}
                </span>
              </p>
            </div>
          </div>
          <div className="video__comments">
            <p className="video__commentHead">{commentCount} Comments</p>
            <div className="video__addComment">
              <div className="comment__icon">
                <i className="bi bi-person-circle video__icon"></i>
              </div>
              <div>
                <div className="comment__text">
                  <input
                    type="text"
                    className="video__comment"
                    placeholder="Add Comment"
                    value={comment}
                    onChange={handleCommentChange}
                  />
                </div>
                <button className="btn comment__button" onClick={handleCommentSubmit}>
                  Comment
                </button>
              </div>
            </div>
            <div className="video__prevComments">
              {commentsList.map((comment, index) => (
                <Comment key={index} username="Aarushi" commentVal={comment} />
              ))}
            </div>
          </div>
        </div>

        <div className="video__sideRecom">
          {videoData[5].map((recommendation, index) => (
            <SideCard
              key={index}
              video={recommendation[2]}
              thumbnail={recommendation[3]}
              channel={recommendation[9]}
              title={recommendation[6]}
              channelName={recommendation[8]}
              views={recommendation[11]}
              age={recommendation[10]}
              channelDescription={recommendation[5]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Video;
