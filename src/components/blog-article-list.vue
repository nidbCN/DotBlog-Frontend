<template>
  <div>
    <v-container v-for="(articleItem, index) in articleList" :key="index" fluid>
      <v-card class="mx-auto" v-if="articleItem.isShown">
        <v-img
            class="white--text align-end"
            height="300px"
            :src="articleItem.coverUrl"
        >
          <v-card-title>{{ articleItem.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          <v-chip-group multiple>
            <v-chip small label>
              <v-icon small>mdi-clock-outline</v-icon>
              <span> {{ articleItem.postTime }}</span>
            </v-chip>
            <v-chip small label>
              <v-icon small>mdi-book-open-variant</v-icon>
              <span> {{ articleItem.read }}</span>
            </v-chip>
          </v-chip-group>
        </v-card-subtitle>

        <v-card-text class="text--primary">
          {{ articleItem.description }}
        </v-card-text>

        <v-card-actions>
          <v-btn v-if="articleItem.category != null" color="blue" text>
            <v-icon small>mdi-tag-text</v-icon>
            <span >
              {{ articleItem.category }}
            </span>
          </v-btn>
          <v-btn color="red" @click="likeArticle(articleItem)" text>
            <span v-if="articleItem.like == 0">赞</span>
            <span v-else>{{ articleItem.like }}</span>
            <v-icon small>mdi-thumb-up</v-icon>
          </v-btn>
          <v-spacer/>
          <router-link
              :to="{
              name: 'Articles',
              params: { aid: articleItem.articleId, alias: articleItem.alias },
            }"

              tag="div"
          >
            <v-btn color="orange">
              <span> 阅读全文 </span>
              <v-icon>mdi-arrow-right-circle-outline</v-icon>
            </v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ArticleMethods from "../commons/article";

export default {
  name: "BlogArticleList",
  data: () => ({
    defaultCover: null,
    articleList: null,
  }),
  methods: {
    likeArticle(articleItem) {
      ArticleMethods.updateArticleLike(articleItem.articleId)
          .then(() => {
            articleItem.like++;
          })
          .catch((error) => {
            console.log("点赞文章异常" + error);
            // 异常处理
          });
    },
  },
  created() {
    ArticleMethods.getArticleList()
        .then((resultList) => {
          this.articleList = resultList;
        })
        .catch((error) => {
          console.log("获取文章列表异常" + error);
          // 异常处理
        });
  },
};
</script>