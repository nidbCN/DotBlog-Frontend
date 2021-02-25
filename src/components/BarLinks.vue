<template>
  <div>
    <v-btn
      v-for="linkItem in linkList"
      :key="linkItem"
      :href="linkItem.href"
      target="_blank"
      text
    >
      <v-icon>{{ linkItem.icon }}</v-icon>
      <span class="mr-3">{{ linkItem.text }}</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    linkList: [
      {
        text: "首页",
        href: "https://github.com/vuetifyjs/vuetify-loader",
        icon: "mdi-home",
      },
      {
        text: "分类",
        href: "https://github.com/vuetifyjs/vuetify",
        icon: "mdi-inbox",
      },
      {
        text: "朋友",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
        icon: "mdi-link",
      },
      {
        text: "关于",
        href: "https://",
        icon: "mdi-information-outline",
      },
    ],
  }),
};
</script>
