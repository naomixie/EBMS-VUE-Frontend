<template>
  <div id="Shoppingcart">
    <form v-if="isAdmin">
      <input id="searchinput" v-model="searchText" placeholder="Search for orders" />
      <button class="Admin" id="searchbutton">GO</button>
      <button class="Admin" id="Clearbutton">Buy all</button>
    </form>
    <form v-else>
      <input id="searchinput" v-model="searchText" placeholder="Search for orders" />
      <button class="Guest" id="searchbutton">GO</button>
      <button class="Guest" id="searchbutton" style="margin-left:20px" @click="ClearCart()">Buy all</button>
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
            <td>{{info.book}}</td>
            <td>
              <button class="Access green">+</button>
              <button class="Block red">-</button>
            </td>
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
    username: String,
    isAdmin: Boolean
  },
  data() {
    return {
      bought: "",
      count: 0,
      buymessage: "Bought books: ",
      user: "",
      searchText: "",
      headers: [
        { id: 1, title: "Order.No" },
        { id: 2, title: "Title" },
        { id: 3, title: "Buy" }
        //{ id: 4, title: "Title" }
      ],
      infos: []
    };
  },
  computed: {
    filteredinfo: function() {
      return this.infos.filter(info => {
        return info.book.toLowerCase().match(this.searchText);
      });
    }
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    ClearCart() {
      this.infos.forEach(element => {
        this.count = this.count + 1;
        this.bought = this.bought + element.book;
      });
      console.log(this.bought);
      api
        .createNOrder(this.username, this.bought, this.count)
        .then(response => {
          //alert(this.bought);
          console.log(response.data);
          //console.log("CLEARING CART.");
        });
      this.count = 0;
      api.clearCart().then(response => {
        this.infos.forEach(element => {
          this.buymessage = this.buymessage + element.book + " ";
        });
        alert(this.buymessage);
        console.log("CLEARING CART.");
      });
    },
    getOrders() {
      this.user = this.username;
      console.log("Current user: " + this.username);
      api.getOrders().then(response => {
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
  margin-left: 10px;
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
  background-color: rgb(38, 122, 206);
}

.Guest {
  background-color: mediumseagreen;
}

.green {
  background-color: mediumseagreen;
  color: white;
  border: none;
  font-weight: bold;
  border: 1px solid rgb(0, 0, 0, 0.3);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
}

.red {
  background-color: red;
  color: white;
  border: none;
  font-weight: bold;
  border: 1px solid rgb(0, 0, 0, 0.3);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
}

.Access {
  font-size: 15px;
  width: 70px;
  height: 45px;
  margin-right: 3px;
  border-radius: 50px;
}

.Block {
  font-size: 15px;
  width: 70px;
  height: 45px;
  border-radius: 50px;
}

.search * {
  box-sizing: border-box;
}

#Shoppingcart {
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







