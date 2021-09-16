import React from "react";

export default function HotelCard(props) {
    return (
        <div>
            <img
                width="100%"
                alt={props.name}
                src={`http://localhost:3002/${props.img}`}
            />
            <h2>{props.name}</h2>
        </div>
    );
}
