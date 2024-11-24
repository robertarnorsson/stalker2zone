import { useEffect, useRef } from "react";
import { useMap } from "~/context/MapContext";

export default function Map() {
  const { map } = useMap();

  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (map && mapContainerRef.current) {
      map.setTarget(mapContainerRef.current);
    }

    return () => {
      if (map) map.setTarget(undefined);
    };
  }, [map]);

  return (
    <div className="relative w-full h-full">
      <div
        ref={mapContainerRef}
        style={{ width: '100%', height: '100%' }}
        className="grid-bg-plus cursor-stalker"
        onContextMenu={(event) => {event.preventDefault(); event.stopPropagation()}}
      />
    </div>
  )
}