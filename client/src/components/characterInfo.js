import React from 'react';

const characterInfo = ({ character }) => {
   const { gender, height, mass, skin_color, hair_color } = character
   return (
      <div className='character-info'>
         <p>gender: {gender}</p>
         <p>height: {height}</p>
         <p>mass: {mass}</p>
         <p>skin: {skin_color}</p>
         <p>hair: {hair_color}</p>
      </div>
   );
}

export default characterInfo;