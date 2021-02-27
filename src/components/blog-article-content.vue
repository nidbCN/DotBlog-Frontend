<template>
  <div>
    <v-container fluid>
      <v-card class="mx-auto">
        <v-img
          class="white--text align-end"
          height="400px"
          :src="articleContent.coverUrl"
        >
          <v-card-title>{{articleContent.title}}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text> Share </v-btn>

          <v-btn color="orange" text> Explore </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ArticleMethods from "../commons/article";

export default {
  name: "BlogArticleContent",
  data: () => ({
    articleContent: null,
  }),
  methods: {
    likeArticle(articleIndex) {
      ArticleMethods.updateArticleLike(this.articleContent.articleId)
        .then(() => {
          this.articleContent.Like++;
          console.log(this.articleContent);
        })
        .catch((error) => {
          console.log("点赞文章异常" + error);
          // 异常处理
        });
    },
  },
  mounted() {
    ArticleMethods.getArticleContent()
      .then((resultContent) => {
        this.articleContent = resultContent;
      })
      .catch((error) => {
        console.log("获取文章列表异常" + error);
        // 异常处理
      });

    ArticleMethods.updateArticleRead(this.articleContent.articleId)
      .then()
      .catch((error) => {
        console.log("更新文章阅读异常" + error);
        // 异常处理
      });
  },
};
</script>          
      