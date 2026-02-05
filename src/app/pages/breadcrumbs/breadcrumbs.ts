import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  imports: [CommonModule],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {

  // La "ruta completa" posible en nuestra simulación
  fullPath = [
    { name: 'Inicio', icon: 'bx-home-smile', type: 'root' },
    { name: 'Sistema', icon: 'bx-server', type: 'folder' },
    { name: 'Configuración', icon: 'bx-cog', type: 'folder' },
    { name: 'Seguridad', icon: 'bx-shield', type: 'folder' },
    { name: 'Logs_Error.txt', icon: 'bx-file-blank', type: 'file' }
  ];

  // Nivel actual (Empieza en 0 = Inicio)
  currentLevel = 0;

  // Obtiene el array cortado hasta el nivel actual para mostrar el breadcrumb
  get activePath() {
    return this.fullPath.slice(0, this.currentLevel + 1);
  }

  // Simula entrar en la siguiente carpeta
  goDeeper() {
    if (this.currentLevel < this.fullPath.length - 1) {
      this.currentLevel++;
    }
  }

  // Simula hacer clic en un breadcrumb anterior
  jumpTo(index: number) {
    this.currentLevel = index;
  }

  // Reinicia la demo
  resetPath() {
    this.currentLevel = 0;
  }
}