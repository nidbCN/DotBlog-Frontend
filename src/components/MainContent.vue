<template>
  <div>
    <v-container fluid>
      <v-col cols="12">
        <v-row align="start" justify="center">
          <v-col cols="10">
              <v-container>
                <!-- If using vue-router -->
                <router-view> THIS IS A TEST </router-view>
              </v-container>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "MainContent",
};
</script>
