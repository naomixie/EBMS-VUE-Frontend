<template>
  <div v-if="isAdmin" id="Booklist">
    <form v-on:submit.prevent="searchBooks">
      <input id="searchinput" v-model="searchText" placeholder="Search for books" />
      <button id="searchbutton" class="Admin" v-on:click="getData">GO</button>
    </form>
    <willtable
      class="willtable"
      ref="willtable"
      :columns="columns"
      v-model="data"
      maxHeight="800"
      rowHeight="80"
    />
  </div>

  <div v-else id="Booklist">
    <div id="GuestBooklist">
      <form v-on:submit.prevent="searchBooks">
        <input id="searchinput" v-model="searchText" placeholder="Search for account" />
        <button id="searchbutton" class="Guest">GO</button>
      </form>
      <div id="result">
        <!--
        <table>
          <thead>
            <tr>
              <th v-for="header in headers" :key="header.id">{{header.title}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="info in filteredinfo" :key="info.id">
              <td>{{info.isbn}}</td>
              <td>{{info.author}}</td>
              <td>{{info.storage}}</td>
              <td>{{info.title}}</td>
            </tr>
          </tbody>
        </table>
        -->
        <div id="booksarea">
          <div v-for="info in filteredinfo" :key="info.id" class="window">
            <div class="textarea">
              <router-link :to="processLink(info.title)">
                {{info.title}}
                <br />
                {{info.author}}
                <br />
                {{info.storage}}
                <br />
                {{info.isbn}}
                <br />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import willtable from "vue-willtable";
import api from "./backend-api";

// require styles
import "vue-willtable/dist/vue-willtable.min.css";

export default {
  name: "booklist",
  components: {
    willtable
  },
  props: {
    username: String,
    isAdmin: Boolean
  },
  data() {
    return {
      user:'',
      booktitle: "",
      searchText: "",
      headers: [
        { id: 1, title: "ISBN" },
        { id: 2, title: "Author" },
        { id: 3, title: "Storage" },
        { id: 4, title: "Title" }
      ],
      currentRoute: window.location.pathname,
      books: [],
      infos: [],
      columns: [
        {
          type: "selection",
          width: 50,
          fixed: true
        },
        {
          title: "Books",
          key: "img",
          fixed: true,
          width: 300
        },
        {
          title: "Author",
          key: "author",
          fixed: true,
          width: 300
        },
        {
          title: "Title",
          key: "title",
          fixed: true,
          width: 300
        },
        {
          title: "ISBN",
          key: "ISBN",
          width: 270,
          type: "number"
        },
        {
          title: "Storage",
          key: "storage",
          width: 270
        }
      ]
    };
  },
  computed: {
    filteredinfo: function() {
      return this.infos.filter(info => {
        return info.title.toLowerCase().match(this.searchText);
      });
    }
  },

  mounted() {
    this.getData();
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.user = this.username;
      this.isSearch = true;
      console.log("Fetching data from backend...");
      console.log("Current User: " + this.user);
      api.getBooks().then(response => {
        this.infos = response.data;
        //console.log(this.books);
      });
    },
    processLink(title) {
      console.log("is search: " + this.isSearch);
      return "/Guest/Books/search/" + title;
    },
    getData() {
      if (this.isAdmin) {
        const data = [
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
        ];
        const fdata = data.filter(dat => {
          return dat.title.toLowerCase().match(this.searchText);
        });
        this.$refs.willtable.setData(fdata);
      }
    }
  }
};
</script>
	

<style scoped>
#Booklist {
  position: fixed;
  margin: auto 0;
  left: 330px;
  width: calc(100% - 430px);
}

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

#result {
  margin-top: 50px;
}

.window {
  text-align: left;
  padding: 20px;
  float: left;
  width: 300px;
  margin: 20px;
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.Admin {
  background-color: dodgerblue;
}

.Guest {
  background-color: mediumseagreen;
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