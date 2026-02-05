import React, { useEffect, useState } from "react";
export const Card  = ({name, age}) => {
  return (
  <div className="row d-flex justify-content-center min-vh-200 bg-light col-sm-6 mb-3 mb-sm-5">
  <div className="Card text-center border border-secondary rounded-lg shadow-sm card-group p-4" style={{ width: '90%', maxWidth: '20rem' }}>
    <div className="card-header d-flex justify-content-between align-items-center">
      <h5 className="card-title mb-0">{name}</h5>
      <p className="mb-0">{age}</p>
    </div>
    <img 
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlhbWklMjBza2lsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
      className="card-img-top" 
      alt="miami"
    />
    <div className="card-body">
      <strong>102 likes</strong>
      <p className="card-text">i'd love to live here some day!</p>
    </div>
  </div>
</div>
)
};
