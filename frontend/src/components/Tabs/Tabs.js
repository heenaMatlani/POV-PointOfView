import React from "react";
import { tabLabels } from "./constant";
import { Link } from "react-router-dom";
import "./Tabs.css";
function Tabs({ activeTabName, onClickTab }) {
  const { CANCEL_AT_ANY_TIME, PRICE, WATCH_ANYWHERE } = tabLabels;

  const renderTabTitle = (tabTitle, isActive, icon, id) => (
    <div
      onClick={() => onClickTab(tabTitle)}
      id={id}
      className={`tab-item ${isActive && "tab-border"}`}
    >
      <i className={icon}></i>
      <p>{tabTitle}</p>
    </div>
  );

  return (
    <div className="tab">
      <section className="tabs">
        <div className="container tabs__container">
          {renderTabTitle(
            CANCEL_AT_ANY_TIME,
            activeTabName === CANCEL_AT_ANY_TIME,
            "fas fa-door-open fa-3x",
            "tab-1"
          )}
          {renderTabTitle(
            WATCH_ANYWHERE,
            activeTabName === WATCH_ANYWHERE,
            "fas fa-tablet-alt fa-3x",
            "tab-2"
          )}
          {renderTabTitle(
            PRICE,
            activeTabName === PRICE,
            "fas fa-tags fa-3x",
            "tab-3"
          )}
        </div>
      </section>

      {activeTabName === CANCEL_AT_ANY_TIME && (
        <section className="tab-content">
          <div className="container tabs__container">
            <div
              id="tab-1-content"
              className={`tab-content-item ${
                activeTabName === CANCEL_AT_ANY_TIME && "show"
              }`}
            >
              <div className="tab-1-content-inner">
                <div>
                  <p className="text-lg">
                    If you decide POV isn't for you - no problem. No
                    commitment. Cancel Online anytime.
                  </p>
                  <Link to="/payment" className="btn-t btn-lg">
                    Add Free For 30 Days
                  </Link>
                </div>
                <img
                  src="https://i.ibb.co/J2xDJV7/tab-content-1.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTabName === WATCH_ANYWHERE && (
        <section classname="tab-content">
          <div class="container tabs__container">
            <div
              id="tab-2-content"
              className={`tab-content-item ${
                activeTabName === WATCH_ANYWHERE && "show"
              }`}
            >
              <div className="tab-2-content-top">
                <p className="text-lg">
                  Watch TV shows and movies anytime, anywhere — personalized for
                  you.
                </p>
                <Link to="/payment" className="btn-t btn-lg">
                  Watch Free For 30 Days
                </Link>
              </div>
              <div className="tab-2-content-bottom">
                <div>
                  <img
                    src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"
                    alt=""
                  />
                  <p class="text-md">Watch on your TV</p>
                  <p class="text-sm">
                    Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                    players and more.
                  </p>
                </div>
                <div>
                  <img
                    src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"
                    alt=""
                  />
                  <p class="text-md">Watch instantly or download for later</p>
                  <p class="text-sm">
                    Available on phone and tablet, wherever you go.
                  </p>
                </div>
                <div>
                  <img
                    src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png"
                    alt=""
                  />
                  <p class="text-md">Use any computer</p>
                  <p class="text-sm">Watch right on POV.com.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {activeTabName === PRICE && (
        <section className="tab-content">
          <div className="container tabs__container">
            <div
              id="tab-3-content"
              className={`tab-content-item ${
                activeTabName === PRICE && "show"
              }`}
            >
              <div className="text-center">
                <p className="text-lg">
                  Choose one plan and upload everything on POV.
                </p>
                <Link to="/payment" className="btn-t btn-lg">
                  Come on Board{" "}
                </Link>
              </div>
              <table class="subscription__table">
                <thead>
                  <tr>
                    <th className="table-even"></th>
                    <th className="table-heading table-even">Basic</th>
                    <th className="table-heading table-even">Standard</th>
                    <th className="table-heading table-even">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="table-cell table-odd">Monthly price after free month ends</td>
                    <td className="table-cell table-odd">$8.99</td>
                    <td className="table-cell table-odd">$12.99</td>
                    <td className="table-cell table-odd">$15.99</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-even">HD Available</td>
                    <td className="table-cell table-even"><i class="fas fa-times"></i></td>
                    <td className="table-cell table-even"><i class="fas fa-check"></i></td>
                    <td className="table-cell table-even"><i class="fas fa-check"></i></td>
                  </tr>
                  <tr>
                    <td className="table-cell table-odd">Ultra HD Available</td>
                    <td className="table-cell table-odd">
                      <i class="fas fa-times"></i>
                    </td>
                    <td className="table-cell table-odd">
                      <i class="fas fa-times"></i>
                    </td>
                    <td className="table-cell table-odd">
                      <i class="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-cell table-even">Upload you can make at one time</td>
                    <td className="table-cell table-even">10</td>
                    <td className="table-cell table-even">50</td>
                    <td className="table-cell table-even">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-odd">Upload from your laptop, TV, phone and tablet</td>
                    <td className="table-cell table-odd">
                      <i class="fas fa-check"></i>
                    </td>
                    <td className="table-cell table-odd">
                      <i class="fas fa-check"></i>
                    </td>
                    <td className="table-cell table-odd">
                      <i class="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-cell table-even">Unlimited movies and TV shows</td>
                    <td className="table-cell table-even">
                      <i class="fas fa-check"></i>
                    </td>
                    <td className="table-cell table-even">
                      <i class="fas fa-check"></i>
                    </td>
                    <td className="table-cell table-even">
                      <i class="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-cell table-odd">Cancel anytime</td>
                    <td className="table-cell table-odd">
                      <i class="fas fa-check"></i>
                    </td>
                    <td className="table-cell table-odd">
                      <i class="fas fa-check"></i>
                    </td>
                    <td className="table-cell table-odd">
                      <i class="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-cell table-even">First month free</td>
                    <td className="table-cell table-even">
                      <i class="fas fa-check"></i>
                    </td>
                    <td className="table-cell table-even">
                      <i class="fas fa-check"></i>
                    </td>
                    <td className="table-cell table-even">
                      <i class="fas fa-check"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Tabs;
