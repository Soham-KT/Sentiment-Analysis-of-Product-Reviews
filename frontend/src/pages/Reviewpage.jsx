import React, { useState } from "react";
import axios from "axios";
import "../styles/ReviewPage.css";

function ReviewPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [review, setReview] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [polarity, setPolarity] = useState("");

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setReview("");
    setSentiment("");
    setPolarity("");
  };

  const handleSubmitReview = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Prepare form data
    const formData = new FormData();
    formData.append("review", review);

    try {
      const response = await axios.post("http://172.20.10.3:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Extract data from response
      const { prediction, polarity } = response.data;

      setSentiment(prediction); // Set sentiment
      setPolarity(polarity); // Set polarity (rounded to 2 decimal places)
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
      setSentiment("Error");
      setPolarity("N/A");
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
            <form onSubmit={handleSubmitReview}>
              <textarea
                className="review-input"
                placeholder="Write your review here..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              ></textarea>
              <button type="submit" className="submit-button">
                Submit Review
              </button>
            </form>
            <button className="close-button" onClick={handleCloseDialog}>
              Close
            </button>
            {sentiment && (
              <div className="result-box">
                <p>{`Sentiment: ${sentiment}`}</p>
                {/* <p>{`Polarity: ${polarity}`}</p> */}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewPage;
