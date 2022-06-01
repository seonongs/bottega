<template>
  <v-table density="compact">
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
      <td>{{ item.title }}</td>
      <td>{{ item.writer }}</td>
      <td>{{ item.createdDate.replace('T', ' ') }}</td>
    </tr>
    </tbody>
  </v-table>
  <div class="d-flex justify-space-between">
    <v-text-field
        label="SEARCH"
        variant="plain"
    ></v-text-field>
    <v-btn variant="outlined" size="small">SEARCH</v-btn>
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
      items1: [],
      length: 0,
    }
  },
  computed: {},
  watch: {
    currentPage(newValue) {
      this.currentPage = newValue;
      this.search();
    }
  },
  created() {
    this.search();
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
    }
  },

}

</script>

<style>

</style>
