import React from "react"

export default function Main(props) {
    return (
        <div className="card">
            <img src={props.trip.imageUrl} alt={props.trip.title} />
            <div className="card--div">
                <div className="card--header">
                  <i className="fa-solid fa-location-dot"></i>
                  <p>{props.trip.location}</p>
                  <a href={props.trip.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card--body">
                    <h2>{props.trip.title}</h2>
                    <p>{props.trip.startDate} - {props.trip.endDate}</p>
                    <p>{props.trip.description}</p>
                </div>
            </div>
        </div>
    );
}