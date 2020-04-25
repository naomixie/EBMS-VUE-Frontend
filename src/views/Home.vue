<template>
  <div class="Home">
    <div v-if="isAdmin===true" id="AdminHome">
      <NavBar v-bind:isAdmin="true" />
      <router-view />
    </div>
    <div v-if="!isAdmin" id="GuestHome">
      <NavBar v-bind:isAdmin="false" />
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Booklist from "@/components/BookList.vue";
import ManageAccount from "@/components/ManageAccount.vue";
import Shoppingcart from "@/components/ShoppingCart.vue";
import Order from "@/components/Order.vue";

export default {
  name: "Home",
  components: {
    NavBar
  },
  props: {
    isAdmin: Boolean
  }
};
</script>

<style scoped>
.Login {
  height: 100%;
}
</style>