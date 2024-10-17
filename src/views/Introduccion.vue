<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 El propósito de conocer los protocolos de cierre de caja es contribuir a realizar un correcto cierre de caja y entrega del puesto de pago al terminar la jornada laboral, teniendo en cuenta que #[b deben hacer entrega del dinero y de la documentación que soporte las transacciones u operaciones que se hayan realizado durante el día.] A continuación, observe el siguiente video en el que tendrá más información sobre el tema a desarrollar:

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12.col-md-12
        figure(data-aos="fade-right")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/F7029EC6sbo?si=2FzoNGmzHFW4C04p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Protocolos de cierre de caja: introducción
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
