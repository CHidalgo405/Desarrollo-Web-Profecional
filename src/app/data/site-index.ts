export type SiteItemType = 'pagina' | 'seccion';

export type SiteItem = {
  id: string;
  title: string;
  description: string;
  path: string;          // ruta Angular, ej: '/menu'
  type: SiteItemType;    // para filtrar (búsqueda avanzada)
  section: string;       // para filtrar por tema/sección
  keywords: string[];    // búsqueda simple
  otro?: String;// el simbolo de interrogación indica que el atributo puede ser opcional
};

export const SITE_INDEX: SiteItem[] = [
  {
    id: '1',
    title: 'Arquitectura de Software en Videojuegos',
    section: 'Informática',
    description: 'Aprende cómo los patrones de diseño ECS (Entity Component System) optimizan el rendimiento en motores como Unity y Unreal.',
    path: '/articulos/arquitectura-videojuegos',
    type: 'pagina',
    keywords: ['Desarrollo', 'Backend', 'Patrones', 'Informática']
  },
  {
    id: '2',
    title: 'Análisis Narrativo: NieR Automata',
    section: 'Videojuegos',
    description: 'Explorando el existencialismo y la inteligencia artificial a través de la narrativa no lineal de Yoko Taro.',
    path: '/reviews/nier-automata',
    type: 'pagina',
    keywords: ['RPG', 'Filosofía', 'Japón', 'Videojuegos']
  },
  {
    id: '3',
    title: 'Guía de Optimización Angular 17+',
    section: 'Informática',
    description: 'Mejora el LCP y CLS de tu aplicación web utilizando Signals y SSR (Server-Side Rendering).',
    path: '/tutoriales/angular-performance',
    type: 'pagina',
    keywords: ['Frontend', 'Web', 'Google', 'Informática']
  },
  {
    id: '4',
    title: 'Top 10 Animes Cyberpunk',
    section: 'Anime',
    description: 'Desde Akira hasta Cyberpunk: Edgerunners. Una lista curada de distopías tecnológicas visualmente impactantes.',
    path: '/listas/anime-cyberpunk',
    type: 'pagina',
    keywords: ['Sci-Fi', 'Estética', 'Recomendaciones', 'Anime']
  },
  {
    id: '5',
    title: 'El impacto de la IA en el Diseño UX',
    section: 'Informática',
    description: 'Cómo las herramientas generativas están cambiando el flujo de trabajo de los diseñadores de interfaces.',
    path: '/articulos/ia-ux-design',
    type: 'pagina',
    keywords: ['IA', 'Diseño', 'Futuro', 'Informática']
  },
  {
    id: '6',
    title: 'Secretos de Level Design en Hollow Knight',
    section: 'Videojuegos',
    description: 'Cómo crear mapas interconectados que guíen al jugador sin necesidad de tutoriales explícitos.',
    path: '/devlog/hollow-knight-design',
    type: 'pagina',
    keywords: ['Metroidvania', 'Indie', 'Arte', 'Videojuegos']
  }
];