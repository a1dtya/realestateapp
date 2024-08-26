import React from 'react';
import '../styles/App.css'; 

const PropertyList = ({ filters, properties }) => {
  
  const filteredProperties = properties.filter(property => {
    const matchesDeveloper = filters.developer === 'all' || property.developer === filters.developer;
    const matchesType = filters.type === 'all' || property.property_type === filters.type;
    return matchesDeveloper && matchesType;
  });

  
  const propertiesToDisplay = filteredProperties.slice(0, 9);

  return (
    <div className="container">
      <div className="row">
        {propertiesToDisplay.map((property) => (
          <div key={property.id} className="col-md-4 mb-4">
            <div className="card no-border">
              <img
                src={property.property_image}
                className="card-img-top"
                alt={property.title}
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
        <img src="./images/1.png" alt=" Image 1" className="centered-image" />
        <img src="./images/2.png" alt=" Image 2" className="centered-image" />
        <img src="./images/3.png" alt=" Image 3" className="centered-image" />
      </div>
    </div>
  );
};

export default PropertyList;
