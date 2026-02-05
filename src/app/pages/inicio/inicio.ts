import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SITE_INDEX } from '../../data/site-index'; // Ajusta la ruta si es necesario
@Component({
  selector: 'app-inicio',
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit {

  // Tomamos los primeros 3 elementos para la sección de "Destacados"
  featuredContent = SITE_INDEX.slice(0, 3);

  constructor() { }

  ngOnInit(): void {
  }

}