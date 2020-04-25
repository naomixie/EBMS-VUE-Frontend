<template>
  <div class="Register">
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/Register.vue";

export default {
  name: "RegisterPage",
  components: {
    Register
  }
};
</script>

<style scoped>
.Register{
  height: 100%;
}
</style>