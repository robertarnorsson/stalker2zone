import { Map, MapBrowserEvent, View } from "ol";
import GeoJSON from 'ol/format/GeoJSON.js';
import { getCenter } from "ol/extent";
import { createXYZ } from "ol/tilegrid";
import Layer from 'ol/layer/WebGLTile.js';
import Source from 'ol/source/ImageTile.js';
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { projection, tileExtent, zoneLabelStyle, zoneStyles } from "~/lib/map";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

interface MapContextType {
  map: Map | null;
}

const MapContext = createContext<MapContextType | null>(null);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const [map, setMap] = useState<MapContextType['map']>(null);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const mapInstance = new Map({
        layers: [
          new Layer({
            preload: 128,
            cacheSize: 1024,
            extent: tileExtent,
            source: new Source({
              url: 'https://tiles.stalker2.zone/v1/{z}/{x}/{y}',
              tileGrid: createXYZ({
                maxZoom: 7,
                minZoom: 1,
                extent: tileExtent
              }),
              projection: projection,
              tileSize: 256,
            })
          }),
          new VectorLayer({
            source: new VectorSource({
              url: 'https://api.stalker2.zone/zones',
              format: new GeoJSON({

              }),
            }),
            style: function (feature) {
              const label = feature.get('name').split(' ').join('\n');
              zoneLabelStyle.getText()!.setText(label);
              return zoneStyles;
            },
            updateWhileAnimating: true,
            updateWhileInteracting: true,
          })
        ],
        view: new View({
          center: getCenter(tileExtent),
          zoom: 4,
          projection: projection,
          enableRotation: false,
          maxZoom: 9
        }),
        controls: [],
        maxTilesLoading: 128
      })

      setMap(mapInstance);

      mapInstance.on('click', (event: MapBrowserEvent<UIEvent>) => {
        console.log(`${event.coordinate.at(0)?.toFixed(0)}, ${event.coordinate.at(1)?.toFixed(0)}`)
      })

      return () => {
        mapInstance.setTarget(undefined);
      };
    }
  }, [])

  return (
    <MapContext.Provider value={{ map }}>
      {children}
    </MapContext.Provider>
  );
}

export const useMap = (): MapContextType => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMap must be used within a MapProvider");
  }
  return context;
};