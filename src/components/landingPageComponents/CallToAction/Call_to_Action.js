import React from 'react';
import { Link } from 'react-router-dom';
import './_callToAction.scss';

const CallToAction = () => {
  return (
    <section className="action-banner ">
      <div className="container">
        <div className="container-text">
          <h3 className="action-banner__header">Zaplanuj posiłek</h3>

          <p className="action-banner__text">
            Pomozemy Ci zaplanować posiłek na kazdy dzień tygodnia w oparciu{' '}
            <br /> o kalendarz i zbiór przepisów
          </p>
        </div>
        <div className="container-button">
          <Link to="/dashboard/desktop">
            <button className="action-banner__buttonCTA">
              Uruchom aplikację
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
