<template>
  <div>
    
      <v-col cols="12">
        <v-row align="start" justify="center">
          <v-col cols="8" sm="10">
              <v-container fluid>
            <!--
            <v-card>
              <router-view> THIS IS A TEST </router-view>
            </v-card>
-->

            <blog-article-list />
            </v-container>
          </v-col>
        </v-row>
      </v-col>
  </div>
</template>

<script>
import BlogArticleList from './blog-article-list.vue';

export default {
  name: "BlogMain",
  components: {
    BlogArticleList,
  },
};
</script>
