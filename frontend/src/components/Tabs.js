import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.jpeg";
import "./Tabs.css";
function Tabs() {
  return (
    <div className="tab">
      <nav className="navbar">
        <Link to="/" className="navbar-brand" href="#">
          <img src={logo} className="d-inline-block align-top header__logo" alt="logo" ></img>
        </Link>
      </nav>
      <div className="text-center">
        <p className="text-lg">Choose one plan and upload everything on POV.</p>
      </div>
      <section className="tab-content">
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
              <td className="table-cell table-odd">
                Monthly price after free month ends
              </td>
              <td className="table-cell table-odd">₹159.00</td>
              <td className="table-cell table-odd">₹219.00</td>
              <td className="table-cell table-odd">₹279.00</td>
            </tr>
            <tr>
              <td className="table-cell table-even">HD Available</td>
              <td className="table-cell table-even">
                <i class="fas fa-times"></i>
              </td>
              <td className="table-cell table-even">
                <i class="fas fa-check"></i>
              </td>
              <td className="table-cell table-even">
                <i class="fas fa-check"></i>
              </td>
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
              <td className="table-cell table-even">
                Upload you can make at one time
              </td>
              <td className="table-cell table-even">10</td>
              <td className="table-cell table-even">50</td>
              <td className="table-cell table-even">Unlimited</td>
            </tr>
            <tr>
              <td className="table-cell table-odd">
                Upload from your laptop, TV, phone and tablet
              </td>
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
              <td className="table-cell table-even">
                Unlimited movies and TV shows
              </td>
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
      </section>
      <div className="text-center">
        <Link to="/payment" className="btn-t btn-lg">
          Come on Board{" "}
        </Link>
       
      </div>
    </div>
  );
}

export default Tabs;
