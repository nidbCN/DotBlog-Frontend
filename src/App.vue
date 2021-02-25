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

      <v-spacer> </v-spacer>

      <BarLinks />
    </v-app-bar>

    <v-main>
      <MainContent/>
    </v-main>

    <v-footer app> Powered by Vue & .NET 5 | Made with love </v-footer>
  </v-app>
</template>

<script>
import BarLinks from "./components/BarLinks";
import MainContent from "./components/MainContent";

export default {
  name: "App",

  components: {
    BarLinks,
    MainContent,
  },

  data: () => ({
    //
  }),
};
</script>
