<template>
  <v-app>
    <blog-nav/>

    <blog-main/>

    <blog-footer/>
  </v-app>
</template>

<script>
import BlogFooter from './components/blog-footer'
import BlogMain from './components/blog-main.vue';
import BlogNav from './components/blog-nav'

export default {
  name: "App",
  components: {
    BlogNav,
    BlogFooter,
    BlogMain,
  },
};
</script>
