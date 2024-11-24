import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "STALKER 2 - Artifacts" },
    { name: "description", content: "The website to find info and a map over the STALKER 2 Zone" },
  ];
};

export default function ArtifactsPage() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      This page is for a list of every artifact that is possible to be found in S.T.A.L.K.E.R 2
    </div>
  );
}