import React from 'react';

const MealRow = ({ meals }) => {
  return (
    <li className="calendar__line">
      {meals.map((meal, i) => (
        <li key={i} className="calendar__column calendar__meal">
          {meal}
        </li>
      ))}
    </li>
  );
};

export default MealRow;
