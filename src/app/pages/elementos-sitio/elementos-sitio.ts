import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UiElement {
  title: string;
  category: 'Structure' | 'Action' | 'Typography' | 'Input';
  description: string; // El "Por qué"
  technical: string;   // El "Cómo"
  icon: string;
  demoType: string;    // Para saber qué mostrar en la vista previa
}

@Component({
  selector: 'app-elementos-sitio',
  imports: [CommonModule],
  templateUrl: './elementos-sitio.html',
  styleUrl: './elementos-sitio.css',
})
export class ElementosSitio {

  elements: UiElement[] = [
    {
      title: 'Glass Card (Contenedor)',
      category: 'Structure',
      description: 'El bloque fundamental del sitio. Se utiliza para agrupar contenido manteniendo la visibilidad del fondo animado, creando profundidad.',
      technical: 'Uso de background: rgba(30, 41, 59, 0.4) combinado con backdrop-filter: blur(10px) y un borde semitransparente.',
      icon: 'bx-layer',
      demoType: 'card'
    },
    {
      title: 'Botón de Neón',
      category: 'Action',
      description: 'Indica la acción principal. El brillo (glow) atrae la atención del usuario inmediatamente hacia la interacción más importante.',
      technical: 'CSS box-shadow con el color primario (#6366f1) y una transición en transform: translateY() al hacer hover.',
      icon: 'bx-mouse',
      demoType: 'button'
    },
    {
      title: 'Gradiente de Texto',
      category: 'Typography',
      description: 'Utilizado en títulos H1 para romper la monotonía del blanco y reforzar la identidad de marca "Futurista".',
      technical: 'background: linear-gradient(...) aplicado sobre el texto usando -webkit-background-clip: text y color: transparent.',
      icon: 'bx-font',
      demoType: 'text'
    },
    {
      title: 'Badges / Chips',
      category: 'Structure',
      description: 'Micro-componentes para categorizar contenido (Anime, Juegos, Dev) sin ocupar mucho espacio visual.',
      technical: 'Display inline-block con colores de fondo rgba() de baja opacidad específicos por categoría para codificación por color.',
      icon: 'bx-tag',
      demoType: 'badge'
    },
    {
      title: 'Input Flotante',
      category: 'Input',
      description: 'Barra de búsqueda que se integra en el header o cuerpo. Minimiza el ruido visual hasta que el usuario la necesita.',
      technical: 'Bordes transparentes que cambian de color al estado :focus-within y uso de iconos absolutos para ahorrar espacio.',
      icon: 'bx-text',
      demoType: 'input'
    }
  ];
}