import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SiteNode {
  label: string;
  url?: string;
  icon: string;
  description?: string;
  children?: SiteNode[];
  colorClass?: string; // Para diferenciar ramas (core, content, media)
}

@Component({
  selector: 'app-mapa-sitio',
  imports: [CommonModule, RouterLink],
  templateUrl: './mapa-sitio.html',
  styleUrl: './mapa-sitio.css',
})
export class MapaSitio {

  siteMapData: SiteNode[] = [
    {
      label: 'Inicio (Core)',
      url: '/',
      icon: 'bx-home-smile',
      colorClass: 'root-node',
      children: [
        {
          label: 'Estructura Web',
          icon: 'bx-layer',
          colorClass: 'branch-structure',
          children: [
            { label: 'Elementos HTML', url: '/elementos', icon: 'bx-code-block', description: 'Etiquetas y semántica básica.' },
            { label: 'Menú de Navegación', url: '/menu', icon: 'bx-list-ul', description: 'Estilos y lógica de menús.' },
            { label: 'Breadcrumbs', url: '/breadcrumbs', icon: 'bx-map-alt', description: 'Rastreo de ubicación.' }
          ]
        },
        {
          label: 'Exploración',
          icon: 'bx-radar',
          colorClass: 'branch-explore',
          children: [
            { label: 'Búsqueda Global', url: '/busqueda', icon: 'bx-search-alt', description: 'Motor de búsqueda con filtros.' },
            { label: 'Mapa del Sitio', url: '/mapa-sitio', icon: 'bx-sitemap', description: 'Usted está aquí.' }
          ]
        },
        {
          label: 'Categorías de Contenido',
          icon: 'bx-folder-open',
          colorClass: 'branch-content',
          children: [
            { label: 'Informática & Dev', url: '/busqueda', icon: 'bx-terminal' },
            { label: 'Videojuegos', url: '/busqueda', icon: 'bx-joystick' },
            { label: 'Anime', url: '/busqueda', icon: 'bx-tv' }
          ]
        }
      ]
    }
  ];

}