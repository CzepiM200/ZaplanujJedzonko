import React, { useState } from 'react';
import './_form.scss';

const Form = ({ handleNameChange, handleSubmit, name }) => {
  return (
    <form className="form box" onSubmit={handleSubmit}>
      <div className="form__text">
        <div className="form__info">
          <h1>Witaj,</h1>
          <p>wygąda na to, że jesteś tutaj pierwszy raz!</p>
        </div>
        <div className="form__actions">
          <input
            className="form__input"
            value={name}
            type="text"
            placeholder="tutaj wpisz swoje imię"
            required
            onChange={handleNameChange}
          />
          <button type="submit" className="form__btn">
            Gotowe!
          </button>
        </div>
        <div className="form__info">
          <p>
            Podaj nam swoje imię, a my zorganizujemy dla ciebie nasza aplikację
            :)
          </p>
        </div>
      </div>
    </form>
  );
};

export default Form;
