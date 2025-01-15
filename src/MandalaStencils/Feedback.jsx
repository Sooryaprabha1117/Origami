import React, { useState } from 'react';
import "./Feedback.css"
const Feedback = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the submitted feedback with the name
    setSubmittedFeedback([...submittedFeedback, { name, feedback }]);
    setName(''); // Clear name input after submission
    setFeedback(''); // Clear feedback input after submission
    setSubmitted(true);
  };

  const toggleFeedback = () => {
    setShowFeedback(!showFeedback);
  };

  return (
    <div className="App">
      <h1>Feedback</h1>
      {submitted ? (
        <button onClick={toggleFeedback} className="show-feedback-btn">
          &#x1F4AC; {/* Speech bubble icon */}
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            style={{
              width: '90%',
              maxWidth: '400px',
              marginBottom: '10px',
              padding: '10px',
              fontSize: '16px',
            }}
          />
          <br />
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your feedback here..."
            rows="5"
            style={{
              width: '90%',
              maxWidth: '400px',
              marginBottom: '10px',
              padding: '10px',
              fontSize: '16px',
            }}
          />
          <br />
          <button type="submit" className="show-button">Submit</button>
        </form>
      )}

      {showFeedback && (
        <div className="feedback-box">
          <h2>Submitted Feedback:</h2>
          {submittedFeedback.length > 0 && (
            <ul>
              {submittedFeedback.map((item, index) => (
                <li key={index}>
                  <strong>{item.name}:</strong> {item.feedback}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Feedback;
