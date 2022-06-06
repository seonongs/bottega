<template>
  <v-table density="compact" style="margin-top: 10px;">
    <colgroup>
      <col style="width: 10%">
      <col style="width: 50%">
      <col style="width: 20%">
      <col style="width: 20%">
    </colgroup>
    <thead>
    <tr>
      <th class="text-left">ID</th>
      <th class="text-left">TITLE</th>
      <th class="text-left">WRITER</th>
      <th class="text-left">DATE</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in items" :key="item.name">
      <td>{{ item.id }}</td>
      <td><router-link :to="`/board-detail/${item.id}`">{{ item.title }}</router-link></td>
      <td>{{ item.writer }}</td>
      <td>{{ item.createdDate.replace('T', ' ') }}</td>
    </tr>
    </tbody>
  </v-table>
  <div class="d-flex justify-start" style="vertical-align: middle">
    <v-btn variant="outlined" size="large" @click="list"  style="height: 40px;">LIST</v-btn>&nbsp;
    <v-text-field
        label="SEARCH"
        variant="outlined"
        density="compact"
        v-model="keyword"
    ></v-text-field>&nbsp;
    <v-btn variant="outlined" size="large" @click="search" style="height: 40px;">SEARCH</v-btn>&nbsp;
    <v-btn variant="outlined" size="large" @click="write" style="height: 40px;">WRITE</v-btn>&nbsp;
  </div>

  <div class="text-center">
    <v-pagination
        v-model="currentPage"
        :length="length"
        :total-visible="5"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>

<script>

import {bbsList} from "@/api";

export default {

  name: "BbsListView",
  data() {
    return {
      items: [],
      pageSize: 5,
      currentPage: 1,
      totalElements: 0,
      keyword: '',
      length: 0,
    }
  },
  watch: {
    currentPage(newValue) {
      this.currentPage = newValue;
      this.search();
    }
  },
  methods: {
    search() {

      bbsList(this.currentPage, this.pageSize, this.keyword).then(response => {
        this.length = response.data.totalPages;
        this.items = response.data.content;
        this.pageSize = response.data.size;
        this.totalElements = response.data.totalElements;

        console.log("board-list-data: ", response.data)
        console.log(`current-page: ${this.currentPage}`)
      }).catch(error => {
        alert(error)
      })
    },
    list() {
      this.keyword = '';
      this.search();
    },
    write() {
      this.$router.push('/board-write')
    }
  },
  created() {
    this.search();
  },
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
  color: #ff0000;
}

a:active { /*클릭하는 순간*/
  color: #000000;
}

a {
  text-decoration: none;
}
</style>
