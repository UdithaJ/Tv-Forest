<template>
  <div>
    <v-card class="overflow-hidden">
      <v-card
          color="grey lighten-4"
          flat
          tile
      >
        <video autoplay muted loop id="HeaderVideo">
          <source :src="require('@/assets/HeaderVideo.mp4')" type="video/mp4">
        </video>
      <v-app-bar color="black" app >
        <v-avatar  size="200" :tile="true">
          <img :src="require('@/assets/LogoWhite.svg')" alt="logo">
        </v-avatar>
        <v-spacer></v-spacer>

        <template v-slot:img="{props}">
          <v-img
              v-bind="props"
          ></v-img>
        </template>

        <v-app-bar-nav-icon  @click="drawer = true" class="hidden-lg-and-up"
        ></v-app-bar-nav-icon>

          <v-tabs  class="d-none d-lg-block"
              v-model="tab"
             right
          >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
              v-for="link in links"
              :key="link.name"
              @click="changeTab(link)"
          >
            {{ link.name }}
          </v-tab>
          </v-tabs>


      </v-app-bar>
      </v-card>
      <v-spacer></v-spacer>
      <v-card
          color="black"
          dark
      >
        <v-card-title class="text-h3">
          MOVIE LIBRARY
        </v-card-title>
        <v-card-subtitle class="text-h7 text-left">dLorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua</v-card-subtitle>


      </v-card>


      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          right
      >
        <v-list
            nav
            dense
        >
          <v-list-item-group
          >
            <v-list-item v-for="(link, index) in links" :key="link.name">
              <v-list-item-title @click="tab = index" >{{ link.name }}</v-list-item-title>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>

  </div>
</template>

<script>
import router from '../router/index.js'
export default {
  name: "NavBar",
  data () {
    return {
      drawer: false,
      tab: 3,
      links: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Our Screens',
          path: '/our-screens'
        },
        {
          name: 'Schedule',
          path: '/schedule'
        },
        {
          name: 'Movie Library',
          path: '/movie-library'
        },
        {
          name: 'Location & Contact',
          path: '/location-contact'
        },
        {
          name: 'Gallery',
          path: '/gallery'
        }

      ],
    }
  },
  methods:{
    changeTab(link){
     router.push({name: link.name});
    },
  },



}
</script>

<style scoped>
</style>