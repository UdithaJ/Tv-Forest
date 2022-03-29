<template>
  <div>
    <v-card class="flexcard" height="100%">
      <v-toolbar
          color="transparent"
          dark
      >
        <v-toolbar-title>Collect your favourites</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="title"
            style="margin-top: 25px"
            label="Search title and add to grid"
            placeholder="Search title and add to grid"
            prepend-icon="mdi-magnify"
            outlined
            dense
            @input="this.debounceSearch"
        ></v-text-field>
      </v-toolbar>

      <v-toolbar v-if="title !== null"
          color="blue"
          dark
          height="40px"
      >
        <v-spacer />
        <v-toolbar-title>Search result for {{title}}</v-toolbar-title>
        <v-spacer />
      </v-toolbar>

      <NotFound v-if="title !== null && tvShows.length === 0"></NotFound>

      <v-slide-group v-if="tvShows.length !== 0 && title !== null"
                     v-model="model"
                     class="pa-4"
                     active-class="success"
                     show-arrows
      >
        <v-slide-item v-for="tvShow in tvShows" :key="tvShow.show.id"

        >
          <v-card
              height="400"
              width="250"
              class="ma-4"
          >
            <v-img
                :src="tvShow.show.image.original"
                height="200px"
            ></v-img>

            <v-card-title>
              {{ tvShow.show.name }}
            </v-card-title>

            <v-card-subtitle v-html="tvShow.show.summary.substring(0,30) + '...'">
            </v-card-subtitle>

            <v-card-actions>
              <v-btn v-if="!isAdded(tvShow)"
                     color="orange lighten-2"
                     text
                     @click="addToFavourite(tvShow)"
              >
                Add To Favourite
              </v-btn>

              <v-row justify="space-around">
                <v-icon v-if="isAdded(tvShow)"
                        large
                        color="red"
                >
                  mdi-heart
                </v-icon>
              </v-row>

            </v-card-actions>

          </v-card>
        </v-slide-item>
      </v-slide-group>

      <v-toolbar
          color="amber"
          dark
          height="40px"
      >
        <v-spacer />
        <v-toolbar-title class="ju">My Collection</v-toolbar-title>
        <v-spacer />
      </v-toolbar>

      <EmptyCollection v-if="favourites.length < 1"></EmptyCollection>

      <v-container>
        <v-row v-if="favourites.length !== 0"
               no-gutters
        >
          <v-col
              v-for="tvShow in favourites"
              :key="tvShow.show.id"
          >
            <v-card
                class="mx-auto"
                max-width="344"
                height="400"
                style="margin-bottom: 10px"
                color="#9A9595"
            >
              <v-img
                  :src="tvShow.show.image.original"
                  height="200px"
              >
                <v-app-bar
                    flat
                    color="transparent"
                >
                  <v-spacer></v-spacer>

                  <v-btn
                      color="white"
                      icon
                      @click="removeFromFavourites(tvShow)"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-app-bar>

              </v-img>

              <v-card-title>
                {{ tvShow.show.name }}
              </v-card-title>

              <v-card-subtitle v-html="tvShow.show.summary.substring(0,150) + '...'">
              </v-card-subtitle>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

  </div>
</template>

<script>
import axios from "axios";
import NotFound from "@/components/NotFound";
import debounce from "lodash/debounce";
import EmptyCollection from "@/components/EmptyCollection";

export default {
  name: "TvShows",
  components: {EmptyCollection, NotFound},
  data() {
    return {
      tvShows: [],
      favourites: [],
      title: null,
    }
  },

  methods: {
    getTvShows() {
      console.log(this.title)
      if (this.title !== null) {
        axios.get('https://api.tvmaze.com/search/shows?q=' + this.title).then(response => {
          this.tvShows = response.data
        })
      } else {
        this.tvShows = [];
      }
    },
    debounceSearch: debounce(function () {
      this.getTvShows();
    }, 500),
    addToFavourite(tvShow) {
      this.favourites.push(tvShow);
    },
    isAdded(tvShow) {
      const show = this.favourites.find(show => {
        return show.show.id === tvShow.show.id;
      });
      return !!show;
    },
    removeFromFavourites(tvShow) {
      const index = this.favourites.findIndex(show =>
          show.show.id === tvShow.show.id
      );
      if (index > -1) {
        this.favourites.splice(index, 1);
      }
    }
  },

  mounted() {

  }

}
</script>

<style scoped>

</style>