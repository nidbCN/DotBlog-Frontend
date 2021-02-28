<template>
  <div>
    <v-col cols="12">
      <v-row align="start" justify="center">
        <v-col cols="8" sm="10">
          <v-container fluid>
            <router-view />
          </v-container>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "BlogMain",
  components: {},
};
</script>
