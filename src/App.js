import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main";
import data from "./data";

export default function App() {
    const trips = data.map(item => {
        return (
          <div className="section">
            <Main trip={item} key={item.title}/>
            <hr></hr>
          </div>
          )
    })
    return (
        <div>
            <Navbar />
            {trips}
        </div>
    )
}