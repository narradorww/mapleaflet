import React , {useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../Map/style.css'
import 'leaflet/dist/leaflet.css'
import osm from '../../constants/osm-providers'




function Map(){
    const [center, setCenter] = useState({lat: 51.505, lng:-0.09})
    const [zoom, setZoom] = useState(10)





    return(
        <MapContainer id="map" center={center} zoom={zoom} scrollWheelZoom={true}>
  <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>   

  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    )
}

export default Map;



