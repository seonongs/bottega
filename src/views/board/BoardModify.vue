<template>
  <v-table density="compact" style="margin-top: 10px;">
    <colgroup>
      <col style="width: 50%">
      <col style="width: 50%">
    </colgroup>
    <tbody>
    <tr>
      <td>
        <v-text-field style="margin-top: 15px;"
            label="TITLE"
            variant="outlined"
            density="compact"
            v-model="item.title"
        ></v-text-field>
      </td>
      <td>
        <v-text-field style="margin-top: 15px;"
            label="WRITER"
            variant="outlined"
            density="compact"
            v-model="item.writer"
        ></v-text-field>
      </td>
    </tr>
    <tr>
      <td colspan="3">
        <v-textarea
            outlined
            label="CONTENT"
            v-model="item.content"
        ></v-textarea>
      </td>
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
    <v-btn variant="outlined" size="large" @click="submit"  style="height: 40px;">CONFIRM</v-btn>&nbsp;
  </div>
</template>

<script>
import {boardDetail, boardUpdate} from "@/api";

export default {
  name: "BoardWrite",
  data() {
    return {
      item: [
        {id: ''},
        {title: ''},
        {writer: ''},
        {content: ''},
      ],
    }
  },
  methods: {
    submit() {
      let param = {
        'title': this.item.title,
        'content': this.item.content,
        'writer': this.item.writer
      }
      boardUpdate(this.item.id, param).then(response => {
        console.log("board-modify-data: ", response);
        this.$router.push(`/board-detail/${response.data.id}`);
      }).catch(error => {
        console.log(error);
      })
    },
    list() {
      this.$router.push(`/board`)
    }
  },
  created() {
    boardDetail(this.$route.params.id).then(response => {
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
