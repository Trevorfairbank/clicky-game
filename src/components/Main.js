import React from "react";
import images from "../images.json"

function Main() {
    return (
        <div className="container">
            <div className="row mx-auto">
                {images.map(image => (<img className="click-item"key={image.id} src={process.env.PUBLIC_URL + '/img/' + image.fileName} alt="Apex-character"/>))}
            </div>
        </div>
    );
}


export default Main;
