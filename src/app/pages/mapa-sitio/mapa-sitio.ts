import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

interface SiteItem {
  title: string;
  description: string;
  path: string;
  section: string;
  type: 'pagina' | 'seccion';
}

@Component({
  selector: 'app-mapa-sitio',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './mapa-sitio.html',
  styleUrls: ['./mapa-sitio.css'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class MapaSitio {

  // 🔹 Página seleccionada
  selectedPage: SiteItem | null = null;

  // 🔹 Lista de páginas
  items: SiteItem[] = [
    { title: 'Inicio', description: 'Página de inicio', path: '', section: 'Inicio', type: 'pagina' },
    { title: 'Menú', description: 'Menú principal', path: '/menu', section: 'Menú', type: 'pagina' },
    { title: 'Breadcrumbs', description: 'Estructura del sitio', path: '/breadcrumbs', section: 'Breadcrumbs', type: 'pagina' },
    { title: 'Elementos', description: 'Listado de elementos', path: '/elementos', section: 'Elementos', type: 'pagina' },
    { title: 'Mapa del sitio', description: 'Mapa completo del sitio', path: '/mapa', section: 'Mapa del sitio', type: 'pagina' }
  ];

  constructor(private router: Router) {}

  // 🔹 Ir a la página seleccionada
  goToPage(page: SiteItem | null) {
    if (page) {
      this.router.navigate([page.path]);
    }
  }

  // 🔹 Limpiar selección
  clear() {
    this.selectedPage = null;
  }
}
