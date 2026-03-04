<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="flip-up")
        span 1
      h1 Técnicas de comprensión lectora
    
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
