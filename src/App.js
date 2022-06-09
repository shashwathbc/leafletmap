import React from "react";
import {
MapContainer,
TileLayer,
Marker,
Popup
} from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import networkData from "./data.json";
import L from "leaflet";

const center = [22.989036956520625, 77.92496667703305];

const markerIcon = new L.Icon({
  iconUrl: require("./img/marker.png"),
  iconSize: [65,65]
});

function App() {
  console.log(networkData);
  return (
  <MapContainer
  center={center}
  zoom={3}
  style={{width:"100vw" , height: "100vh"}}
  >
   <TileLayer
   url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=rAJblAEdxt2rtbq4MSUx"
   attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
       />
{networkData.map(data => (
  <Marker
  icon={ markerIcon}
  key = {data.id} 
  position={[data.gps.lat, data.gps.lng]}
  >
    <Popup position={[data.gps.lat, data.gps.lng]}>
       <div>
         <h2>{data.country}</h2>
         <h3>{data.city}</h3>
         <p><strong>Data Usage Here : {data.data}</strong></p>
       </div>
    </Popup>

    </Marker>
))}

 
  </MapContainer>
  );
}

export default App;
