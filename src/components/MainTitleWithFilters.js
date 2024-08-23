import React from 'react';
import '../styles/App.css'; 

const MainTitleWithFilters = () => {
  return (
    <div className="main-title-container">
      <div className="main-title">
        Discover the Best Properties
      </div>
      <div className="filters">
        <div className="filter-column">
          <label htmlFor="developer-select" className="Main-label">DEVELOPERS</label>
          <select id="developer-select" defaultValue="residential" className="filter-select">
            <option value="residential" className='Main-text-values'>Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        <div className="filter-column">
          <label htmlFor="type-select" className="Main-type-select">TYPE</label>
          <select id="developer-select" defaultValue="appartment" className="filter-select">
            <option value="appartment">Appartments</option>
            <option value="bungalow">Bungalows</option>
          </select>
        </div>
      </div>
      <div className="property-count-reset-container">
        <div className="property-count">273 Properties Found</div>
        <div className="reset-controls">
          <img src="./images/reload.png" alt='reset filters' className="reset-icon"/>
          <div className="reset-text">Reset All Filters</div>
        </div>
      </div>
      <div className="divider-line"></div>
    </div>
  );
};

export default MainTitleWithFilters;
