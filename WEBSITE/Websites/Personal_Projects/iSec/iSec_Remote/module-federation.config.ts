import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'iSec_Web',
  exposes: {
    './Routes':
      'Websites/Personal_Projects/iSec/iSec_Remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
