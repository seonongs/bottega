<template>
  <div class="header">
    <router-link to="/">
      <v-btn>Home</v-btn>
    </router-link>
    <router-link to="/board">
      <v-btn>Board</v-btn>
    </router-link>
    <router-link to="/login">
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

a:link { /*링크 방문 전*/
  color: #000000;
}

a:visited { /*링크를 방문한 이후*/
  color: #000000;
}

a:hover { /*마우스를 올려놓을 때*/
  color: #000000;
}

a:active { /*클릭하는 순간*/
  color: #000000;
}

a {
  text-decoration: none;
}

</style>
