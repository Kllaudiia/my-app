import React, { useState, useEffect } from 'react';
import './Account.css';

export default function Account() {
  const [userInfo, setUserInfo] = useState({
    username: 'exampleUser', // Replace with actual user data
    email: 'user@example.com', // Replace with actual user data
    // Add more user information as needed
  });

  const [votings, setVotings] = useState([]);
  const [participatedVotings, setParticipatedVotings] = useState([]);

  // Simulate fetching user data and votings from an API
  useEffect(() => {
    // Fetch user information
    // Replace the following line with actual API call to get user info
    // const userData = api.getUserInfo();
    // setUserInfo(userData);

    // Fetch votings created by the user
    // Replace the following line with actual API call to get user's votings
    // const userVotings = api.getUserVotings(userInfo.userId);
    // setVotings(userVotings);

    // Fetch votings in which the user participated
    // Replace the following line with actual API call to get participated votings
    // const participatedVotings = api.getParticipatedVotings(userInfo.userId);
    // setParticipatedVotings(participatedVotings);
  }, [userInfo.userId]); // Make sure to replace 'userId' with the actual property in your user data

  // Handle form submission to update user information
  const handleUpdateUserInfo = (formData) => {
    // Replace the following line with actual API call to update user info
    // api.updateUserInfo(userInfo.userId, formData);
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, ...formData }));
  };

  return (
    <div className="account-container">
      <h1>Your Account</h1>

      {/* Display user information and allow updates */}
      <div className="user-info">
        <h2>User Information</h2>
        <p>Username: {userInfo.username}</p>
        <p>Email: {userInfo.email}</p>
        {/* Add more user information fields as needed */}
        {/* Add a form for users to update their information */}
        <form onSubmit={(e) => {
          e.preventDefault();
          handleUpdateUserInfo(/* form data */);
        }}>
          {/* Input fields for updating user information */}
          {/* Add submit button */}
        </form>
      </div>

      {/* Display votings created by the user */}
      <div className="user-votings">
        <h2>Your Votings</h2>
        {/* Display the list of user's votings */}
        <ul>
          {votings.map((voting) => (
            <li key={voting.id}>{voting.title}</li>
          ))}
        </ul>
      </div>

      {/* Display votings in which the user participated */}
      <div className="participated-votings">
        <h2>Participated Votings</h2>
        {/* Display the list of participated votings */}
        <ul>
          {participatedVotings.map((voting) => (
            <li key={voting.id}>{voting.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}