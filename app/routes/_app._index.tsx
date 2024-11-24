import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "STALKER 2 - Zone" },
    { name: "description", content: "The website to find info and a map over the STALKER 2 Zone" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center space-y-2 mx-4">
      <h3 className="text-xl">This is a work in progress and is improved every day</h3>
      <Link to='/map'>
        <Button>
          Map
        </Button>
      </Link>
      <Link to='/artifacts'>
        <Button>
          Artifacts
        </Button>
      </Link>
      <Link to='/mutants'>
        <Button>
          Mutants
        </Button>
      </Link>
    </div>
  );
}