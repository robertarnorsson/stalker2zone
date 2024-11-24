import { Extent } from "ol/extent";
import { Projection } from "ol/proj";

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

