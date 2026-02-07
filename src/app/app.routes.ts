import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { ElementosSitio } from './pages/elementos-sitio/elementos-sitio';
import { Menu } from './pages/menu/menu';
import { Breadcrumbs } from './pages/breadcrumbs/breadcrumbs';
import { MapaSitio } from './pages/mapa-sitio/mapa-sitio';
import { Error404 } from './pages/error-404/error-404';
import { Busqueda } from './pages/busqueda/busqueda';

export const routes: Routes = [
  {
    path: '',
    component: Inicio,
    pathMatch: 'full',
  },
  {
    path: 'elementos',
    component: ElementosSitio,
    pathMatch: 'full',
  },
  {
    path: 'menu',
    component: Menu,
    pathMatch: 'full',
  },
  {
    path: 'breadcrumbs',
    component: Breadcrumbs,
    pathMatch: 'full',
  },
  {
    path: 'mapa',
    component: MapaSitio,
    pathMatch: 'full',
  },
  {
    path: 'busqueda',
    component: Busqueda,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Error404,
  },
];
