import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'Jumuika_Web',
  exposes: {
    './Routes':
      'Websites/Fyucha_Industries/Jumuika/Jumuika_Remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
