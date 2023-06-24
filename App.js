import React from 'react';
import 'leaflet/dist/leaflet.css';
// import { useState,useMapEvents } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'

function App() {
  const position = [-6.92800177830529, 106.93050785390125];
  // const [position, setPosition] = useState(null)
  // const map = useMapEvents({
  //   click() {
  //     map.locate()
  //   },
  //   locationfound(e) {
  //     setPosition(e.latlng)
  //     map.flyTo(e.latlng, map.getZoom())
  //   },
  // })

  return (
    <MapContainer
    center = {position}
    zoom = {15}
    style= {{
      width:'100vw', 
      height:'100vh',
    }}
    >
    <TileLayer
      url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=YO1o6UIlK9D75CAhFTL2'
      attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    
    />
    <Marker position={position}>
      <Popup>Puskesmas sari lodeh <br/> desa lodeh</Popup>
    </Marker>
    <Marker position={[-6.895298256811329, 106.7946665342054]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
    
    </MapContainer>  
  
    
  );
}
export default  App;




 

