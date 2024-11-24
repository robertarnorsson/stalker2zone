import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "STALKER 2 Zone" },
    { name: "description", content: "The website to find info and a map over the STALKER 2 Zone" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      The map over S.T.A.L.K.E.R 2 will be here soon
    </div>
  );
}