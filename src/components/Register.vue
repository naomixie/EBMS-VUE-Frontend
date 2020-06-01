<template>
  <div id="Registerbox" class="user">
    <form>
      <label id="head">Register</label>
      <hr id="first" />
      <label>Username</label>
      <br />
      <input class="loginreg" type="text" placeholder=" Insert your username" v-model="user.Name" />
      <br />
      <label>Password</label>
      <br />
      <input
        class="loginreg"
        type="text"
        placeholder=" Insert your password"
        v-model="user.password"
      />
      <label>Repeat password</label>
      <br />
      <input class="loginreg" type="text" placeholder=" Repeat your password" />
      <label>Email</label>
      <br />
      <input
        class="loginreg"
        type="email"
        id="password-input"
        placeholder=" Insert your email address"
        v-model="user.email"
      />

      <hr id="last" />
      <router-link to="/Guest/Home">
        <button class="loginregbutton" @click="createNewUser()">Register</button>
        <div v-if="showResponse">
          <h6>User created with Id: {{ response }}</h6>
        </div>

        <button
          v-if="showResponse"
          @click="retrieveUser()"
        >Retrieve user {{user.id}} data from database</button>

        <h4
          v-if="showRetrievedUser"
        >Retrieved User {{retrievedUser.firstName}} {{retrievedUser.lastName}}</h4>
      </router-link>
    </form>
  </div>
</template>

<script>
import api from "./backend-api";

export default {
  name: "user",

  data() {
    return {
      response: [],
      errors: [],
      user: {
        Name: "",
        email: "",
        password: "",
        identity: "Guest"
      },
      showResponse: false,
      retrievedUser: {},
      showRetrievedUser: false
    };
  },
  methods: {
    // Fetches posts when the component is created.
    createNewUser() {
      api
        .createUser(
          this.user.Name,
          this.user.email,
          this.user.password,
          this.user.identity
        )
        .then(response => {
          // JSON responses are automatically parsed.
          this.response = response.data;
          this.user.id = response.data;
          console.log("Created new User with Id " + response.data);
          this.showResponse = true;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
    /*
    retrieveUser() {
      api
        .getUser(this.user.id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.retrievedUser = response.data;
          this.showRetrievedUser = true;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
    */
  }
};
</script>

<style scoped>
#Registerbox {
  height: 620px;
}
</style>