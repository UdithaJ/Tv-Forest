<template>
  <v-footer
      dark
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title>
        <strong class="subheading">Tv Forest</strong>

        <v-spacer></v-spacer>
        <v-container class="text-right">
          <span>Follow us on</span>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-1"
            dark
            icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
        </v-container>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Copyright © 2022 Tv Forest. All rights reserved.
      </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  data: () => ({
    icons: [
      'mdi-twitter',
      'mdi-youtube'
    ],
  }),
}
</script>

<style scoped>

</style>