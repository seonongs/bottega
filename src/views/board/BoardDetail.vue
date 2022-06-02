<template>
  <v-table density="compact" style="margin-top: 10px;">
    <colgroup>
      <col style="width: 10%">
      <col style="width: 23.3%">
      <col style="width: 10%">
      <col style="width: 23.3%">
      <col style="width: 10%">
      <col style="width: 23.4%">
    </colgroup>
    <tbody>
    <tr>
      <th class="text-left">ID</th>
      <td>{{ item.id }}</td>
      <th class="text-left">TITLE</th>
      <td colspan="3">{{ item.title }}</td>
    </tr>
    <tr>
      <th class="text-left">WRITER</th>
      <td>{{ item.writer }}</td>
      <th class="text-left">DATE</th>
      <td>{{ createdDate }}</td>
      <th class="text-left">UPDATE</th>
      <td>{{ modifiedDate }}</td>
    </tr>
    <tr>
      <th class="text-left">CONTENT</th>
      <td colspan="6">{{ item.content }}</td>
    </tr>
    </tbody>
  </v-table>
  <div class="d-flex justify-start" style="vertical-align: middle">
    <v-btn variant="outlined" size="large" @click="list"  style="height: 40px;">LIST</v-btn>&nbsp;
    <v-text-field
        variant="outlined"
        density="compact"
        disabled
    ></v-text-field>&nbsp;
    <v-btn variant="outlined" size="large" @click="hide(item.id)" color="error" style="height: 40px;">DELETE</v-btn>&nbsp;
    <v-btn variant="outlined" size="large" @click="modify(item.id)"  style="height: 40px;">MODIFY</v-btn>
  </div>
</template>

<script>
import {bbsDelete, bbsDetail} from "@/api";

export default {
  name: "BoardWrite",
  data() {
    return {
      item: [],
      createdDate: '',
      modifiedDate: '',
    }
  },
  methods: {
    list() {
      this.$router.push(`/board`)
    },
    modify(id) {
      this.$router.push(`/board-modify/${id}`);
    },
    hide(id) {
      bbsDelete(id).then(response => {
        console.log("board-delete-data:", response);
        this.$router.push(`/board`)
      }).catch(error => {
        console.log(error)
      })
    },
  },
  created() {
    bbsDetail(this.$route.params.id).then(response => {
      this.item = response.data;

      this.createdDate = response.data.createdDate.replace('T',' ');
      this.modifiedDate = response.data.modifiedDate.replace('T',' ');

      console.log("board-detail-data: ", response.data)
    }).catch(error => {
      alert(error);
    })
  },
}
</script>

<style scoped>

</style>
