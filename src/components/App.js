import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState('');

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    if (e.target.value.length < 5) {
      setCommentError('Comment must be atleast 5 characters.');
    } else {
      setCommentError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.length >= 5) {
      alert(`Rating: ${rating}, Comment: ${comment}`);
    } else {
      setCommentError('Comment must be atleast 5 characters.');
    }
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='rating'>Rating: </label>
          <input 
            type="range"
            min="1"
            max="10"
            id="rating"
            value={rating}
            onChange={handleRatingChange}
          />
          <span className='rating'>{rating}</span>
        </div>
        <div>
          <label htmlFor='comment'>Comment: </label>
          <textarea 
            id='comment'
            value={comment}
            onChange={handleCommentChange}
            onBlur={handleCommentChange}
          />
          {commentError && <p style={{ color: 'red' }} className="comment-error">{commentError}</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;
