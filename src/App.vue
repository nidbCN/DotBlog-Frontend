<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer />

      <blog-barlinks />
    </v-app-bar>

    <v-main>
      <!-- <blog-main /> -->

      <div>
        <v-col cols="12">
          <v-row align="start" justify="center">
            <v-col cols="8" sm="10">
              <v-container fluid>
                <router-view></router-view>
              </v-container>
            </v-col>
          </v-row>
        </v-col>
      </div>

    </v-main>

    <v-footer dark padless>
      <v-card flat tile class="flex indigo lighten-1 white--text text-center">
        <v-card-text class="white--text">
          Powered by DotBlog hosted in ASP.NET Core. Made with love.
        </v-card-text>

        <v-divider />

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Gaein nidb</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import BlogBarlinks from "./components/blog-barlinks.vue";
// import BlogMain from './components/blog-main.vue';

export default {
  name: "App",
  components: {
    BlogBarlinks,
    // BlogMain,
  },

  data: () => ({
    //
  }),
};
</script>
