<template>
  <v-card color="black" class="md-layout-item md-size-50 md-small-size-100">
    <div class="google-maps"><iframe width="100%" height="600"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=eBEYONDS%20Digital%20Marketing,%20Avissawella%20Road,%20Pannipitiya+(Your%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">hiking gps</a></iframe></div>

  </v-card>
</template>

<script>
export default {
  name: "MapLocation",
}
</script>

<style scoped>
.google-maps {
  position: relative;
  padding-bottom: 75%;
height: 0;
  overflow: hidden;
}
.google-maps iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>