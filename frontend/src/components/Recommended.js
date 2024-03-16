import React from "react";
import "./Recommended.css";
import thumbnail from "../assets/thumbnail.png";
import Card from "./Card";

function Recommended() {
  let channel =
    "https://heena0708.s3.ap-south-1.amazonaws.com/icons/ABPNews.jpeg";
  let d =
    "Some quick example text to build on the card title and make up the bulk of the card content.";
  return (
    <div className="recommended">
      <div className="container text-center">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card thumbnail={thumbnail} channel={channel} description={d} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card thumbnail={thumbnail} channel={channel} description={d} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card thumbnail={thumbnail} channel={channel} description={d} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card thumbnail={thumbnail} channel={channel} description={d} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card thumbnail={thumbnail} channel={channel} description={d} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card thumbnail={thumbnail} channel={channel} description={d} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card thumbnail={thumbnail} channel={channel} description={d} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card thumbnail={thumbnail} channel={channel} description={d} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card thumbnail={thumbnail} channel={channel} description={d} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card thumbnail={thumbnail} channel={channel} description={d} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card thumbnail={thumbnail} channel={channel} description={d} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card thumbnail={thumbnail} channel={channel} description={d} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
