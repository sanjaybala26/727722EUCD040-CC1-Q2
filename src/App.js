import './App.css';
import React, { useState } from 'react';

const UserProfile = ({ name, age }) => {

  const [userAge, setUserAge] = useState(age);

  const increaseAge = () => {
    setUserAge(prevAge => prevAge + 1);
  };

  const decreaseAge = () => {
    setUserAge(prevAge => (prevAge > 0 ? prevAge - 1 : prevAge));
  };

  return (
    <div>
      <h2 className='body'>User Profile</h2>
      <p className='body1'>Name: {name}</p>
      <p className='body2'>Age: {userAge}</p>
      <button className = 'butt' onClick={increaseAge}>Get Older</button>
      <button className='butt1' onClick={decreaseAge}>Make Younger</button>
    </div>
  );
};

export default UserProfile;