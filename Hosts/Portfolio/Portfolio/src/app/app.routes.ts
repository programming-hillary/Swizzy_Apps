import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'Jumuika_Web',
    loadChildren: () =>
      import('Jumuika_Web/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'Wajibika_Web',
    loadChildren: () =>
      import('Wajibika_Web/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'Elimika_Web',
    loadChildren: () =>
      import('Elimika_Web/Routes').then((m) => m.remoteRoutes),
  },
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
