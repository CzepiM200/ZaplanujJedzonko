import React, { useState } from 'react';
import './_weeks.scss';
import './MealRow';
import {
  breakfast,
  secondBreakfast,
  soup,
  secondDish,
  dinner,
} from './examples';
import MealRow from './MealRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

const Weeks = () => {
  const setWeekNumber = [];
  const days = [
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
    'Niedziela',
  ];

  Date.prototype.getWeekNumber = function () {
    const d = new Date(
      Date.UTC(this.getFullYear(), this.getMonth(), this.getDate())
    );
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  };

  const [week, setWeek] = useState(new Date().getWeekNumber());

  return (
    <div className="week-box">
      <ul className="calendar">
        <li className="calendar__line calendar__line__title">
          Twój plan na {week} tydzień:{' '}
        </li>
        <li className="calendar__line calendar__line__days">
          {days.map((day, i) => (
            <li key={i} className="calendar__column">
              {day}
            </li>
          ))}
        </li>
        <MealRow meals={breakfast} />
        <MealRow meals={secondBreakfast} />
        <MealRow meals={soup} />
        <MealRow meals={secondDish} />
        <MealRow meals={dinner} />
        <li className="calendar__footer">
          <a
            onClick={() => {
              if (week > 1) {
                return setWeek(week - 1);
              }
            }}
          >
            {<FontAwesomeIcon icon={faAngleDoubleLeft} />}poprzedni
          </a>
          <a
            onClick={() => {
              if (week < 52) {
                return setWeek(week + 1);
              }
            }}
          >
            następny{<FontAwesomeIcon icon={faAngleDoubleRight} />}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Weeks;
