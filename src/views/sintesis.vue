<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de los principales contenidos desarrollados en este componente formativo, organizados en cinco dimensiones complementarias: técnicas de comprensión lectora, estrategias de lectura, niveles de lectura, análisis de oraciones y uso de técnicas de lectura. Este esquema integra los procesos cognitivos, las estrategias metodológicas y las habilidades para desarrollar una comprensión lectora activa y crítica que permita interpretar, evaluar y construir significados en diversos contextos académicos, laborales y cotidianos.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis se organiza en un esquema jerárquico centrado en la comprensión lectora mediante un análisis crítico. Desde el concepto central se derivan ejes como técnicas y estrategias de lectura, niveles de lectura y análisis de oraciones. La estructura muestra la relación entre estos procesos para fortalecer la reflexión y el control del proceso lector. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
