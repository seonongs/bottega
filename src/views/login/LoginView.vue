<template>
  <v-row justify="center" style="margin-top: 15px;">
    <v-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
    >
      <v-card ref="form">
        <v-card-text>
          <v-text-field
              ref="name"
              v-model="id"
              label="ID"
              placeholder="ID"
              required
          ></v-text-field>
          <v-text-field
              v-model="pw"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              label="PassWord"
              hint="At least 2 characters"
              @click:append="show = !show"
              @keyup.enter="submit"
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn text
             @click="cancel">
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="submit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {login} from "@/api";

export default {
  name: "LoginView",
  data() {
    return {
      valid: true,
      id: '',
      pw: '',
      show: '',
    }
  },
  methods: {
    cancel() {
      this.id = '';
      this.pw = '';
    },
    submit() {
      let param = {
        'id': this.id,
        'pw': this.pw,
      }

      login(param).then(response => {
        console.log("login: ", response);
        this.$router.push(`/home`);
      }).catch(error => {
        console.log(error);
      })

      alert('submit')
    },
  },
}
</script>

<style scoped>

</style>
