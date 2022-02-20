import React from "react"

export default function Main(props) {
    return (
        <div className="card--div">
            <img src={props.trip.imageUrl} alt={props.trip.title} />
            <div className="card--body">
                <i className="fa-solid fa-location-dot"></i>
                <h1>{props.trip.title}</h1>
            </div>
        </div>
    );
}