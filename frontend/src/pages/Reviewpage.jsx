// src/pages/ReviewPage.js
import React, { useState } from 'react';
import '../styles/ReviewPage.css';

function ReviewPage() {
  const [review, setReview] = useState({ heading: '', content: '' });
  const [sentiment, setSentiment] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Placeholder function to process sentiment
    setSentiment('Positive'); // or fetch sentiment from API
  };

  return (
    <div className="review-container">
      <h2>Submit Your Review</h2>
      <input type="text" name="heading" placeholder="Heading of Review" value={review.heading} onChange={handleChange} />
      <textarea name="content" placeholder="Review of the Product" value={review.content} onChange={handleChange}></textarea>
      <button className="btn" onClick={handleSubmit}>Submit Review</button>
      {sentiment && <p className="sentiment-display">Sentiment: {sentiment}</p>}
    </div>
  );
}

export default ReviewPage;
