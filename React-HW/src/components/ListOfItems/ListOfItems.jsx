import React from "react";
import "./ListOfItems.css";

const ListOfItems = () => {

const items = ["1" , "2", "3", "4", "5"];

return(
    <div className="list-container">
        <ul>
            {items.map((item, index) =>
                (<li key={index}>{item}</li>) 
            )}
        </ul>
    </div>
)
}

export default ListOfItems;