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
            v-model="title"
        ></v-text-field>
      </td>
      <td>
        <v-text-field style="margin-top: 15px;"
            label="WRITER"
            variant="outlined"
            density="compact"
            v-model="writer"
        ></v-text-field>
      </td>
    </tr>
    <tr>
      <td colspan="3">
        <v-textarea
            outlined
            label="CONTENT"
            v-model="content"
        ></v-textarea>
      </td>
    </tr>
    </tbody>
  </v-table>
  <div class="d-flex justify-start" style="vertical-align: middle">
    <v-btn variant="outlined" size="large" @click="list"  style="height: 40px;">LIST</v-btn>
    <v-text-field
        variant="outlined"
        density="compact"
        disabled
    ></v-text-field>
    <v-btn variant="outlined" size="large" @click="submit"  style="height: 40px;">SUBMIT</v-btn>
  </div>
</template>

<script>
import {bbsCreate} from "@/api";

export default {
  name: "BoardWrite",
  data() {
    return {
      title: '',
      writer: '',
      content: '',
    }
  },
  methods: {
    submit() {
      let param = {
        'title': this.title,
        'content': this.content,
        'writer': this.writer
      }
      bbsCreate(param).then(response => {
        console.log("C data: ", response);
        this.$router.push(`/board-detail/${response.data.id}`);
      }).catch(error => {
        console.log(error);
      })
    },
    list() {
      this.$router.push(`/board`)
    }
  },
}
</script>

<style scoped>

</style>
