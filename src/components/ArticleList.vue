<template>
  <div>
    <v-container v-for="articleItem in articleList" :key="articleItem" fluid>
      <v-card class="mx-auto" v-if="articleItem.isShown">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="articleItem.coverUrl"
        >
          <v-card-title>{{ articleItem.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          <v-icon dense>mdi-clock-outline</v-icon>
          <span> {{ articleItem.postTime }}</span>
          <v-divider class="mx-4" vertical></v-divider>
          <v-icon dense>mdi-book-open-variant</v-icon>
          <span> {{ articleItem.read }}</span>
        </v-card-subtitle>

        <v-card-text class="text--primary">
          {{ articleItem.description }}
        </v-card-text>

        <v-card-actions>
          <v-btn color="blue" text>
            <v-icon small>mdi-tag-text</v-icon>
            <span> {{ articleItem.category }} </span>
          </v-btn>
          <v-btn color="red" text>
            <span v-if="articleItem.like == 0">赞</span>
            <span v-else>{{ articleItem.like }}</span>
            <v-icon small>mdi-thumb-up</v-icon>
          </v-btn>
          <v-spacer />
          <v-btn :href="'articles/' +　articleItem.articleId + '/' + articleItem.alisa" color="orange">
            <span> 阅读全文 </span>
            <v-icon>mdi-arrow-right-circle-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  data: () => ({
    articleList: [
      {
        alias: "hello-world",
        articleId: 0,
        read: 3,
        like: 1,
        postTime: "2021-02-25T08:04:21.958Z",
        author: "string",
        category: "笔记",
        description:
          "[测试:简介]使用 GLFW 库自带的函数设置窗口置于顶层前端显示。起因：一位群友问到这个问题，在网上查找 GLFW 前端显示窗口和 OpenGL 前端显示窗口无果后翻阅 GLFW 的 docs 找到了解决方案。写个博客记录一下。",
        title: "[测试:标题]OpenGL GLFW 窗口前端显示",
        isShown: true,
        coverUrl:
          "http://bimgs.plmeizi.com/images/bing/2021/OHR.Trevi_ZH-CN9831666780_1920x1080.jpg",
      },
      {
        alias: "string",
        articleId: 0,
        read: 0,
        like: 0,
        postTime: "2021-02-25T08:04:21.958Z",
        author: "string",
        category: "string",
        description: "This is a test,man",
        title: "string",
        isShown: true,
      },
      {
        alias: "string",
        articleId: 0,
        read: 0,
        like: 0,
        postTime: "2021-02-25T08:04:21.958Z",
        author: "string",
        category: "string",
        description: "This is a test,man",
        title: "string",
        isShown: true,
      },
      {
        alias: "string",
        articleId: 0,
        read: 0,
        like: 0,
        postTime: "2021-02-25T08:04:21.958Z",
        author: "string",
        category: "string",
        description: "This is a test,man",
        title: "string",
        isShown: true,
      },
      {
        alias: "string",
        articleId: 0,
        read: 0,
        like: 0,
        postTime: "2021-02-25T08:04:21.958Z",
        author: "string",
        category: "string",
        description: "This is a test,man",
        title: "string",
        isShown: true,
      },
      {
        alias: "string",
        articleId: 0,
        read: 0,
        like: 0,
        postTime: "2021-02-25T08:04:21.958Z",
        author: "string",
        category: "string",
        description: "This is a test,man",
        title: "string",
        isShown: true,
      },
      {
        alias: "string",
        articleId: 0,
        read: 0,
        like: 0,
        postTime: "2021-02-25T08:04:21.958Z",
        author: "string",
        category: "string",
        description: "This is a test,man",
        title: "string",
        isShown: true,
      },
    ],
  }),
};
</script>