// src/pages/ReviewPage.js
import React, { useState } from "react";
import "../styles/ReviewPage.css";

function ReviewPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [review, setReview] = useState("");
  const [result, setResult] = useState("");

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setReview("");
    setResult("");
  };

  const handleSubmitReview = () => {
    const sentiment = analyzeSentiment(review);
    setResult(sentiment);
  };

  // Dummy sentiment analysis function
  const analyzeSentiment = (text) => {
    if (text.toLowerCase().includes("good") || text.toLowerCase().includes("great")) {
      return "Positive";
    } else if (text.toLowerCase().includes("bad") || text.toLowerCase().includes("poor")) {
      return "Negative";
    } else {
      return "Neutral";
    }
  };

  return (
    <div className="review-page">
      <button className="review-button" onClick={handleOpenDialog}>
        Leave a Review
      </button>

      {openDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h2 className="dialog-heading">Submit Your Review</h2>
            <textarea
              className="review-input"
              placeholder="Write your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <button className="submit-button" onClick={handleSubmitReview}>
              Submit Review
            </button>
            <button className="close-button" onClick={handleCloseDialog}>
              Close
            </button>
            {result && (
              <div className={`result-box ${result.toLowerCase()}`}>
                {`Your review is ${result}`}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewPage;

