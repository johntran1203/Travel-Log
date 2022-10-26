import * as React from "react";
import { render } from "react-dom";
import Map, { Marker, Popup } from "react-map-gl";
import RoomIcon from '@mui/icons-material/Room';

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoiam9obnRyYW4xMjMiLCJhIjoiY2w5ZGl1NDl0MDZydTNubXdjYjlldHNrbyJ9.LTmjQwuRkC6QHByJiE1ozw"; // Set your mapbox token here

function Destinations() {
  const [showPopup, setShowPopup] = React.useState(true);
  console.log(showPopup);
  const [viewState, setViewState] = React.useState({
    latitude: 33.81,
    longitude: -117.91,
    zoom: 10,
  });

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: 800, height: 600 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={-117.91} latitude={33.81}>
        <RoomIcon onClick={e=> {
            e.preventDefault()
            setShowPopup(true)
            console.log("hi")
        }}/>
      </Marker>
            {showPopup && (
      <Popup longitude={-117.91} latitude={33.81}
        anchor="bottom"
        closeButton={true}
        closeOnClick={false}
        onClose={() => setShowPopup(false)}>
        You are here
      </Popup>)}
    </Map>
  );
}

export default Destinations;

<Marker longitude={-117.91} latitude={33.81} color="blue" />;
