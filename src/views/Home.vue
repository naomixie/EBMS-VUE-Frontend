<template>
  <div class="Home">
    <div v-if="isAdmin===true" id="AdminHome">
      <NavBar v-bind:isAdmin="true" v-bind:username="this.username" />
      <router-view v-bind:username="this.username"/>
    </div>
    <div v-if="!isAdmin" id="GuestHome">
      <NavBar v-bind:isAdmin="false" v-bind:username="this.username" />
      <router-view v-bind:username="this.username"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Book from "@/components/Books.vue";
import ManageAccount from "@/components/ManageAccount.vue";
import Shoppingcart from "@/components/ShoppingCart.vue";
import Order from "@/components/Order.vue";
import { mount } from "@vue/test-utils";

export default {
  name: "Home",
  components: {
    NavBar
  },
  props: {
    isAdmin: Boolean
  },
  data() {
    return {
      username: "",
      currentRoute: window.location.pathname
    };
  },
  mounted() {
    this.getUsername();
  },
  methods: {
    getUsername() {
      this.username = this.currentRoute.split("/")[
        this.currentRoute.split("/").indexOf("Home") + 1
      ];
    }
  }
};
</script>

<style scoped>
.Login {
  height: 100%;
}
</style>