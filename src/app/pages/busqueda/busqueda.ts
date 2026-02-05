import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SITE_INDEX } from '../../data/site-index';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './busqueda.html',
  styleUrl: './busqueda.css',
})
export class Busqueda {
  // ... resto del código

  // 1. Cargamos todos los datos originales
  allResults = SITE_INDEX;

  // 2. Esta es la lista que se mostrará en el HTML (la que se filtra)
  filteredResults = [...this.allResults];

  // 3. Variables para controlar el estado actual
  searchTerm: string = '';
  currentCategory: string = 'Todos';

  // Opcional: Lista de categorías para generar los botones dinámicamente si prefieres
  categories: string[] = ['Todos', 'Informática', 'Videojuegos', 'Anime'];

  constructor() { }

  ngOnInit(): void {
    // Inicialización si fuera necesaria
  }

  // --- MÉTODOS DE EVENTOS ---

  /**
   * Se ejecuta cada vez que el usuario escribe en el input
   */
  onSearch(event: any): void {
    this.searchTerm = event.target.value;
    this.applyFilters();
  }

  /**
   * Se ejecuta al hacer clic en un botón de categoría (chip)
   */
  selectCategory(category: string): void {
    this.currentCategory = category;
    this.applyFilters();
  }

  // --- LÓGICA CORE ---

  /**
   * El cerebro del buscador: Combina el texto y la categoría
   */
  applyFilters(): void {
    const term = this.searchTerm.toLowerCase().trim();

    this.filteredResults = this.allResults.filter(item => {
      // Paso A: ¿Coincide la categoría?
      const matchesCategory = this.currentCategory === 'Todos' || item.section === this.currentCategory;

      // Paso B: ¿Coincide el texto? (Buscamos en Título, Descripción y Tags)
      // Usamos 'includes' para encontrar coincidencias parciales
      const matchesTerm =
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.keywords.some(tag => tag.toLowerCase().includes(term));

      // El item debe cumplir AMBAS condiciones
      return matchesCategory && matchesTerm;
    });
  }
}