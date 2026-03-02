<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Aplicando técnicas de análisis textual',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar las técnicas de comprensión lectora, los niveles de análisis textual y las competencias de lectura crítica aplicadas a diversos tipos de textos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el proceso cognitivo fundamental que implica la comprensión lectora?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Memorizar palabras sin establecer relaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Decodificar palabras de manera mecánica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ignorar el contexto histórico y cultural del autor del texto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar ideas principales, relaciones y construir significados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuántos niveles progresivos de comprensión textual existen?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dos niveles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuatro niveles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tres niveles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cinco niveles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'El nivel de comprensión que permite entender lo que el autor comunica explícitamente se denomina:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nivel inferencial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nivel crítico-valorativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nivel literal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Nivel metacognitivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'El nivel inferencial de comprensión lectora se caracteriza por:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Copiar textualmente lo que dice el autor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Descubrir información implícita deduciendo intenciones comunicativas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Rechazar toda interpretación personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Memorizar datos textuales sin aplicar análisis crítico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué permite desarrollar el nivel crítico-valorativo de comprensión lectora?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar críticamente la validez del contenido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo leer de manera superficial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aceptar toda información sin cuestionamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el análisis personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'La técnica del subrayado consiste en:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Marcar todo el texto sin distinción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar información relevante del texto analizado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Copiar el texto completo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Destacar las ideas fundamentales del texto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Al aplicar la técnica del subrayado, se deben marcar principalmente:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Todos los conectores del texto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo las palabras difíciles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Verbos, sustantivos y adjetivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Únicamente los artículos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la función principal de la idea principal en un párrafo?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decorar el texto sin aportar contenido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Expresar lo fundamental de la materia expuesta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Repetir información secundaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Confundir al lector.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'Las frases secundarias en un párrafo tienen como función:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contradecir la idea principal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reforzar y ampliar la idea principal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la coherencia textual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la claridad del mensaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál signo de puntuación marca ampliaciones o explicaciones de la idea principal?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La coma (,).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El punto y coma (;).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El punto seguido (.).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los dos puntos (:).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuántas competencias fundamentales conforman la lectura crítica?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dos competencias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuatro competencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cinco competencias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tres competencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La competencia que consiste en identificar y comprender los contenidos locales de un texto se refiere a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reflexionar sobre el contenido global.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comprender elementos explícitos del texto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evaluar la validez de los argumentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Relacionar el texto con otros textos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué implica comprender cómo se articulan las partes de un texto para darle sentido global?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Leer solo fragmentos aislados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ignorar la estructura del texto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Relacionar varios elementos del texto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Enfocarse únicamente en palabras sueltas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'La competencia de reflexión crítica incluye:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aceptar toda información sin análisis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evaluar argumentos y estrategias del texto',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Copiar textualmente el contenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rechazar todo tipo de argumentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'Para identificar la intencionalidad de una oración, se debe:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar el verbo y matices comunicativos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ignorar el contexto comunicativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Leer solo palabras aisladas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar toda interpretación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué estrategia permite reconocer la estructura lógica de un texto?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar los títulos y subtítulos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar el procedimiento organizativo usado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Leer sin prestar atención a la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar toda secuencia lógica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: 'Antes de iniciar la lectura de un texto, se debe:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Leer sin preparación previa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ignorar títulos y subtítulos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar una exploración preliminar del texto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Memorizar sin comprender.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué elementos conforman un texto en orden descendente?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Palabras, oraciones, párrafos, apartados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Apartados, párrafos, oraciones y palabras',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo palabras y oraciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente párrafos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: 'El automonitoreo de la comprensión lectora consiste en:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verificar autónomamente el proceso de comprensión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Depender únicamente de evaluaciones externas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Leer sin reflexionar sobre la comprensión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ignorar las dificultades de comprensión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito fundamental de desarrollar pensamiento crítico mediante la lectura?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Memorizar información sin cuestionamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar y participar reflexivamente en contextos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aceptar toda información sin análisis.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la construcción del conocimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
