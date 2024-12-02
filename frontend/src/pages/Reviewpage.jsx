import React, { useState } from "react";
import axios from "axios";
import "../styles/ReviewPage.css";

function ReviewPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [review, setReview] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [polarity, setPolarity] = useState("");

  const testimonials = [
    { name: "Alice Johnson", feedback: "The service is exceptional. Highly recommended!" },
    { name: "Mark Andrews", feedback: "User-friendly and incredibly helpful." },
    { name: "Sophia Brown", feedback: "My go-to platform for product reviews!" },
  ];

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
    event.preventDefault();
    const formData = new FormData();
    formData.append("review", review);

    try {
      const response = await axios.post("http://172.20.10.3:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const { prediction, polarity } = response.data;

      setSentiment(prediction);
      setPolarity(polarity);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
      setSentiment("Error");
      setPolarity("N/A");
    }
  };

  return (
    <div className="review-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>ProductShala</h1>
        <p>We provide a prominent and accurate sentiment analysis of your review entered</p>
        <button className="hero-button" onClick={handleOpenDialog}>
          Share Your Review
        </button>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p>{`"${testimonial.feedback}"`}</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Productshala. All rights reserved.</p>
      </footer>

      {/* Floating Review Button */}
      <button className="floating-review-button" onClick={handleOpenDialog}>
        Write a Review
      </button>

      {/* Review Dialog */}
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
              <div className="button-group">
                <button type="submit" className="submit-button">
                  Submit Review
                </button>
                <button type="button" className="close-button" onClick={handleCloseDialog}>
                  Close
                </button>
              </div>
            </form>
            {sentiment && (
              <div className={`result-box ${sentiment.toLowerCase()}`}>
                <p>{`Sentiment: ${sentiment}`}</p>
                {polarity && <p>{`Polarity: ${polarity}`}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewPage;
