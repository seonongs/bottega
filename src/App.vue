<template>
  <HeaderCom></HeaderCom>
  <router-view></router-view>
  <FooterCom></FooterCom>
</template>

<script>
import HeaderCom from "@/components/HeaderCom";
import FooterCom from "@/components/FooterCom";

export default {
  name: 'App',
  components: {
    HeaderCom,
    FooterCom,
  },
}
</script>
