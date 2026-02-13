// src/PersonCard.jsx
import React from 'react';

const PersonCard = ({ person }) => {
  return (
    <div className={`card ${person.role.toLowerCase().replace(" ", "-")}`}>
      <h3>{person.role}</h3>
      <h2>{person.name}</h2>
      <p className="email">{person.email}</p>
      
      <div className="details">
        <strong>Details:</strong>
        <p>{person.getDetails()}</p>
      </div>

      <p className="greeting">"{person.sayHello()}"</p>
    </div>
  );
};

export default PersonCard;