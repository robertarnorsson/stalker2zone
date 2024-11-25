import { Extent } from "ol/extent";
import { Projection } from "ol/proj";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";
import Text from "ol/style/Text";

export const tileExtent: Extent = [
  0,
  0,
  32768,
  32768,
];

export const projection = new Projection({
  code: 'stalker2-map',
  units: 'pixels',
  extent: tileExtent
});

export const zoneLabelStyle = new Style({
  text: new Text({
    font: 'bold 16px Calibri,sans-serif',
    overflow: true,
    fill: new Fill({
      color: '#ee991a',
    }),
    stroke: new Stroke({
      color: '#000',
      width: 1,
    }),
  }),
});
const zoneStrokeStyle = new Style({
  fill: new Fill({
    color: 'rgba(0, 0, 0, 0)',
  }),
  stroke: new Stroke({
    color: '#ee991a',
    width: 2,
  }),
});

export const zoneStyles = [zoneStrokeStyle, zoneLabelStyle];