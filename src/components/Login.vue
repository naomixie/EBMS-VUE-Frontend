<template>
  <div id="Loginbox" class="login">
    <form>
      <label id="head">Login</label>
      <hr id="first" />
      <label>Username</label>
      <br />
      <input
        class="loginreg"
        type="text"
        placeholder=" Insert your username or email"
        v-model="username"
      />
      <br />
      <label>Password</label>
      <br />
      <input
        type="text"
        class="loginreg"
        id="password-input"
        placeholder=" Insert your password"
        v-model="password"
      />
      <a href="www.baidu.com" class="forgetpass">Forgot your password?</a>

      <router-link :to="{name: this.url,params:{username:this.username}}">
        <button id="beforeline" class="loginregbutton" @click="verifyLogin()">Login</button>
      </router-link>
      <hr />
      <router-link to="/Register">
        <button class="loginregbutton">Register</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import api from "./backend-api";

export default {
  name: "login",
  data() {
    return {
      isAdmin: false,
      url: "",
      isUser: false,
      response: [],
      errors: [],
      retrievedUser: [],
      username: "",
      password: "",
      users: []
    };
  },

  mounted() {
    this.getUserData();
  },
  /*Verify if account is a guest or Admin or not a user */
  methods: {
    getUserData() {
      api.getUser().then(response => {
        this.retrievedUser = response.data;
        console.log(this.retrievedUser);
      });
    },
    verifyLogin() {
      console.log("Finding user: " + this.username + "  " + this.password);

      const fdata = this.retrievedUser.filter(data => {
        if (data.name.match(this.username)) {
          return data;
        }
      });
      this.retrievedUser = fdata;
      this.retrievedUser.forEach(element => {
        if (element.password === this.password) {
          this.isUser = true;
        }
        if (element.identity === "Admin") {
          this.isAdmin = true;
        }
      });
      console.log(this.isUser);

      if (this.isUser === true && this.isAdmin === true) {
        this.url = "AdminHome";
        return;
      }
      if (this.isUser === true && this.isAdmin === false) {
        //console.log("ISUSER: "+this.isUser);
        this.url = "GuestHome";
        return;
      }
      if (this.isUser === false) {
        alert("YOU ARE NOT A USER YET, PLEASE REGISTER FIRST!");
        this.url = "";
      }

      return;
    }
  }
};
</script>

<style>
#Loginbox,
#Registerbox {
  position: relative;
  top: 200px;
  margin: auto;
  height: 520px;
  width: 350px;
  background-color: white;
  border: rgb(0, 0, 0, 0.1) solid thick;
  border-width: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-top: 40px;
  padding-left: 50px;
  padding-bottom: 40px;
  padding-right: 50px;
  text-align: left;
}

#head {
  font-size: 35px;
  font-weight: bold;
}

#first {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-bottom: 10%;
  height: 1px;
  background-color: black;
  opacity: 0.3;
}

.loginreg,
.loginregbutton {
  margin-top: 8px;
  margin-bottom: 25px;
  padding-left: 10%;
  text-indent: 10px;
  width: 100%;
  height: 45px;
  border: rgb(0, 0, 0, 0.6) solid thin;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 1px;
}

#beforeline {
  margin-top: 20px;
  margin-bottom: 10px;
}

.forgetpass {
  font-size: 10px;
  margin-top: 0px;
  margin-bottom: 20px;
}

button:active {
  transition: 0.5s;
  transform: translateY(1px);
}
</style>