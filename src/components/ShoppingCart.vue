<template>
  <div id="Shoppingcart">
    <form v-if="identity === 'Admin'" v-on:submit.prevent="searchBooks">
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
            <td>{{info.img}}</td>
            <td>{{info.author}}</td>
            <td>{{info.title}}</td>
            <td>{{info.ISBN}}</td>
            <td>{{info.storage}} </td>
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

export default {
  name: "search",
  data() {
    return {
      searchText: "",
      headers: [
        { id: 1, title: "Books" },
        { id: 2, title: "Author" },
        { id: 3, title: "Title" },
        { id: 4, title: "ISBN" },
        { id: 5, title: "Storage" },
        { id: 6 , title:  "Buy"}
      ],
      infos: [
        {
          id: 1,
          img: 1,
          author: "Fitzgerald",
          title: "The Great Gatsby",
          ISBN: 12345678,
          storage: "120,000"
        },
        {
          id: 2,
          img: 1,
          author: "Jane",
          title: "Pride and Prejudice",
          ISBN: 12345678,
          storage: "120,000"
        },
        {
          id: 3,
          img: 1,
          author: "George",
          title: "1984",
          ISBN: 12345678,
          storage: "120,000"
        },
        {
          id: 4,
          img: 1,
          author: "Charles",
          title: "Great Expectations",
          ISBN: 12345678,
          storage: "120,000"
        },
        {
          id: 5,
          img: 1,
          author: "Charles",
          title: "Oliver Twist",
          ISBN: 12345678,
          storage: "120,000"
        },
        {
          id: 6,
          img: 1,
          author: "Harper Lee",
          title: "To kill a mocking bird",
          ISBN: 12345678,
          storage: "120,000"
        },
        {
          id: 7,
          img: 1,
          author: "Tolestoy",
          title: "War and piece",
          ISBN: 12345678,
          storage: "120,000"
        },
        {
          id: 8,
          img: 1,
          author: "Hugo",
          title: "Les Miserables",
          ISBN: 12345678,
          storage: "120,000"
        },
        {
          id: 9,
          img: 1,
          author: "Son",
          title: "The art of war",
          ISBN: 12345678,
          storage: "120,000"
        },
        {
          id: 10,
          img: 1,
          author: "James",
          title: "The catcher in the rye",
          ISBN: 12345678,
          storage: "120,000"
        },
        {
          id: 11,
          img: 1,
          author: "Rick",
          title: "Percy Jackson",
          ISBN: 12345678,
          storage: "120,000"
        }
      ],
    };
  },
  methods: {},
  computed: {
    filteredinfo: function() {
      return this.infos.filter(info => {
        return info.title.toLowerCase().match(this.searchText);
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

.Admin{
    background-color: rgb(38, 122, 206);
}

.Guest{
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







