<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero(data-aos="flip-up")
        span
          i.fas.fa-info
      h1 Introducción

    .titulo-tres.mt-5: h3 bloque_texto_g-left

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b  bloque_texto_g-left] es un componente que se utiliza para mostrar un bloque de texto con una imagen de fondo. Este componente es útil para resaltar información importante o para presentar contenido de manera visualmente atractiva. El bloque de texto se superpone a la imagen de fondo, lo que permite destacar el mensaje que se desea transmitir. Es comúnmente utilizado en sitios web, blogs y aplicaciones para mejorar la presentación del contenido y captar la atención del usuario.
        

    .titulo-tres.mt-5: h3 bloque_texto_g-right

    .bloque-texto-g.bloque-texto-g--inverso.bg-base.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor.


    .titulo-tres.mt-5: h3 img_small_text 

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/temas/doctor.svg', style='width: 100px').m-auto
      
      .col
        p lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem.
              

    .titulo-tres.mt-5: h3 video 

    .row.justify-content-center.align-items-center.mt-4           
      .col-lg-12
        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



    .titulo-tres.mt-5: h3 tarj_avatar_tipo_b

    .row.justify-content-center
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop').m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Resolución 0773 de 2020]


      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop').m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Resolución 0773 de 2020]


      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop').m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Resolución 0773 de 2020]




    .titulo-tres.mt-5: h3 img_carrusel_tarjetas

    .row
      .col-12
        .p-5
          .row.align-items-center.bg-3
            .col-lg-4.d-lg-block.d-none
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/carrusel/carrusel_01.png',  style='width: 396px').m-auto

            .col-lg-8
              SlyderF(columnas="col-lg-6 col-xl-4")
                .tarjeta.bg-base3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Explicar las características de algo (describir).
                  
                .tarjeta.bg-base3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Identificar los elementos principales de esas características (definir).

                .tarjeta.bg-base3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Reconocer las distintas categorías, grupos y subgrupos a los que pertenece algo (clasificar).

                .tarjeta.bg-base3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Descubrir semejanzas y diferencias entre dos cosas (comparar).

                .tarjeta.bg-base3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Llegar a una ley general a partir de ejemplos particulares (inducir).

                .tarjeta.bg-base3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Realizar operaciones lógicas para llegar a conclusiones (deducir).
                
                .tarjeta.bg-base3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Separar los distintos elementos que componen una estructura (analizar).

                .tarjeta.bg-base3.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Extraer lo más importante de un todo (sintetizar).    
    

    .titulo-tres.mt-5: h3 li_icono

    .row.mt-4.bg-base.p-3.bg-r8
      .col-12
        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 La práctica diaria es el único sistema de perfeccionamiento de la lectura.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Antes de iniciar la lectura, se debe hojear el texto. La exploración preliminar del texto es el medio ideal para mejorar la comprensión.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Es necesario contar con condiciones óptimas para consultar los textos: buena iluminación, postura adecuada, la distancia adecuada del papel y una actitud positiva.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Cuanto má

       
    .titulo-tres.mt-5: h3 li_sencilla

    .row.align-items-center.mt-4
      .col-lg-12.mb-lg-0
        ul.lista-ul--color.bg-base.bg-r8.p-4
          li
            i.lista-ul__vineta
            p.mb-0 Tener un fin claro y específico.
          li
            i.lista-ul__vineta
            p.mb-0 Tener experiencia cognitiva con la ejecución de las operaciones del pensamiento.
          li
            i.lista-ul__vineta
            p.mb-0 Saber organizar y estructurar la información (orden secuencial de ideas).   


    .titulo-tres.mt-5: h3 li_letras

    .row.align-items-center.bg-base.bg-r8.p-4
      .col-12
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span.text-black A
            p.mb-0 Si el texto es complejo:

          li 
            .lista-ol--cuadro__vineta
              span.text-black B
            p.mb-0 Si el texto es complejo:

          li 
            .lista-ol--cuadro__vineta
              span.text-black C
            p.mb-0 Si el texto es complejo:

    .titulo-tres.mt-5: h3 tarjetas_over

    .row.justify-content-center.mt-4
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.clr-paleYellow.p-4.text-center.bg-base2
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/componentes/ej-05.svg', alt='Estructura lógica', style='width: 80px')
          h4.mb-0 Estructura lógica

      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.clr-paleYellow.p-4.text-center.bg-base2
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/componentes/ej-05.svg', alt='Ideas generales', style='width: 80px')
          h4.mb-0 Ideas generales

      .col-lg-4
        .tarjeta.clr-paleYellow.p-4.text-center.bg-base2
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/componentes/ej-05.svg', alt='Ideas principales', style='width: 80px')
          h4.mb-0 Ideas principales


    .titulo-tres.mt-5: h3 tarjetas_sin_over

    .row.justify-content-center
      .col-lg-4
        .crd.bg-base.bg-r8.p-4.text-center.h-100
          figure.mb-2(data-aos="zoom-in")
            img(src='@/assets/componentes/ej-05.svg', alt='Inicio párrafo', style='width: 80px').m-auto
          p.mb-0
            strong Al inicio del párrafo

      .col-lg-4.mt-lg-0.mt-4
        .crd.bg-base.bg-r8.p-4.text-center.h100
          figure.mb-2(data-aos="zoom-in")
            img(src='@/assets/componentes/ej-05.svg', alt='Parte central', style='width: 80px').m-auto
          p.mb-0
            strong En la parte central del párrafo

      .col-lg-4.mt-lg-0.mt-4
        .crd.bg-base.bg-r8.p-4.text-center.h-100
          figure.mb-2(data-aos="zoom-in")
            img(src='@/assets/componentes/ej-05.svg', alt='Final párrafo', style='width: 80px').m-auto
          p.mb-0
            strong Al final del párrafo
            

    .titulo-tres.mt-5: h3 slider_tipo_A

    SlyderA.p-4.bg-base.bg-r8(tipo="b")
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          h4 Nivel literal
          p Consiste en identificar y comprender todo aquello que el autor comunica de manera explícita en el texto. Esto implica:
        
        .col-lg-6
          figure(data-aos="fade-down")
            img(src='@/assets/curso/temas/LT_01.png', style='width: 572px')

      .row.justify-content-center.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          h4 Nivel inferencial
          p Permite interpretar la intención comunicativa del autor más allá de lo explícito. En este nivel:
        
        .col-lg-6
          figure(data-aos="fade-down")
            img(src='@/assets/curso/temas/LT_01.png', style='width: 572px')

      .row.justify-content-center.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          h4 Nivel crítico-valorativo
          p Implica evaluar, valorar y juzgar tanto el contenido explícito como las inferencias del texto. Este nivel requiere:
        
        .col-lg-6
          figure(data-aos="fade-down")
            img(src='@/assets/curso/temas/LT_01.png', style='width: 572px')
            

    .titulo-tres.mt-5: h3 acordeon_tipoA

    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-base")
          .tarjeta.clr--pink02.p-4(titulo="Disposición")
            .row.align-items-center
              p texto

          div(titulo="Dimensión")
            .row.align-items-center
              p texto

          div(titulo="Dimensión")
            .row.align-items-center
              p texto

          div(titulo="Dimensión")
            .row.align-items-center
              p texto

          div(titulo="Dimensión")
            .row.align-items-center
              p texto
    

    .titulo-tres.mt-5: h3 acordeon_tipo_flecha

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.justify-content-center 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
            //-1ra pestaña
            .row(titulo="Coordinación del sector salud con medicina legal")
              p La articulación con el Instituto Nacional de Medicina Legal y Ciencias Forenses (INMLCF) debe desarrollarse bajo criterios de oportunidad, claridad de competencias y respeto por la autonomía de la víctima.
              
              p Para asegurar una actuación adecuada, deben observarse los siguientes principios:

            //-2da pestaña  
            .row(titulo="Posibles elementos probatorios")
              p Los posibles elementos probatorios son materiales o evidencias que pueden identificarse durante la atención en salud y que podrían aportar información relevante para la investigación judicial, sin afectar la prioridad asistencial ni la dignidad de la persona atendida.

              p Elementos que pueden identificarse durante la atención:
            
            //-3ra pestaña
            .row(titulo="Cadena de custodia y límites del rol del sector salud")
              p La cadena de custodia es el conjunto de procedimientos que garantizan la integridad y autenticidad de los elementos materiales probatorios desde su recolección hasta su análisis final. El sector salud participa únicamente en las etapas iniciales, dentro de los límites de su competencia.
              
              p Límites claros del rol del sector salud:

            //-4ra pestaña
            .row(titulo="Prevención de revictimización")
              p La revictimización en el proceso forense se presenta cuando la persona afectada es sometida a procedimientos innecesarios, repetitivos o invasivos que pueden profundizar el daño sufrido. En este contexto, el sector salud tiene la responsabilidad ética y profesional de prevenir activamente cualquier práctica que genere nuevas afectaciones durante la atención.
             
              p Acciones clave para prevenir la revictimización:


    .titulo-tres.mt-5: h3 podcast

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.bg-2
          figure(data-aos="zoom-in")
            img(src='@/assets/componentes/ej-05.svg', style="width: 80px").m-auto          
          .row.justify-content-center.g-0.p-4.bg-base
            .col-lg-10
              .tarjeta.bg-base.rounded-0.h-100
                .tarjeta.bg-white.p-4
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="Pódcast"
                  :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                )


    .titulo-tres.mt-5: h3 tab_pasos_icono

    TabsB.color-acento-botones.bg-2
      .py-4.py-md-5(titulo="Unidad" :icono="require('@/assets/componentes/ej-05.svg')")
        .row.p-4
          .col-md-5.mb-4.mb-md-0
            figure(data-aos="zoom-in-up")
              img(src='@/assets/curso/temas/LT_01.png', alt='Texto que describa la imagen')

          .col-md-7
            p Un párrafo debe desarrollar una sola idea central. Fácilmente se rompe la unidad cuando se introducen varias proposiciones principales o cuando se adicionan proposiciones que, en realidad, son ajenas al tema que se pretende desarrollar. Esta es una de las características que permite determinar si un párrafo está bien escrito o no. Si todas las oraciones subtemáticas se relacionan con la oración temática, entonces se afirma que el párrafo posee unidad.

      .py-4.py-md-5(titulo="Cohesión y coherencia" :icono="require('@/assets/componentes/ej-05.svg')")
        .row.p-4
          .col-md-5.mb-4.mb-md-0
            figure(data-aos="zoom-in-up")
              img(src='@/assets/curso/temas/LT_01.png', alt='Texto que describa la imagen')

          .col-md-7
            p Un párrafo no es un simple conjunto de oraciones aisladas o inconexas, sino una unidad intermedia de sentido, conformada por oraciones interrelacionadas sintáctica y semánticamente mediante los distintos mecanismos de cohesión (la referencia, la sustitución, la elipsis, los conectores, la repetición y los signos de puntuación) y las diversas formas de coherencia (lineal, global o pragmática). La organización de la estructura interna del párrafo determina su coherencia. Cuando los párrafos son cohesivos y coherentes, establecen apropiados vínculos sintácticos y lógicos semánticos con los otros párrafos y con la totalidad del texto.

      .py-4.py-md-5(titulo="Extensión" :icono="require('@/assets/componentes/ej-05.svg')")
        .row.p-4
          .col-md-5.mb-4.mb-md-0
            figure(data-aos="zoom-in-up")
              img(src='@/assets/curso/temas/LT_01.png', alt='Texto que describa la imagen')

          .col-md-7
            p No existen parámetros 


    .titulo-tres.mt-5: h3 tab_pasos_titulo

    TabsC.color-acento-botones
      .py-3.py-md-4.bg-base(titulo="Se escribe con b")
        .row.p-4
          .col-md-12.mb-4.mb-md-0
            p La letra b siempre representa el fonema labial sonoro de barco, beso, blusa o abuelo. Notas orientadoras sobre el uso de la letra b se escriben con b:


      .py-3.py-md-4.bg-base(titulo="Se escribe con v")
        .row.p-4
          .col-md-12.mb-4.mb-md-0
            p La letra v siempre representa el fonema labial sonoro de vaso, vida, invadir o cavar. Notas orientadoras sobre el uso de la letra v. Se escribe con v:


    .titulo-tres.mt-5: h3 img_con_banner

    .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-base(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/temas/1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. In fermentum facilisis massa, a consequat purus viverra a. Donec vel mauris quam. Aliquam convallis sollicitudin purus, sed mattis est convallis id. Donec sed


    .titulo-tres.mt-5: h3 img_con_banner_rigth

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-base.bg-r8(data-aos="fade-right")             
              .col-lg.p-4
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. In fermentum facilisis massa, a consequat purus viverra a. Donec vel mauris quam. Aliquam convallis sollicitudin purus, sed mattis est convallis id. Donec sed 
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/temas/1.png', alt='', class="w-100 h-100 object-fit-cover")



    .titulo-tres.mt-5: h3 figura_+_imgMovil

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 3.
          span Clasificación de las vocales según su apertura
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/temas/2.svg',
            alt='Figura 3. Clasificación de las vocales según su apertura. Esquema que muestra la clasificación de las vocales: “i” y “u” como vocales cerradas; “e” y “o” como vocales semicerradas o semiabiertas; y “a” como vocal abierta, indicando su grado de apertura en la articulación.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/temas/2m.svg',
            alt='Figura 3. Clasificación de las vocales según su apertura. Esquema que muestra la clasificación de las vocales: “i” y “u” como vocales cerradas; “e” y “o” como vocales semicerradas o semiabiertas; y “a” como vocal abierta, indicando su grado de apertura en la articulación.'
          )


    .titulo-tres.mt-5: h3 banner_color

    .row.justify-content-center
      .col-lg-10
        .row.bg-base.bg-r4.p-3.align-items-center
          .col-lg-2.d-lg-block.d-none(data-aos="fade-down")
            figure(data-aos="fade-left")
              img(src="@/assets/componentes/ej-05.svg", alt="", style="width: 80px").m-auto
          .col-lg-10
            p.mb-0 Se escriben con y las palabras que terminan con el sonido equivalente a i cuando este va precedido de una vocal con la que forma diptongo, o de dos vocales con las que forma triptongo.
            p Ejemplos: ay, estoy, verdegay, Bombay, buey, ley, rey, convoy, soy, Godoy, muy, Uruguay, Garay. Existen algunas excepciones, como saharaui o bonsái.
        .row.bg-base3.p-3.align-items-center
          .col-lg-2.d-lg-block.d-none(data-aos="fade-down")
            figure(data-aos="fade-left")
              img(src="@/assets/componentes/ej-05.svg", alt="", style="width: 80px").m-auto
          .col-lg-10
            p.mb-0 La conjunción copulativa y se escribe con esta letra.
            p Ejemplos: Juan y María; cielo y tierra; este y aquel. Esta conjunción adopta la forma e ante palabras que comienzan por el fonema vocálico correspondiente a i (ciencia e historia; catedrales e iglesias), salvo cuando dicha vocal forma diptongo (cobre y hierro; estratosfera y ionosfera).
        .row.bg-base.p-3.align-items-center
          .col-lg-2.d-lg-block.d-none(data-aos="fade-down")
            figure(data-aos="fade-left")
              img(src="@/assets/componentes/ej-05.svg", alt="", style="width: 80px").m-auto
          .col-lg-10
            p Las palabras que presentan el sonido palatal sonoro ante vocal se escriben con y, especialmente en los siguientes casos. En primer lugar, cuando este sonido aparece después de los prefijos ad-, dis- y sub-, como en adyacente, disyuntivo y subyugar. En segundo lugar, en algunas formas de los verbos caer, raer, creer, leer, poseer, proveer y sobreser, así como en los verbos terminados en -oir y -uir, por ejemplo: cayeran, leyendo, oyó, concluyó y atribuyera.
        .row.bg-base3.bg-r2.p-3.align-items-center
          .col-lg-2.d-lg-block.d-none(data-aos="fade-down")
            figure(data-aos="fade-left")
              img(src="@/assets/componentes/ej-05.svg", alt="", style="width: 80px").m-auto
          .col-lg-10
            p Asimismo, se escriben    


    .titulo-tres.mt-5: h3 img_text_img 

    .row.align-items-center
      .col-lg-8.bg-base.bg-r8.p-3

        figure
          img(src="@/assets/curso/temas/doctor.svg", alt="", style="width: 80px")

        p.mt-3 Las violencias sexuales constituyen un problema social y de salud pública debido a su alta prevalencia, a la diversidad de formas en que se manifiestan y a las graves consecuencias que generan en la salud y el bienestar de las personas, así como en sus familias y comunidades. Su impacto trasciende el ámbito individual y se extiende al tejido social, afectando la cohesión comunitaria y el desarrollo social.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/1.png', alt='', style="width: 390px").m-auto

    .titulo-tres.mt-5: h3 two_tarj_over 

    .row.justify-content-center.mt-4 
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-5.mb-4.mb-lg-0
            .tarjeta.clr-paleYellow.p-4.text-center.bg-base2.h-100
              .row.justify-content-center.mb-3
                .col-auto
                  .circle-morado
                    figure(data-aos="zoom-in")
                      img(src='@/assets/componentes/ej-05.svg' style='width: 80px')
              p.text-start De acuerdo con la Organización Mundial de la Salud (OMS), la violencia sexual se define como:
    
              p.text-start Todo acto sexual, intento de consumar un acto sexual, comentarios o insinuaciones sexuales no deseadas, o acciones orientadas a comercializar, utilizar o controlar la sexualidad de una persona, mediante coerción, intimidación, amenaza, fuerza física, abuso de poder u otros mecanismos que anulen o limiten la voluntad personal, independientemente de la relación entre la víctima y el agresor y del ámbito en el que ocurra.
    
          .col-lg-5.mb-4.mb-lg-0
            .tarjeta.clr-paleYellow.p-4.text-center.bg-base2.h-100
              .row.justify-content-center.mb-3
                .col-auto
                  .circle-morado
                    figure(data-aos="zoom-in")
                      img(src='@/assets/componentes/ej-05.svg', style='width: 80px')
              p.text-start En el marco normativo colombiano, la Ley 1257 de 2008 define la violencia sexual como:
    
              p.text-start Toda acción que cause daño


    .titulo-tres.mt-5: h3 tarj_img_small_text

    .row.justify-content-center.mt-4
      .row.justify-content-center
        .col-lg-2.d-flex.mt-4.mt-lg-0
          .crd.bg-base.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/temas/doctor.svg', style='width: 40px')
            p.mb-0 Derecho a la vida y a la integridad física y mental.
  
        .col-lg-2.d-flex.mt-4.mt-lg-0
          .crd.bg-base.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/temas/doctor.svg', style='width: 40px')
            p.mb-0 Derecho a la dignidad humana.
  
        .col-lg-2.d-flex.mt-4.mt-lg-0
          .crd.bg-base.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/temas/doctor.svg', style='width: 40px')
            p.mb-0 Derecho a la libertad y a la autonomía personal.

        .col-lg-2.d-flex.mt-4.mt-lg-0
          .crd.bg-base.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/temas/doctor.svg', style='width: 40px')
            p.mb-0 Derecho a la igualdad y a la no discriminación.
  
        .col-lg-2.d-flex.mt-4.mt-lg-0
          .crd.bg-base.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/temas/doctor.svg', style='width: 40px')
            p.mb-0 Derecho al libre desarrollo de la personalidad.
  
        .col-lg-2.d-flex.mt-4.mt-lg-0
          .crd.bg-base.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/temas/doctor.svg', style='width: 40px')
            p.mb-0 Derecho al más alto nivel posible de salud física y mental.


    .titulo-tres.mt-5: h3 linea_pasos_vertical

    .row.justify-content-center 
      .col-lg-8
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Contenido del registro")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  p.mb-0 Motivo
                li
                  i.lista-ul__vineta
                  p.mb-0 Evaluación
                li
                  i.lista-ul__vineta
                  p.mb-0 Procedimientos
                li
                  i.lista-ul__vineta
                  p.mb-0 Consentimientos
    
          .row(numero="2" titulo="Características del registro")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  p.mb-0 Claro
                li
                  i.lista-ul__vineta
                  p.mb-0 Pertinente
                li
                  i.lista-ul__vineta
                  p.mb-0 Libre
                li
                  i.lista-ul__vineta
                  p.mb-0 Respetuoso
    
          .row(numero="3" titulo="Finalidad del registro")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  p.mb-0 Garantizar
                li
                  i.lista-ul__vineta
                  p.mb-0 Facilitar
                li
                  i.lista-ul__vineta
                  p.mb-0 Favorecer
    
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/temas/1.png', alt='', style="width: 100%").m-auto


    .titulo-tres.mt-5: h3 banner_btn_descarga

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
             .row.align-items-center.bg-base.p-3.bg-r8
              .col-lg-2
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/temas/doctor.svg', style='width: 90px').m-auto             
              .col-lg-7
                h4 Titulo
                p texto 
              .col-lg-3
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download


    .titulo-tres.mt-5: h3 cajon_color

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p background con la esquina coloreada (Se deben agregar los estilos base)




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
