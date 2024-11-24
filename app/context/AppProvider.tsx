import { ReactNode } from 'react';

import { MapProvider } from './MapContext';

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <MapProvider>
      {children}
    </MapProvider>
  );
};
