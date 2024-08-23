import React, { useState, useEffect } from 'react';
import propertiesData from '../data/property-list-data.json';
import '../styles/App.css'; 

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    if (Array.isArray(propertiesData.properties)) {
      setProperties(propertiesData.properties);
    } else {
      console.error('Expected propertiesData.properties to be an array');
    }
  }, []);

  const propertiesToDisplay = properties.slice(0, 9);

  return (
    <div className="container">
      <div className="row">
        {propertiesToDisplay.map((property) => (
          <div key={property.id} className="col-md-4 mb-4">
            <div className="card no-border">
              <img
                src={property.property_image}
                className="card-img-top"
                alt={`Image of ${property.title}`}
              />
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-developer">BY {property.developer}</p>
                <div className="card-location">
                  <img
                    src="./images/location.png"
                    alt="Location icon"
                    className="location-icon"
                  />
                  <span>{property.area}</span>
                </div>
                <p className="card-price">
                  AED {property.property_price.toLocaleString()}
                </p>
                <button className="contact-button">Contact</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
     
      <div className="image-row">
        <img src="./images/1.png" alt="Promotion Image 1" className="centered-image" />
        <img src="./images/2.png" alt="Promotion Image 2" className="centered-image" />
        <img src="./images/3.png" alt="Promotion Image 3" className="centered-image" />
      </div>
    </div>
  );
};

export default PropertyList;
