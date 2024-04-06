import React from 'react'
import './About.css'
import Header from "./Header";
function About() {
  return (
    <div className='about'>
        <Header/>

        <h1 className='main-heading'>ABOUT POV</h1>
        <div className='about-info'>
          <p>Our mission is to give everyone a voice and show them the world.</p>

          <p>We believe that everyone deserves to have a voice, and that the world is a better place when we listen, share and build community through our stories.</p>
        </div>
        <hr className="line" /> 
        <h2 className='about-subheading'>MEET OUR FOUNDERS</h2>
        <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <div className="about-card">
              <div className="about__details">
                <h2>Aarushi Singh</h2>
                
                <div className="about__links">
                  <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                  <span className="about__link-space"></span>
                  <a href="https://github.com"><i className="fab fa-github"></i></a>
                  <span className="about__link-space"></span>
                  <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-card">
            
              <div className="about__details">
              <h2>Amritjot Kaur</h2>
            
                <div className="about__links">
                  <a href="https://www.instagram.com/__.amritjot?igsh=dHZncWh1b3ZtOXNh"><i className="fab fa-instagram"></i></a>
                  <span className="about__link-space"></span>
                  <a href="https://github.com/Amrit49"><i className="fab fa-github"></i></a>
                  <span className="about__link-space"></span>
                  <a href="https://www.linkedin.com/in/amritjot-kaur"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-card">
              <div className="about__details">
                <h2>Heena Matlani</h2>
              
                <div className="about__links">
                  <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                  <span className="about__link-space"></span>
                  <a href="https://github.com"><i className="fab fa-github"></i></a>
                  <span className="about__link-space"></span>
                  <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
