import React from "react";

import { makeStyles } from "@material-ui/core";
import { ADDRESS } from "mtc/constants";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZGlzY29sb3JkIiwiYSI6ImNrN2plazhteTBzZzQzbG8zcnEyMHA3eWQifQ.j6KgxESGIU8KLbE0FRiRUg";

const useStyles = makeStyles(theme => ({
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
}));

function useMap() {
  const [mapUtils, setMapUtils] = React.useState();

  React.useEffect(() => {
    Promise.all([import("react-leaflet"), import("leaflet")]).then(
      ([{ Map: LeafletMap, TileLayer, Marker }, L]) => {
        const icon = L.icon({
          iconUrl: require("./images/marker.svg"),
          iconSize: [48, 48],
          iconAnchor: [24, 48],
        });

        setMapUtils({
          LeafletMap,
          TileLayer,
          Marker,
          icon,
        });
      }
    );
  }, []);

  return mapUtils;
}

export default function MapComponent(props) {
  const classes = useStyles(props);
  const mapUtils = useMap();
  if (!mapUtils) return <div className={classes.root} />;

  const { LeafletMap, TileLayer, Marker, icon } = mapUtils;

  return (
    <div className={classes.root}>
      <LeafletMap
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
      </LeafletMap>
    </div>
  );
}
