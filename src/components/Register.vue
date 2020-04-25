<template>
  <div id="Registerbox">
    <form>
      <label id="head">Register</label>
      <hr id="first" />
      <label>Username</label>
      <br />
      <input class="loginreg" type="text" placeholder=" Insert your username or email" />
      <br />
      <label>Password</label>
      <br />
      <input class="loginreg" type="text" placeholder=" Insert your password" />
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
      />

      <hr id="last" />
      <router-link to="/Guest/Home">
        <button class="loginregbutton">Register</button>
      </router-link>
    </form>
  </div>
</template>

<style scoped>
#Registerbox{
    height: 620px;
}
</style>