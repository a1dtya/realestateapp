
import React from 'react';
import '../styles/App.css'; 

const MainTitleWithFilters = ({ filters, onFilterChange, onResetFilters }) => {
 
  const handleDeveloperChange = (e) => {
    onFilterChange('developer', e.target.value);
  };

  const handleTypeChange = (e) => {
    onFilterChange('type', e.target.value);
  };

  return (
    <div className="main-title-container">
      <div className="main-title">
        Discover the Best Properties
      </div>
      <div className="filters">
        <div className="filter-column">
          <label htmlFor="developer-select" className="Main-label">DEVELOPERS</label>
          <select
            id="developer-select"
            value={filters.developer}
            onChange={handleDeveloperChange}
            className="filter-select"
          >
            <option value="all" className='Main-text-values'>All Developers</option>
            <option value="Emaar Properties">Emaar Properties</option>
            <option value="Dubai Properties">Dubai Properties</option>
            <option value="Nakheel">Nakheel</option>
            <option value="Select Group">Select Group</option>
            <option value="DAMAC Properties">DAMAC Properties</option>
            <option value="Meraas">Meraas</option>
            <option value="Al Barari Developers">Al Barari Developers</option>
            <option value="Jumeirah Golf Estates">Jumeirah Golf Estates</option>
            <option value="Dubai Silicon Oasis Authority">Dubai Silicon Oasis Authority</option>
            <option value="Union Properties">Union Properties</option>
            <option value="Meydan">Meydan</option>
            <option value="Dubai Holding">Dubai Holding</option>
          </select>
        </div>
        <div className="filter-column">
          <label htmlFor="type-select" className="Main-type-select">TYPE</label>
          <select
            id="type-select"
            value={filters.type}
            onChange={handleTypeChange}
            className="filter-select"
          >
            <option value="all" className='Main-text-values'>All Types</option>
            <option value="Apartment">Apartments</option>
            <option value="Villa">Villas</option>
            <option value="Mansion">Mansions</option>
            <option value="Penthouse">Penthouses</option>
            <option value="Office">Offices</option>
            <option value="Townhouse">Townhouses</option>
            <option value="Duplex">Duplexes</option>
            <option value="House">Houses</option>
            <option value="Residence">Residences</option>
          </select>
        </div>
      </div>
      <div className="property-count-reset-container">
        <div className="property-count">273 Properties Found</div>
        <div className="reset-controls" onClick={onResetFilters}>
          <img src="./images/reload.png" alt='reset filters' className="reset-icon"/>
          <div className="reset-text">Reset All Filters</div>
        </div>
      </div>
      <div className="divider-line"></div>
    </div>
  );
};

export default MainTitleWithFilters;
