import React from 'react';

const Card = ({ character }) => {
   const { name, gender, height, mass, skin_color, hair_color } = character
   return (
      <div>{name}</div>
   );
}

export default Card;