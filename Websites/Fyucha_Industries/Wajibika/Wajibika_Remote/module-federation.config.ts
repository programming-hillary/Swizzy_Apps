import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'Wajibika_Web',
  exposes: {
    './Routes':
      'Websites/Fyucha_Industries/Wajibika/Wajibika_Remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
