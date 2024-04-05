import React, { useState } from 'react';
import './Feedback.css';
import Header from './Header';
import axios from 'axios';

function Feedback() {
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [filledStars, setFilledStars] = useState([false, false, false, false, false]);


  const handleRatingChange = (value) => {
    const updatedFilledStars = filledStars.map((_, index) => {
      if (index === value - 1) {
        return !filledStars[index];
      }
      return index < value - 1;
    });
    setFilledStars(updatedFilledStars);

    if (value === rating) {
      setRating(0);
    } else {
      setRating(value);
    }
  };


  const handleFeedbackTextChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/submit-feedback', {
        feedback_text: feedbackText
      });
      setRating(0);
      setFeedbackText('');
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again later.');
    }
  };

  return (
    <div className='feedback'>
      <Header />
      <div className='feedback-container'>
        <h2>Feedback</h2>
        {/* Star rating */}
        <div className='star-rating'>
          <div className='label-row'>
          <label>Shape our platform with your feedback. Share now!</label>
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
                {ratingValue <= rating ? (
                    <i className="bi bi-star-fill star" style={{color: 'red'}}></i>
                  ) : (
                    <i className="bi bi-star star" style={{color: 'red'}}></i>
                  )}
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
