import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'HosDocs_Web',
    loadChildren: () =>
      import('HosDocs_Web/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'iSec_Web',
    loadChildren: () => import('iSec_Web/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
