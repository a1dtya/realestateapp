import React, { useState } from 'react';
import './styles/fonts.css';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PropertyList from './components/PropertyList';
import ContactForm from './components/ContactForm';
import MainTitleWithFilters from './components/MainTitleWithFilters';
import propertiesData from './data/property-list-data.json'; // Import the JSON data

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    developer: 'all',
    type: 'all',
  });

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      developer: 'all',
      type: 'all',
    });
  };

  return (
    <div className="App">
      <Header onContactClick={handleContactClick} />  
      <MainTitleWithFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
      />
      <main className="container my-4">
        <PropertyList filters={filters} properties={propertiesData.properties} />
      </main>
      <Footer />

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
