import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  // Controladores para las demostraciones interactivas
  activeTab: string = 'horizontal'; // horizontal | sidebar | mobile
  isSidebarCollapsed: boolean = false;
  isMobileMenuOpen: boolean = false;

  // Datos simulados para los menús de ejemplo
  demoLinks = [
    { label: 'Perfil', icon: 'bx-user' },
    { label: 'Ajustes', icon: 'bx-cog' },
    { label: 'Seguridad', icon: 'bx-shield' },
    { label: 'Notificaciones', icon: 'bx-bell' }
  ];

  constructor() { }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
