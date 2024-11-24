import { Map, MapBrowserEvent, View } from "ol";
import { getCenter } from "ol/extent";
import TileLayer from "ol/layer/Tile";
import { XYZ } from "ol/source";
import { createXYZ } from "ol/tilegrid";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { projection, tileExtent } from "~/lib/map";

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
          new TileLayer({
            extent: tileExtent,
            source: new XYZ({
              url: 'https://tiles.stalker2.zone/v1/{z}/{x}/{y}',
              tileGrid: createXYZ({
                maxZoom: 7,
                minZoom: 1,
                extent: tileExtent
              }),
              projection: projection,
              tileSize: 256,
            })
          })
        ],
        view: new View({
          center: getCenter(tileExtent),
          zoom: 3,
          projection: projection,
          enableRotation: false,
          maxZoom: 9
        }),
        controls: [],
        maxTilesLoading: 64
      })

      setMap(mapInstance);

      mapInstance.on('click', (event: MapBrowserEvent<UIEvent>) => {
        console.log(`${event.coordinate.at(0)}, ${event.coordinate.at(1)}`)
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