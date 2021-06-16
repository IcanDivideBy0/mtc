import React from "react";
import { makeStyles } from "@material-ui/core";

import { ADDRESSES } from "constants";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZGlzY29sb3JkIiwiYSI6ImNrN2plazhteTBzZzQzbG8zcnEyMHA3eWQifQ.j6KgxESGIU8KLbE0FRiRUg";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100%",
    height: 0,
    paddingBottom: "calc(1 / 1 * 100%)",
  },
  map: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

function useMap() {
  const [mapUtils, setMapUtils] = React.useState();

  React.useEffect(() => {
    Promise.all([
      import("react-leaflet"),
      import("leaflet"),
      import("leaflet/dist/leaflet.css"),
    ]).then(([{ MapContainer, TileLayer, Marker }, L]) => {
      const icon = L.icon({
        iconUrl: "/images/marker.svg",
        iconSize: [48, 48],
        iconAnchor: [24, 48],
      });

      setMapUtils({
        MapContainer,
        TileLayer,
        Marker,
        icon,
      });
    });
  }, []);

  return mapUtils;
}

export default function Map(props) {
  const classes = useStyles(props);
  const mapUtils = useMap();
  if (!mapUtils) return <div className={classes.root} />;

  const { MapContainer, TileLayer, Marker, icon } = mapUtils;

  const center = ADDRESSES.reduce(
    (acc, address) => ({
      lat: acc.lat + address.geo.lat,
      lng: acc.lng + address.geo.lng,
    }),
    { lat: 0, lng: 0 }
  );
  center.lat = center.lat / ADDRESSES.length;
  center.lng = center.lng / ADDRESSES.length;

  return (
    <div className={classes.root}>
      <MapContainer
        center={center}
        className={classes.map}
        zoom={13}
        maxZoom={19}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a>'
          id="mapbox/streets-v11"
          url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`}
        />
        {ADDRESSES.map((address, idx) => (
          <Marker key={idx} position={address.geo} icon={icon} />
        ))}
      </MapContainer>
    </div>
  );
}
