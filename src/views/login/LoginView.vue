<template>
<<<<<<< HEAD
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
=======

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
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              label="PassWord"
              hint="At least 2 characters"
              @click:append="show = !show"
              @keyup.enter="submit"
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn text>
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
>>>>>>> origin/master
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
<<<<<<< HEAD
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

=======

      show: false,
      id: '',
      pw: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 2 || 'Min 2 characters',
      },

    }
  },
  methods: {
    submit() {
      alert('전송');
    }
>>>>>>> origin/master
  },
}
</script>

<style scoped>

</style>
