import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import "./Videopage.css";
import SideCard from "./SideCard";
import Comment from "./Comment";
import axios from "axios";

function Video() {
  const { videoId } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        console.log("Fetching video details...");
        const response = await axios.get(`/video/${videoId}`);
        console.log(response.data)
        setVideoData(response.data);
        setLiked(response.data[3]);
        console.log(response.data[3]);
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
      const response = await axios.post("/submit-comment", {
        videoId,
        comment,
      });
      setCommentsList(response.data);
      setCommentCount(response.data.length);
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
      } else {
        setLiked(false);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

    const handleSideVideoClick = async (videoId) => {
      try {
    const response = await axios.get(`/video/${videoId}`);
    setVideoData(response.data);
    setLiked(response.data[3]);
    setCommentsList(response.data[4]);
    setCommentCount(response.data[4].length);
  } catch (error) {
    console.error("Error fetching video details:", error);
  }
  };


  return (
    <div className="video">
      {videoData && videoData.length > 0 && (
        <>
          <Header />
          <div className="video__information">
            <div className="video__main">
              <div className="video__player">
                <video  key={videoData[0][2]} className="video__play" controls width="100%" autoPlay>
                  <source src={videoData[0][2]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="video__description">
                <p className="video__title">{videoData[0][6]}</p>
                <div className="vcard__details">
                <Link to={`/channels/${videoData[0][10]}`} className="visit__button">
                  <img
                    src={videoData[0][9]}
                    className="video__channel"
                    alt="channel"
                  />
                  </Link>
                  <div className="video__cn">
                  <p className="video__channelName">{videoData[0][8]}</p>
                  </div>
                  <button
                    className={`btn video__likebutton hcard__details ${
                      liked ? "liked" : ""
                    }`}
                    onClick={handleLikeClick}
                  >
                    <i className="fa fa-thumbs-up video__icon"></i>
                    <p className="video__likeCount">
                      {liked ? videoData[6] + 1 : videoData[6]}
                    </p>
                  </button>
                </div>
                <div className="video__grey">
                  <div className="video__details">
                    <p className="video__views">{videoData[2]} lakh views •</p>
                    <p className="video__age">{videoData[1]}</p>
                  </div>
                  <p className="video__channelDescription">
                    {showFullDescription
                      ? videoData[0][5] + "\n\n\n\nPublished by " + videoData[0][8] + "\n"
                      : videoData[0][5].split("\n").slice(0, 3).join("\n")}
                    <span
                      className="video__showMore"
                      onClick={toggleDescription}
                    >
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
                    <button
                      className="btn comment__button"
                      onClick={handleCommentSubmit}
                    >
                      Comment
                    </button>
                  </div>
                </div>
                <div className="video__prevComments">
                  {commentsList.map((comment, index) => (
                    <Comment
                      key={index}
                      username={comment[2]}
                      commentVal={comment[0]}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="video__sideRecom">
              {videoData[5].map((recommendation, index) => (
                <div
                  key={index}
                  onClick={() => handleSideVideoClick(recommendation[0])} // Call handleSideVideoClick on click
                  className="video-link"
                >
                  <SideCard
                    video={recommendation[2]}
                    thumbnail={recommendation[3]}
                    channel={recommendation[9]}
                    title={recommendation[6]}
                    channelName={recommendation[8]}
                    views={recommendation[11]}
                    age={recommendation[10]}
                  />
                  </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Video;
