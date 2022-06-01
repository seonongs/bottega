<template>
  <div class="header">
    <router-link to="/">
      <v-btn>Home</v-btn>
    </router-link>
    <router-link to="/board">
      <v-btn>Board</v-btn>
    </router-link>
    <router-link to="/">
      <v-btn>Login</v-btn>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "HeaderCom",
  methods: {}
}
</script>

<style scoped>
.header {
  color: #666;
  /*border: 1px solid #211f1f;*/
}

a:link { /*링크 방문 전*/
  color: #244781;
}

a:visited { /*링크를 방문한 이후*/
  color: #244781;
}

a:hover { /*마우스를 올려놓을 때*/
  color: green;
}

a:active { /*클릭하는 순간*/
  color: yellow;
}

a {
  text-decoration: none;
}

</style>
