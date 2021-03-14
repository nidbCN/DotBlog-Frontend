<template>
  <div>
    <v-footer dark padless>
      <v-card flat tile class="flex indigo lighten-1 white--text text-center">
        <v-card-text class="white--text">
          <span>Powered by DotBlog hosted in ASP.NET Core. Made with <v-icon small color="red">mdi-heart</v-icon></span>
        </v-card-text>

        <v-divider/>

        <v-card-text class="white--text">
          <span>
            <v-icon small>mdi-copyright</v-icon>
            2017 - {{ new Date().getFullYear() }}
            <strong>Gaein nidb</strong>
          </span>
          <v-divider vertical/>
          <span>
            <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/recordQuery">冀ICP备17015375-1号</a>
          </span>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "blog-footer"
}
</script>