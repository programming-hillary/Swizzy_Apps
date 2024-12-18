import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'Elimika_Web',
  exposes: {
    './Routes':
      'Websites/Fyucha_Industries/Elimika/Elimika_Remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
