import React from 'react';

const Card = ({ robot: { name, email, id } }) => (
  <div className="bg-light-green dib br3 pa3 ma3 grow bwt shadow-5">
    <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
);

export default Card;
