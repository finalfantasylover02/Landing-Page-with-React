import React from "react";
import Images from "./Images"; // Import the Images component

const Cards = ({ imageSrc }) => { // Receive imageSrc as a prop
    return (
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
            <img src={imageSrc} className="card-img-top" alt="Card Image" />
            <div className="card-body">
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
        </div>
    );
}

export default Cards;

