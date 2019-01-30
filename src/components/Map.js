import React from "react";

import { withStyles } from "@material-ui/core";
import { ADDRESS } from "mtc/constants";

const KEY = "wrAwaALiRJUx596rDgKP";

const styles = theme => ({
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

function MapComponent({ classes }) {
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
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url={`https://maps.tilehosting.com/styles/streets/{z}/{x}/{y}@2x.png?key=${KEY}`}
        />
        <Marker position={ADDRESS.geo} icon={icon} />
      </LeafletMap>
    </div>
  );
}

export default withStyles(styles)(MapComponent);
