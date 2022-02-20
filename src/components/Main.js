import React from "react"

export default function Main(props) {
    return (
        <div className="card">
            <div className="card--img">
                <img src={props.trip.imageUrl} alt={props.trip.title} />
            </div>
            <div className="card--div">
                <div className="card--header">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{props.trip.location.toUpperCase()}</p>
                    <a href={props.trip.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <div className="card--body">
                    <h2>{props.trip.title}</h2>
                    <p className="trip-dates">{props.trip.startDate} - {props.trip.endDate}</p>
                    <p className="trip-desc">{props.trip.description}</p>
                </div>
            </div>
        </div>
    );
}