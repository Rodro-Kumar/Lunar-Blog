import React from "react";
import "../Card/Card.css";
const Card = ({ className, CardTitle, CardDetail, children }) => {
  return (
    <>
      <div className={className}>
        <div className="card__title">
          {CardTitle ? CardTitle : "card-title"}
        </div>
        <div className="card__detail">
          {CardDetail ? CardDetail : "card-detail"}
        </div>
        {children}
      </div>
    </>
  );
};

export default Card;
