import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import style from './leaflet.module.scss';
import { Icon } from 'leaflet';
import MarkerIcon from '../../assets/images/icon-location.svg';
import { MyComponent } from '../../helpers/myComponent';

const customIcon = new Icon({
  iconUrl: MarkerIcon,
  iconSize: [42, 52],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const LeafletMap = (props) => {
  return (
    <MapContainer
      // key={`${props.coordinates[0]}`}
      className={style.mapCont}
      center={props.coordinates}
      zoom={13}
      scrollWheelZoom={false}
    >
      <MyComponent geoInfo={props.coordinates} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.coordinates} icon={customIcon} />
    </MapContainer>
  );
};

export default LeafletMap;
