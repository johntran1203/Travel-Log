import * as React from "react";
import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import RoomIcon from "@mui/icons-material/Room";
import "mapbox-gl/dist/mapbox-gl.css";
import cities from "../data/cities.json";
import "./Destination.css"


const MAPBOX_TOKEN =
  "pk.eyJ1Ijoiam9obnRyYW4xMjMiLCJhIjoiY2w5ZGl1NDl0MDZydTNubXdjYjlldHNrbyJ9.LTmjQwuRkC6QHByJiE1ozw"; // Set your mapbox token here

function Destinations() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [viewState, setViewState] = React.useState({
    latitude: 36.7783,
    longitude: -119.4179,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  });

  return (
    <Map className='map'
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: 800, height: 600 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {cities.map((city, index) => (
        <Marker
          key={index}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <RoomIcon className="text-3xl text-red-800" />
        </Marker>
      ))}
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}
        >
          <div>
            <div className="w-64 h-32 flex-auto flex-col justify-around">
              <label className="text-sky-600 text-sm border-b-[2px] border-sky-600 my-3">
                Place:
              </label>
              <h4 className="font-bold">{popupInfo.city}</h4>
              <label className="text-sky-600 text-sm border-b-[2px] border-sky-600 my-3">
                Information:
              </label>
              <p className="text-xs break-words">{popupInfo.population}</p>
            </div>
          </div>
        </Popup>
      )}
    </Map>
  );
}

export default Destinations;
