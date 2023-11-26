import React, { useEffect, useState } from 'react';
import './Main.css';

export default function Main() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-container">

      <div className="welcoming-image">
        <img src="/images/podawanie_reki.jpg" alt="Welcoming Image" />
        <div className="welcoming-text">
          <h1>Want to find out what your future clients need?</h1>
          <h2>No more trial and error! With 'PickIt' you can ask and get an answer for free.</h2>
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
      <div className={`big-buttons ${isVisible ? 'visible' : ''}`}>
        <div className="button-container">
          <div className="big-button add-voting-button">
            <img src="/images/add-icon.png" alt="Add Voting Icon" />
            <p>Add a Voting</p>
          </div>
        </div>
        <div className="button-container">
          <div className="big-button take-part-button">
            <img src="/images/participate-icon.png" alt="Participate Icon" />
            <p>Take Part in Voting</p>
          </div>
        </div>
      </div>
    </div>
  );
}