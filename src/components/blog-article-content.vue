<template>
  <div>
    <v-container fluid>
      <v-card class="mx-auto">
        <v-img
          class="white--text align-end"
          height="300px"
          :src="articleContent.coverUrl"
        >
          <v-card-title>{{ articleContent.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          <v-chip-group multiple>
            <v-chip small label>
              <v-icon small>mdi-clock-outline</v-icon>
              <span> {{ articleContent.postTime }}</span>
            </v-chip>
            <v-chip small label>
              <v-icon small>mdi-book-open-variant</v-icon>
              <span> {{ articleContent.read }}</span>
            </v-chip>
          </v-chip-group>
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <v-divider />
          <div>{{ articleContent.content }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="red" @click="likeArticle()" text>
            <span v-if="articleContent.like == 0">赞</span>
            <span v-else>{{ articleContent.like }}</span>
            <v-icon small>mdi-thumb-up</v-icon>
          </v-btn>
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
    articleId: null,
    articleContent: null,
  }),
  methods: {
    likeArticle() {
      ArticleMethods.updateArticleLike(this.articleId)
        .then(() => {
          this.articleContent.like++;
        })
        .catch((error) => {
          console.log("点赞文章异常" + error);
          // 异常处理
        });
    },
  },
  created() {
    this.articleId = this.$route.params["aid"];
    ArticleMethods.getArticleContent(this.articleId)
      .then((resultContent) => {
        this.articleContent = resultContent;
        console.log(this.articleContent);
      })
      .catch((error) => {
        console.log("获取文章列表异常" + error);
        // 异常处理
      });

    console.log(this.articleContent);

    ArticleMethods.updateArticleRead(this.articleId)
      .then(() => this.articleContent.read++)
      .catch((error) => {
        console.log("更新文章阅读异常" + error);
        // 异常处理
      });
  },
};
</script>
      