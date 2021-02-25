<template>
  <div>
      <v-btn
        v-for="linkItem in links"
        :key="linkItem"
        :href="linkItem.href"
        target="_blank"
        text
      >
        <span class="mr-3">{{ linkItem.text }}</span>
        <v-icon>{{ linkItem.icon }}</v-icon>
      </v-btn>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    links: [
      {
        text: "首页",
        href: "https://github.com/vuetifyjs/vuetify-loader",
        icon: "mdi-open-in-new",
      },
      {
        text: "分类",
        href: "https://github.com/vuetifyjs/vuetify",
        icon: "mdi-open-in-new",
      },
      {
        text: "朋友",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
        icon: "mdi-open-in-new",
      },
      {
        text: "关于",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
        icon: "mdi-open-in-new",
      },
    ],
  }),
};
</script>
