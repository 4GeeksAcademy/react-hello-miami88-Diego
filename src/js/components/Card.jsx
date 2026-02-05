import React, { useEffect, useState } from "react"; // Corrected single import statement

export const Card = ({ name, age, description, src }) => { // Corrected function definition syntax
  return (
    /* 'row' class removed from here; col-12 col-md-4 ensures 3 columns on desktop */
    <div className="d-flex justify-content-center min-vh-200 bg-light col-sm-6 mt-4 mb-3 mb-sm-5 col-12 col-md-4">
      <div className="Card text-center border border-secondary rounded-lg shadow-sm card-group p-4" style={{ width: '90%', maxWidth: '60rem' }}>
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">{name}</h5>
          <p className="mb-0 ms-4">{age}</p>
        </div>
        <img 
          src={src || "https://via.placeholder.com/300x200?text=No+Image"} 
          className="card-img-top" 
          alt="miami"
        />
        <div className="card-body">
          <strong>102 likes</strong>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};
