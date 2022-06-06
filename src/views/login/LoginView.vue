<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >

    <v-text-field
        v-model="id"
        :counter="10"
        label="ID"
        required
    ></v-text-field>

    <v-text-field
        v-model="pw"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        name="input-10-1"
        label="PW"
        hint="password"
        counter
        @click:append="show = !show"
    ></v-text-field>

    <v-btn
        color="error"
        class="mr-4"
        @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
        color="warning"
        @click="submit"
    >
      SUBMIT
    </v-btn>
  </v-form>
</template>

<script>
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
    reset() {
      this.$refs.form.reset()
    },
    submit() {
      alert('submit')
    }

  },
}
</script>

<style scoped>

</style>
