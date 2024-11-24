import { MetaFunction } from "@remix-run/cloudflare";
import Map from "~/components/map/Map";

export const meta: MetaFunction = () => {
  return [
    { title: "STALKER 2 - Interactive Map" },
    { name: "description", content: "The website to find info and a map over the STALKER 2 Zone" },
  ];
};

export default function MapPage() {
  return (
    <div className="relative flex w-full h-screen bg-[#060702] items-center justify-center">
      <Map />
    </div>
  );
}