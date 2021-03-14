<template>
<div>
  <v-app-bar app color="primary" dark>
    <!--图标-->
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

    <v-spacer/>
    <!--导航按钮-->
    <div>
      <v-btn
          v-for="(linkItem, index) in linkList"
          :key="index"
          :href="linkItem.href"
          target="_blank"
          text
      >
        <v-icon>{{ linkItem.icon }}</v-icon>
        <span class="mr-3">{{ linkItem.text }}</span>
      </v-btn>
    </div>

  </v-app-bar>
</div>
</template>

<script>
export default {
  name: "blog-nav",
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
  })
}
</script>