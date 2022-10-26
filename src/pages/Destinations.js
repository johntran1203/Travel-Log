import * as React from 'react';
import {render} from 'react-dom';
import Map, {Marker, Popup} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam9obnRyYW4xMjMiLCJhIjoiY2w5ZGl1NDl0MDZydTNubXdjYjlldHNrbyJ9.LTmjQwuRkC6QHByJiE1ozw'; // Set your mapbox token here

function Destinations() {
    const [showPopup, setShowPopup] = React.useState(true);
    const [viewState, setViewState] = React.useState({
        latitude: 33.81,
        longitude: -117.91,
        zoom: 10
      });
  return (
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={-117.91} latitude={ 33.81} color="blue" />
      {showPopup && (
      <Popup longitude={-117.91} latitude={33.81}
        anchor="bottom"
        closeOnClick={() => setShowPopup(false)}>
        You are here
      </Popup>)}
    </Map>
  );
}

export default Destinations;