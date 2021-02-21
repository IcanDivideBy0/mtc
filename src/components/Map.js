import React from "react";
import { makeStyles } from "@material-ui/core";

import { ADDRESS } from "constants";

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

  return (
    <div className={classes.root}>
      <MapContainer
        center={ADDRESS.geo}
        className={classes.map}
        zoom={13}
        maxZoom={19}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a>'
          id="mapbox/streets-v11"
          url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`}
        />
        <Marker position={ADDRESS.geo} icon={icon} />
      </MapContainer>
    </div>
  );
}
