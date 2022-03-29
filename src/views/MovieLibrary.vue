<template>
  <div>
  <NavBar/>
  <TvShows/>
  <ContactForm/>
  <AppFooter/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import TvShows from "@/components/TvShows";
import AppFooter from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
export default {
  name: "MovieLibrary",
  components: {
    NavBar,
    ContactForm,
    AppFooter,
    TvShows,
  }
}
</script>

<style scoped>

</style>