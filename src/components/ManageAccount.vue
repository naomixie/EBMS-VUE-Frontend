<template>
  <div id="ManageAccount">
    <form v-on:submit.prevent="searchBooks">
      <input id="searchinput" v-model="searchText" placeholder="Search for account" />
      <button id="searchbutton">GO</button>
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
            <td>{{info.name}}</td>
            <td>{{info.email}}</td>
            <td>{{info.password}}</td>
            <td>{{info.Admin}}</td>
            <td>
              <button class="Access green">Access</button>
              <button class="Block red">Block</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

export default {
  name: "search",
  data() {
    return {
      searchText: "",
      widthIncrement: 1,
      heightIncrement: 1,
      rowHeightIncrement: 1,
      headers: [
        { id: 1, title: "Name" },
        { id: 2, title: "Email address" },
        { id: 3, title: "Password" },
        { id: 4, title: "Identity" },
        { id: 5, title: "Access" }
      ],
      infos: [
        {
          id: 1,
          name: "naomi",
          email: "xxxxx@sjtu.edu.cn",
          password: "Lalalala",
          identity: "Admin"
        },
        {
          id: 11,
          name: "naomi",
          email: "xxxxx@sjtu.edu.cn",
          password: "Lalalala",
          identity: "Admin"
        },
        {
          id: 2,
          name: "celine",
          email: "xxxxx@sjtu.edu.cn",
          password: "Lalalala",
          identity: "Admin"
        },
        {
          id: 3,
          name: "nicole",
          email: "xxxxx@sjtu.edu.cn",
          password: "Lalalala",
          identity: "Admin"
        },
        {
          id: 4,
          name: "naomi",
          email: "xxxxx@sjtu.edu.cn",
          password: "Lalalala",
          identity: "Admin"
        },
        {
          id: 5,
          name: "naomi",
          email: "xxxxx@sjtu.edu.cn",
          password: "Lalalala",
          identity: "Admin"
        },
        {
          id: 6,
          name: "naomi",
          email: "xxxxx@sjtu.edu.cn",
          password: "Lalalala",
          identity: "Admin"
        },
        {
          id: 7,
          name: "naomi",
          email: "xxxxx@sjtu.edu.cn",
          password: "Lalalala",
          identity: "Admin"
        },
        {
          id: 8,
          name: "naomi",
          email: "xxxxx@sjtu.edu.cn",
          password: "Lalalala",
          identity: "Admin"
        },
        {
          id: 9,
          name: "naomi",
          email: "xxxxx@sjtu.edu.cn",
          password: "Lalalala",
          identity: "Admin"
        },
        {
          id: 10,
          name: "naomi",
          email: "xxxxx@sjtu.edu.cn",
          password: "Lalalala",
          identity: "Admin"
        }
      ]
    };
  },
  methods: {},
  computed: {
    filteredinfo: function() {
      return this.infos.filter(info => {
        return info.name.toLowerCase().match(this.searchText);
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
  background-color: dodgerblue;
  color: white;
  border: none;
  font-weight: bold;
  border: 1px solid rgb(0, 0, 0, 0.3);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
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

#ManageAccount {
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
  width: 20%;
}

tr {
  height: 50px;
  border-bottom: none;
}

tr:nth-child(even) {
  background-color: rgb(242, 242, 242, 0.9);
}
</style>







