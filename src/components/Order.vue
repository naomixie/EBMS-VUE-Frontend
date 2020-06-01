<template>
  <div id="Order">
    <form v-if="isAdmin" v-on:submit.prevent="searchBooks">
      <input id="searchinput" v-model="searchText" placeholder="Search for account" />
      <button class="Admin" id="searchbutton">GO</button>
    </form>
    <form v-else v-on:submit.prevent="searchBooks">
      <input id="searchinput" v-model="searchText" placeholder="Search for account" />
      <button class="Guest" id="searchbutton">GO</button>
    </form>
    <div id="result">
      <table>
        <thead>
          <tr>
            <th v-for="header in headers" :key="header.id">{{header.title}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="info in filteredinfo" :key="info.id">
            <td>{{info.id}}</td>
            <td>{{info.user}}</td>
            <td>{{info.books}}</td>
            <td>{{info.sum}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import api from "./backend-api";

export default {
  name: "search",
  props: {
    isAdmin: Boolean
  },
  data() {
    return {
      searchText: "",
      headers: [
        { id: 1, title: "Order No." },
        { id: 2, title: "Client" },
        { id: 3, title: "Books" },
        { id: 4, title: "Sum" }
      ],
      infos: []
    };
  },
  mounted() {
    this.getNOrders();
  },
  computed: {
    filteredinfo: function() {
      return this.infos.filter(info => {
        return info.books.toLowerCase().match(this.searchText);
      });
    }
  },
  methods: {
    getNOrders() {
      this.user = this.username;
      console.log("Current user: " + this.username);
      api.getNOrders().then(response => {
        this.infos = response.data;
        console.log(this.infos);
      });
    }
  }
};
</script>
    
<style scoped>
#searchinput {
  margin: 30px;
  margin-right: 0px;
  width: 400px;
  height: 50px;
  border-radius: 50px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid rgb(0, 0, 0, 0.3);
  text-indent: 10px;
}

#searchbutton {
  width: 100px;
  height: 50px;
  border-radius: 50px;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid rgb(0, 0, 0, 0.3);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
}

.Admin {
  background-color: dodgerblue;
}

.Guest {
  background-color: mediumseagreen;
}

.search * {
  box-sizing: border-box;
}

#Order {
  position: fixed;
  left: 330px;
  width: calc(100% - 430px);
  margin: 20px auto;
  text-align: center;
}

#result {
  margin: 30px 0;
  border: 1px dotted #ccc;
  border: 1px solid rgb(0, 0, 0, 0.3);
}

table {
  width: 100%;
  padding: 20px;
}

th,
td {
  width: 16%;
}

tr {
  height: 50px;
  border-bottom: none;
}

tr:nth-child(even) {
  background-color: rgb(242, 242, 242, 0.9);
}
</style>







