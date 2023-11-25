import React from 'react';
import './Main.css'; // Import your CSS file for styling

export default function Main() {
  return (
    <div className="main-container">

      <div className="welcoming-image">
        <img src="/images/podawanie_reki.jpg" alt="Welcoming Image" />
        <div className="welcoming-text">
          <h1>Want to find out what your future clients need?</h1>
          <h2>No more triall and error! With 'PickIt' you can ask and get an answer for free.</h2>
        </div>
      </div>

      {/* Reasons to Use the App */}
      <div className="reasons-section">
        <h2>Reasons to Use Our App</h2>
        <ul>
          <li>Reason 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Reason 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          <li>Reason 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
          {/* Add more reasons as needed */}
        </ul>
      </div>

      {/* Big Buttons */}
      <div className="big-buttons">
        <button className="add-voting-button">Add a Voting</button>
        <button className="take-part-button">Take Part in Voting</button>
      </div>
    </div>
  );
}