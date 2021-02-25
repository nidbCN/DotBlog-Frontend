<template>
  <div>
    
      <v-col cols="12">
        <v-row align="start" justify="center">
          <v-col cols="8">
              <v-container fluid>
            <!--
            <v-card>
              <router-view> THIS IS A TEST </router-view>
            </v-card>
-->

            <ArticleList />
            </v-container>
          </v-col>
        </v-row>
      </v-col>
  </div>
</template>

<script>
import ArticleList from "./ArticleList";

export default {
  name: "MainContent",
  components: {
    ArticleList,
  },
};
</script>
