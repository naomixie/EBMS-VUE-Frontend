<template>
  <div class="book">
    <router-view v-bind:username="this.username" />
  </div>
</template>


<script>
import Booklist from "./BookList.vue";
import Bookdetails from "./Details.vue";

export default {
  name: "book",
  components: {},
  props: {
    username: String,
    isAdmin: Boolean
  }
};
</script>
	

<style scoped>
</style>