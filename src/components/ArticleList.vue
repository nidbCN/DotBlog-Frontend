<template>
  <div>
    <v-card> </v-card>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  data: () => ({
      atricles: [
          {
              title: "第一篇",
              description: "这可是第一篇文章哦，这里是简介的位置",
              like: 0,
              read: 0,
              time: "2021-2-30 12:53:66",
              alias: "hello-world"
          }
      ]

  }),
};
</script>