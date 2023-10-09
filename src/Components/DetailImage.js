import React from 'react';
import "../style/detailImage.css";

const DetailImage = ({ src, alt }) => {
  return (
    <div className="detail-image-container">
      <img src={"../assets/Blue_T_Shirt.png"} alt={alt} style={{ width: '100px', height: '100px', border: '1px solid red' }} />
    </div>
  );
};

export default DetailImage;
