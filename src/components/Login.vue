<template>
  <div id="Loginbox">
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

      <router-link to="/Admin/Home">
        <button id="beforeline" class="loginregbutton" v-on:click="this.verifyLogin()">Login</button>
      </router-link>
      <hr />
      <router-link to="/Register">
        <button class="loginregbutton">Register</button>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      users: []
    };
  },
  methods: {
    verifyLogin() {
      /*
      var myHeaders = new Headers({
        Accept: "application/json"
      });

      var myInit = {
        method: "GET",
        headers: myHeaders,
        //"Content-Type": "application/json"
        //"Content-Type": "application/x-www-form-urlencoded"
        mode: "no-cors",
        cache: "default"
      };

      var myRequest = new Request("http://localhost:8080/user/all", myInit);

      fetch(myRequest).then(function(response) {
        this.users = response.data;
        return this.users.filter(user => {
          return user.name.toLowerCase().match(this.username);
        });
      });
    }*/
      fetch("http://localhost:8080/users/all", {
        method: "GET",
        mode: "no-cors",
        cache: "default"
      })
        .then(function(response) {
          if (response.ok) {
            return response.blob();
          }
          throw new Error("Network response was not ok.");
          //this.users = response.data;
          //return this.usersfilter(user => {
          //  return user.name.toLowerCase().match(this.username);
          //});
        })
        .catch(function(error) {
          console.log(
            "There has been a problem with your fetch operation: ",
            error.message
          );
        });
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