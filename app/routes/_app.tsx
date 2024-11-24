import { Outlet, } from "@remix-run/react";
import { AppProviders } from "~/context/AppProvider";

export default function AppLayout() {
  return (
    <AppProviders>
      <div className="relative w-screen cursor-stalker">
        <div className="relative flex flex-1 w-full h-full">
          <Outlet />
        </div>
      </div>
    </AppProviders>
  )
}