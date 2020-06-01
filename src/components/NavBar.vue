<template>
  <div id="NavRoot">
    <div v-if="isAdmin" class="Navbar Admin">
      <button class="account">N</button>
      <label class="account-name">{{this.username}}</label>
      <br />
      <router-link to="/Admin/Home">
        <button class="NavbarButton Admin">Home</button>
      </router-link>
      <router-link to="/Admin/ManageAccount">
        <button class="NavbarButton Admin">Manage Accounts</button>
      </router-link>
      <router-link to="/Admin/Books">
        <button class="NavbarButton Admin">Books</button>
      </router-link>
      <router-link to="/Admin/Shoppingcart">
        <button class="NavbarButton Admin">Shopping Cart</button>
      </router-link>
      <router-link to="/Admin/Orders">
        <button class="NavbarButton Admin">Orders</button>
      </router-link>
      <router-link to="/Admin/Statistics">
        <button class="NavbarButton Admin">Statistics</button>
      </router-link>
      <br />
    </div>

    <div v-if="!isAdmin" class="Navbar Guest">
      <button class="account">N</button>
      <label class="account-name">Naomi</label>
      <br />
      <router-link to="/Guest/Home">
        <button class="NavbarButton Guest">Home</button>
      </router-link>
      <router-link to="/Guest/Books/search">
        <button class="NavbarButton Guest">Books</button>
      </router-link>
      <router-link to="/Guest/Shoppingcart">
        <button class="NavbarButton Guest">Shopping Cart</button>
      </router-link>
      <router-link to="/Guest/Orders">
        <button class="NavbarButton Guest">Orders</button>
      </router-link>
      <router-link to="/Guest/Statistics">
        <button class="NavbarButton Guest">Statistics</button>
      </router-link>
      <br />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Navigate",
  props: {
    username:String,
    isAdmin: Boolean
  }
};
</script>


<style scoped>
.Navbar {
  display: block;
  position: fixed;
  overflow-x: hidden;
  text-align: left;
  padding-left: 30px;
  height: 100%;
  overflow: auto;
  width: 230px;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.4);
}

.account {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 60px;
  background-color: coral;
  opacity: 0.8;
  height: 60px;
  border-radius: 50%;
  color: whitesmoke;
  font-weight: bold;
  font-size: 30px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border: white solid thick;
}

label {
  color: whitesmoke;
  text-shadow: 1px 2px rgba(0, 0, 0, 0.1);
}

.NavbarButton {
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
  height: 60px;
  color: whitesmoke;
  font-size: 20px;
  font-weight: bold;
  font-family: Ubuntu;
  border-style: none;
}

.Admin {
  background-color: rgb(38, 122, 206);
}

.Guest {
  background-color: mediumseagreen;
}

.account-name {
  margin-left: 20px;
  font-size: 30px;
  font-weight: bold;
}

@media screen and (max-height: 900px) {
  .Navbar {
    padding-left: 25px;
  }
  .NavbarButton {
    margin-bottom: 17px;
    font-size: 18px;
    height: 50px;
  }
  .account {
    margin-top: 40px;
    margin-bottom: 40px;
    height: 50px;
    width: 50px;
    font-size: 25px;
  }
  .account-name {
    font-size: 25px;
  }
}

@media screen and (max-width: 1000px) {
  .Navbar {
    padding-left: 25px;
    width: 170px;
  }
  .NavbarButton {
    margin-bottom: 17px;
    font-size: 18px;
    height: 50px;
  }
  .account {
    margin-top: 40px;
    margin-bottom: 40px;
    height: 50px;
    width: 50px;
    font-size: 25px;
  }
  .account-name {
    font-size: 25px;
  }
}

.NavbarButton:hover {
  color: coral;
  opacity: 0.8;
}

button:active {
  transition: 0.5s;
  transform: translateY(1px);
}
</style>