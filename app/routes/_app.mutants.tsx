import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "STALKER 2 - Mutants" },
    { name: "description", content: "The website to find info and a map over the STALKER 2 Zone" },
  ];
};

export default function MutantsPage() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      This page is for a list of every mutant that can be found in S.T.A.L.K.E.R 2
    </div>
  );
}