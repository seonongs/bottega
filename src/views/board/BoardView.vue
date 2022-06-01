<template>
  <v-table theme="dark">
    <thead>
    <tr>
      <th class="text-left">
        ID
      </th>
      <th class="text-left">
        TITLE
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in items" :key="item.name">
      <td>{{ item.id }}</td>
      <td>{{ item.title }}</td>
    </tr>
    </tbody>
  </v-table>
  <div class="text-center">
    <v-pagination
        v-model="currentPage"
        :length="length"
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
      // headers: [
      //       {id:1, text:'ID'}
      //     , {id:2, text:'TITLE'}
      //     , {id:3, text:'WRITER'}
      //     , {id:4, text:'DATE'}
      // ]
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
        if (this.pageSize > response.data.totalElements) {
          this.pageSize = response.data.totalElements;
        }

        this.length = response.data.totalPages;

        this.items = response.data.content;
        this.pageSize = response.data.size;

        this.totalElements = response.data.totalElements;
        console.log("R data: ", response.data)
        console.log(this.currentPage)

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
