<template>
  <div style="margin-top: 10px">
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        novalidate class="md-layout" >
      <v-card color="black" class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">How to reach us
          </div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <v-text-field
                  label="First Name"
                  solo
                  required
                  :rules="firstNameRules"
              ></v-text-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <v-text-field
                  label="Last Name"
                  solo
                  required
                  :rules="lastNameRules"
              ></v-text-field>
            </div>
          </div>


          <v-text-field
              label="Email"
              solo
              :rules="emailRules"
              required
          ></v-text-field>


          <v-text-field
              label="Telephone"
              solo
          ></v-text-field>

          <v-textarea
              label="Message"
              auto-grow
              outlined
              rows="8"
              row-height="15"
              solo
          ></v-textarea>

          <v-checkbox
              v-model="terms"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="I agree to the Terms & Conditions
"
              required
          ></v-checkbox>
          <v-col class="text-right">
          <v-btn
              color="warning"
              class="mr-4"
              @click="validate"
          >
            Submit
          </v-btn>

            <v-snackbar class="snackbar"
                v-model="submitted"
                :timeout="2000"
                :multi-line="true"
            >
              Thanks for reaching us!

              <template v-slot:action="{ attrs }">
                <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    @click="submitted = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </v-col>

        </md-card-content>
      </v-card>

      <MapLocation/>

    </v-form>
  </div>
</template>

<script>
import MapLocation from "@/components/Location";
export default {
  name: "ContactForm",
  components: {MapLocation},
  data: () => ({
    form: {
      firstName: null,
      lastName: null,
      gender: null,
      age: null,
      email: null,
    },
    terms: false,
    valid: false,
    submitted: false,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    firstNameRules: [
      v => !!v || 'First Name is required',
    ],
    lastNameRules: [
      v => !!v || 'Last Name is required',
    ],
  }),
  methods: {
    validate () {
      if ( this.$refs.form.validate()){
        this.submitted = true;
      }
    },
  },
}
</script>

<style scoped>

.snackbar{
  bottom: 150px;
}
</style>