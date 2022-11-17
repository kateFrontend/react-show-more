import "./App.css";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [hotels, setHotels] = useState(data);

  const removeHotel = (id) => {
    let newHotels = hotels.filter((hotel) => hotel.id !== id);
    setHotels(newHotels);
  }

  return (
    <div>
      <div className="container">
        <h1>NYC TOP {hotels.length} HOTELS</h1>
      </div>
      {hotels.map((hotel) => {
        const { id, hotelName, description, image, source } = hotel;
        return (
          <div key={id}>
            <div className="container">
              <h2>
                {id} - {hotelName}
              </h2>
            </div>
            <div className="container">
              <p>{description}</p>
            </div>
            <div className="container">
              <button className="btn" onClick={() => removeHotel(id)}>Remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
