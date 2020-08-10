import React, { useState } from 'react';
import TopBar from '../../genericComponents/TopBar/TopBar';
import AsideBar from '../../genericComponents/AsideBar/AsideBar';
import DashboardScreen from '../DashboardScreen/DashboardScreen';
import './_dashboard.scss';
const Dashboard = () => {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(document.getElementsByClassName('user'));
    localStorage.setItem('savedName', name);
    setName('');
    // window.location.reload(true);
  };
  return (
    <section className="dashboard">
      <TopBar />

      <section className="dashboard__pulpit">
        <AsideBar />

        <div className="dashboard__container">
          <DashboardScreen
            handleNameChange={handleNameChange}
            handleSubmit={handleSubmit}
            name={name}
          />
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
