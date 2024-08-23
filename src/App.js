import React, { useState } from 'react';
import './styles/fonts.css';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PropertyList from './components/PropertyList';
import ContactForm from './components/ContactForm';



import MainTitleWithFilters from './components/MainTitleWithFilters';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header onContactClick={handleContactClick} />  
      <MainTitleWithFilters />
      <main className="container my-4">
        <PropertyList />
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
