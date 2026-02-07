// Tipo para página o sección
export type SiteItemType = 'pagina' | 'seccion';

// Interface del item
export interface SiteItem {
  id: string;
  title: string;
  description: string;   // descripción profesional de para qué sirve
  path: string;          // ruta de Angular
  type: SiteItemType;    // para filtrar búsqueda avanzada
  seccion: string;       // categoría o sección
  keywords: string[];    // palabras clave para búsqueda
  otro?: string;         // opcional
}

// Índice del sitio
export const SITE_INDEX: SiteItem[] = [
  {
    id: 'inicio',
    title: 'Inicio',
    description: 'Página principal del sitio de práctica.',
    path: '/',
    type: 'pagina',
    seccion: 'Estructura del sitio',
    keywords: ['inicio', 'home']
  },
  {
    id: 'elementos',
    title: 'Elementos del Sitio',
    description: 'Identifica los elementos del sitio como header, footer y layout principal.',
    path: '/elementos',
    type: 'pagina',
    seccion: 'Estructura del sitio',
    keywords: ['elementos', 'sitio', 'header', 'footer', 'main', 'layout']
  },
  {
    id: 'menu',
    title: 'Menú',
    description: 'Contiene los elementos principales del menú web y su utilidad en la navegación.',
    path: '/menu',
    type: 'pagina',
    seccion: 'Navegación',
    keywords: ['menu', 'navegacion', 'navbar', 'link', 'botones']
  },
  {
    id: 'busqueda',
    title: 'Búsqueda',
    description: 'Permite buscar y explorar todas las páginas y secciones del sitio por título, descripción o palabras clave.',
    path: '/busqueda',
    type: 'pagina',
    seccion: 'Herramientas',
    keywords: ['busqueda', 'explorar', 'filtrar', 'navegacion', 'keywords']
  },
  {
    id: 'mapa-sitio',
    title: 'Mapa del Sitio',
    description: 'Visualiza la estructura completa del sitio, con páginas y secciones jerarquizadas para fácil navegación.',
    path: '/mapa',
    type: 'pagina',
    seccion: 'Herramientas',
    keywords: ['mapa', 'estructura', 'sitio', 'navegacion', 'jerarquia']
  }
];
