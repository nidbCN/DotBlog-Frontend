<template>
  <div>
    <v-card class="mx-auto">
      <v-card-title>{{ replyList.length }}条回复</v-card-title>
      <v-list>
        <v-list-item v-for="(replyItem, index) in replyList" :key="index">
          <v-list-item-avatar>
            <v-img :src="replyItem.avatarUrl"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ replyItem.author }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-chip-group multiple>
                <v-chip small label>
                  <v-icon small>mdi-clock-outline</v-icon>
                  <span> {{ replyItem.replyTime }}</span>
                </v-chip>
                <v-chip small label>
                  <v-icon small v-if="replyItem.userPlatform.indexOf('windows')">mdi-microsoft-windows</v-icon>
                  {{ replyItem.userPlatform == null ? "未知系统" : replyItem.userPlatform }}
                </v-chip>
                <v-chip small label>
                  {{ replyItem.userBrowser == null ? "未知浏览器" : replyItem.userBrowser }}
                </v-chip>
              </v-chip-group>
            </v-list-item-subtitle>
            <v-divider/>
            <v-list-item-subtitle>{{ replyItem.content }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import ReplyMethods from '../commons/reply'

export default {
  props: ['aid'],
  name: "BlogReplyList",
  data: () => ({
    replyList: null,
  }),
  created() {
    console.log(this.aid);
    ReplyMethods.getReplyList(this.aid)
        .then((result) => {
          this.replyList = result;
        })
        .catch((error) => {
          console.log("获取评论列表异常" + error);
          // 异常处理
        })
  }

};
</script>
