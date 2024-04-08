import React from 'react'
import './About.css'
import Header from "./Header";
function About() {
  return (
    
    <div className='about'>
        <Header/>

        <h1 className='main-heading'>ABOUT POV</h1>
        <div className='about-info'>
          <p>Our mission is to foster inclusivity, celebrate diversity, and amplify every voice. </p>

          <p>Through our news coverage, we empower individuals to engage with diverse perspectives and connect with others. Join us in building a more informed, compassionate world where understanding and empathy flourish.</p>
        </div>
        <hr className="line" /> 
        <h2 className='about-subheading'>MEET OUR FOUNDERS</h2>
        <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <div className="about-card">
              <div className="about__details">
                <h2>Aarushi Singh </h2>
                <h3>Software Engineer</h3>
               
                <div className="about__links">
                <div className='email'>
                <a href="mailto:aarushi.singh2412@gmail.com"><i className="fas fa-envelope"></i> aarushi.singh2412@gmail.com</a>
                  </div>
                  <a href="https://www.instagram.com/24aarushi.singh24?igsh=cmJ5N2FjdzNnbmpp"><i className="fab fa-instagram"></i></a>
                  <span className="about__link-space"></span>
                  <a href="https://github.com/24-Aarushi-Singh-24"><i className="fab fa-github"></i></a>
                  <span className="about__link-space"></span>
                  <a href="https://www.linkedin.com/in/aarushi-singh-530a36226/"><i className="fab fa-linkedin"></i></a>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-card">
            
              <div className="about__details">
              <h2>Amritjot Kaur</h2>
              <h3>Software Engineer</h3>
              
                <div className="about__links">
                <div className='email'>
                <a href="mailto:amritjot.549@gmail.com"><i className="fas fa-envelope"></i> amritjot.549@gmail.com</a>
                  </div>
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
                <h3>Software Engineer</h3>

                <div className="about__links">
                <div className='email'>
                  <a href="mailto:heenamatlani07@gmail.com"><i className="fas fa-envelope"></i> heenamatlani07@gmail.com</a>
                  </div>
                  <a href="https://www.instagram.com/heenamatlani07"><i className="fab fa-instagram"></i></a>
                  <span className="about__link-space"></span>
                  <a href="https://github.com/heenaMatlani"><i className="fab fa-github"></i></a>
                  <span className="about__link-space"></span>
                  <a href="https://www.linkedin.com/in/heenamatlani"><i className="fab fa-linkedin"></i></a>
                  <span className="about__link-space"></span>
 
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
