import React, { useState } from 'react';
import './_desktop.scss';
import Weeks from '../DesktopWeeks/Weeks';
import InfoWidget from '../InfoWidget/InfoWidget';
import AddRecipeAndPlanWidget from '../AddRecipeAndPlanWidget/AddRecipeAndPlanWidget';
const Desktop = () => {
  return (
    <section className="desktop">
      <section className="desktop__actions">
        <AddRecipeAndPlanWidget />
        <InfoWidget />
      </section>
      <Weeks />
    </section>
  );
};
export default Desktop;
