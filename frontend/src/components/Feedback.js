import React, { useState } from 'react';
import './Feedback.css';
import Header from './Header';
import {FaStar} from 'react-icons/fa';

function Feedback() {
  // State to store the rating
  const [rating, setRating] = useState(0);
  // State to store the feedback text
  const [feedbackText, setFeedbackText] = useState('');

  // Function to handle changes in star rating
  const handleRatingChange = (value) => {
    setRating(value);
  };


  // Function to handle changes in feedback text
  const handleFeedbackTextChange = (event) => {
    setFeedbackText(event.target.value);
  };

  // Function to submit feedback
  const handleSubmit = () => {
    // You can implement the logic to submit feedback here
    console.log('Rating:', rating);
    console.log('Feedback:', feedbackText);
    // Reset rating and feedback text after submission
    setRating(0);
    setFeedbackText('');
  };

  return (
    <div className='feedback'>
      <Header />
      <div className='feedback-container'>
        <h2>Feedback</h2>
        {/* Star rating */}
        <div className='star-rating'>
          <div className='label-row'>
          <label>Shape our platform with your feedback. Share now!"</label>
          </div>
          <div className='stars-row'>
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type='radio'
                  name='rating'
                  value={ratingValue}
                  onClick={() => handleRatingChange(ratingValue)}
                />
                <FaStar
                  className='star'
                  color={ratingValue <= rating ? '#ffc107' : '#000000'}
                />
              </label>
            );
          })}
        </div>
        </div>
        {/* Feedback text area */}
        <div className='feedback-text'>
          <textarea
            rows='4'
            cols='50'
            value={feedbackText}
            onChange={handleFeedbackTextChange}
          ></textarea>
        </div>
        {/* Submit button */}
        <div className='submit-button'>
        <button onClick={handleSubmit}>Submit Feedback</button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
