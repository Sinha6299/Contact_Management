import React from 'react';
import ContactList from '../components/ContactList';
import ChartComponent from '../components/ChartComponent';
import MapComponent from '../components/MapComponent';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Contact Management App</h1>
      <ContactList />
      <ChartComponent data={[]} />
      <MapComponent countries={[]} />
    </div>
  );
};

export default HomePage;
