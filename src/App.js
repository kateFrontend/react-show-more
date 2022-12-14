import "./App.css";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [hotels, setHotels] = useState(data);
  const [showMore, setShowMore] = useState(false);

  const removeHotel = (id) => {
    let newHotels = hotels.filter((hotel) => hotel.id !== id);
    setHotels(newHotels);
  };

  const showTextClick = (hotel) => { // open Show more button just for one hotel not for all
    hotel.showMore = !hotel.showMore
    setShowMore(!showMore)
  }

  return (
    <div>
      <div className="container">
        <h1>NYC TOP {hotels.length} HOTELS</h1>
      </div>
      {hotels.map((hotel) => {
        const { id, hotelName, description, image, source, showMore } = hotel;
        return (
          <div key={id}>
            <div className="container">
              <h2>
                {id} - {hotelName}
              </h2>
            </div>
            <div className="container">
              <p>{showMore ? description : description.substring(0,220) + "....."} {/* if showMore = true, show full descripton, if showMore = false, show description up to 220 characters */}
              <button onClick={() => showTextClick(hotel)}>{showMore ? "Show less" : "Show more"}</button> {/* change button state dynamically !showMore */}
              </p>  
            </div>
            <div className="container">
              <img src={image} width="500px" />
            </div>
            <div className="container">
              <p>{source}</p>
            </div>
            <div className="container">
              <button className="btn" onClick={() => removeHotel(id)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;


// https://www.w3schools.com/jsref/jsref_substring.asp