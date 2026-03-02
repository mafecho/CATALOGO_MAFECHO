<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="flip-up")
        span 1
      h1 Técnicas de comprensión lectora

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b  bloque_texto_g-left] es un componente que se utiliza para mostrar un bloque de texto con una imagen de fondo. Este componente es útil para resaltar información importante o para presentar contenido de manera visualmente atractiva. El bloque de texto se superpone a la imagen de fondo, lo que permite destacar el mensaje que se desea transmitir. Es comúnmente utilizado en sitios web, blogs y aplicaciones para mejorar la presentación del contenido y captar la atención del usuario.
        

    .row.align-items-center.justify-content-center.mt-4
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-8(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/temas/1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p En el proceso


    .row
          .col-12
            .p-5
              .row.align-items-center.bg-3
                .col-lg-4.d-lg-block.d-none
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/carrusel/carrusel_01.png',  style='width: 396px').m-auto
    
                .col-lg-8
                  SlyderF(columnas="col-lg-6 col-xl-4")
                    .tarjeta.bg-9.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                      p.text-center.mb-0 Explicar las características de algo (describir).
                      
                    .tarjeta.bg-9.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                      p.text-center.mb-0 Identificar los elementos principales de esas características (definir).
    
                    .tarjeta.bg-9.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                      p.text-center.mb-0 Reconocer las distintas categorías, grupos y subgrupos a los que pertenece algo (clasificar).
    
                    .tarjeta.bg-9.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                      p.text-center.mb-0 Descubrir semejanzas y diferencias entre dos cosas (comparar).
    
                    .tarjeta.bg-9.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                      p.text-center.mb-0 Llegar a una ley general a partir de ejemplos particulares (inducir).
    
                    .tarjeta.bg-9.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                      p.text-center.mb-0 Realizar operaciones lógicas para llegar a conclusiones (deducir).
                    
                    .tarjeta.bg-9.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                      p.text-center.mb-0 Separar los distintos elementos que componen una estructura (analizar).
    
                    .tarjeta.bg-9.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/componentes/ej-05.svg', alt='').img100.m-auto
                      p.text-center.mb-0 Extraer lo más importante de un todo (sintetizar).    
    

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




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
