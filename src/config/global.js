export default {
  global: {
    Name: 'CATALOGO MAFECHO',
    Description:
      'Este catalogo comprende una amplia variedad de snippets de código, recursos y herramientas relacionados con el desarrollo web, diseño gráfico, programación, entre otros temas relevantes en el ámbito tecnológico. El objetivo es proporcionar a los usuarios un recurso completo y actualizado para facilitar su aprendizaje y desarrollo profesional.',

    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnicas de comprensión lectora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estrategias de lectura',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Señales de organización textual',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Técnica del subrayado',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comprensión global de textos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comprensión específica de textos ',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Análisis de oraciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Estrategias para identificar la intencionalidad comunicativa',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estrategias para identificar relaciones entre partes',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Estrategias para identificar la idea subyacente ',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Competencias de lectura crítica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Contenidos locales del texto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Sentido global del texto',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Reflexión y evaluación textual',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Aplicación de técnicas de lectura',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },

      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Actividad cognitiva',
      significado:
        'proceso mental para analizar, relacionar y reflexionar sobre información.',
    },
    {
      termino: 'Conector',
      significado: 'palabra que une ideas y muestra su relación.',
    },
    {
      termino: 'Enfoque crítico',
      significado:
        'capacidad de evaluar y emitir juicios sobre un texto leído.',
    },
    {
      termino: 'Función persuasiva',
      significado:
        'uso del lenguaje para influir en ideas o acciones del lector.',
    },
    {
      termino: 'Idea subyacente',
      significado: 'mensaje implícito que el autor comunica indirectamente.',
    },
    {
      termino: 'Inferencia',
      significado: 'conclusión obtenida a partir de información del texto.',
    },
    {
      termino: 'Lectura crítica',
      significado: 'lectura reflexiva para analizar y valorar un texto.',
    },
    {
      termino: 'Metacognitivo',
      significado:
        'proceso para evaluar y controlar la propia forma de aprender.',
    },
    {
      termino: 'Propósito comunicativo',
      significado: 'intención del autor al producir un texto.',
    },
    {
      termino: 'Sentido global',
      significado:
        'visión total del texto a partir de la relación de sus ideas.',
    },
    {
      termino: 'Sentido global',
      significado:
        'visión total del texto a partir de la relación de sus ideas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Carriazo, M. M., & Martínez, L. (2010). <em>Curso de lectura crítica</em>: <em>Estrategias de comprensión lectora</em>. Autor. Ecuador.',
      link: '',
    },
    {
      referencia:
        'Cassany, D. (2003). Aproximaciones a la lectura crítica: teoría, ejemplos y reflexiones. <em>Tarbiya:</em> <em>Revista de Investigación e Innovación Educativa</em>, (32), pp. 1-20.',
      link: 'https://revistas.uam.es/tarbiya/article/viewFile/7275/7623',
    },
    {
      referencia:
        'De Zubiría, M. (1995). <em>Teoría de las seis lecturas</em>: Mecanismos del aprendizaje semántico. <em>Tomo 1: Preescolar y primaria</em>. FAMDI. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'De Zubiría, M. (2002). <em>Enfoques pedagógicos y didácticas contemporáneas</em>. Manuscrito no publicado.',
      link:
        'https://www.academia.edu/13959300/Enfoques_Pedag%C3%B3gicos_y_Did%C3%A1cticas_Contempor%C3%A1neas',
    },
    {
      referencia:
        'García, C., Gutiérrez, M. C., y Condemarín, E. (2000). <em>A estudiar se aprende</em>: <em>Metodología de estudio. </em>(4.ª ed.). Alfaomega. Chile.',
      link: '',
    },
    {
      referencia:
        'Hernández, M. T., y Vélez, A. (Eds.). (2012). <em>Método lúdico de comprensión lectora</em> (Vol. 2). Fundación Lee. Colombia.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano para la Evaluación de la Educación. (2016). <em>Módulo de lectura crítica: Guía de orientación Saber Pro 2016-2.</em>',
      link: '',
    },
    {
      referencia:
        'Serrano de Moreno, S., & Madrid de Forero, A. (2007). Competencias de lectura crítica: Una propuesta para la reflexión y la práctica. <em>Acción Pedagógica</em>, (16), pp. 58-68.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/2968602.pdf',
    },
    {
      referencia:
        'Se ajusta el contenido del documento según Planeación pedagógica y normas APA 7 edición.',
      link: '',
    },
    {
      referencia:
        'Serrano de Moreno, S., & Madrid de Forero, A. (2007). Competencias de lectura crítica: Una propuesta para la reflexión y la práctica. <em>Acción Pedagógica</em>, (16), pp. 58-68.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/2968602.pdf',
    },
    {
      referencia:
        'Se ajusta el contenido del documento según Planeación pedagógica y normas APA 7 edición.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED) ',
          centro: 'Dirección General  ',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jenny Paola García Cárdenas',
          cargo: 'Experta temática',
          centro: 'Regional Risaralda ',
        },
        {
          nombre: 'Didier Andrés Ospina Osorio',
          cargo: 'Asesor pedagógico',
          centro: 'Regional Risaralda ',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
