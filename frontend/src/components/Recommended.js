import React from "react";
import "./Recommended.css";
import thumbnail from "../assets/thumbnail.png";
import channel from "../assets/channel.png";

function Recommended() {
  return (
    <div className="recommended">
      <div className="container text-center">
        <div className="row">
          {/* First Row */}
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={thumbnail} className="card-img-top menuu" alt="ima" />
              <div className="card-body">
                <img src={channel} className="channel" alt="channel" />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={thumbnail} className="card-img-top menuu" alt="ima" />
              <div className="card-body">
                <img src={channel} className="channel" alt="channel" />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={thumbnail} className="card-img-top menuu" alt="ima" />
              <div className="card-body">
                <img src={channel} className="channel" alt="channel" />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={thumbnail} className="card-img-top menuu" alt="ima" />
              <div className="card-body">
                <img src={channel} className="channel" alt="channel" />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={thumbnail} className="card-img-top menuu" alt="ima" />
              <div className="card-body">
                <img src={channel} className="channel" alt="channel" />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={thumbnail} className="card-img-top menuu" alt="ima" />
              <div className="card-body">
                <img src={channel} className="channel" alt="channel" />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          {/* Second Row */}
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={thumbnail} className="card-img-top menuu" alt="ima" />
              <div className="card-body">
                <img src={channel} className="channel" alt="channel" />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={thumbnail} className="card-img-top menuu" alt="ima" />
              <div className="card-body">
                <img src={channel} className="channel" alt="channel" />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={thumbnail} className="card-img-top menuu" alt="ima" />
              <div className="card-body">
                <img src={channel} className="channel" alt="channel" />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
