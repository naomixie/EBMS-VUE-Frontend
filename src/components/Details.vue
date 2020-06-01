<template>
  <div id="BookDetails">
    <div class="images">
      <!-- Update database with images -->
    </div>
    <div class="textinfo">
      <label class="booktitle">{{this.bookinfo.title}}</label>
      <br />
      <label class="smaller">Author: {{this.bookinfo.author}}</label>
      <br />
      <label class="smaller">Storage: {{this.bookinfo.storage}}</label>
      <br />
      <label class="smaller">ISBN: {{this.bookinfo.isbn}}</label>
      <br />
      <button class="addToCart" @click="addtocart()">ADD</button>
    </div>
    <hr />
    <div class="description">
      <label class="smaller">Description:</label>
      <br />
      <label class="bookdes">
        loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
        loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
        loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
        loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
        loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
        loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
        loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
        loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
      </label>

      <!-- Update database with book description-->
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import api from "./backend-api";

export default {
  name: "Bookdetails",
  props: {
    username: String
  },
  data() {
    return {
      user: "naomi",
      bookname: "",
      bookinfo: [],
      currentRoute: window.location.pathname
    };
  },
  computed: {
    booktitle: function() {
      console.log(this.currentRoute);
      if (
        this.currentRoute
          .split("/")[4]
          .split("%")
          .indexOf("%") < -1
      ) {
        return this.currentRoute.split("/")[4];
      }
      console.log(this.currentRoute.split("/")[4].replace(/%20/g, " "));

      return this.currentRoute.split("/")[4].replace(/%20/g, " ");
    }
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    addtocart() {
      this.user = this.username;
      //console.log(this.booktitle);
      api
        .createOrder(this.user, this.booktitle)
        .then(response => {
          this.response = response.data;
          console.log("Added book " + response.data);
        })
        .catch(e => {
          this.errors.push(e);
        });
      alert("Added book " + this.booktitle + " to Cart!");
    },
    fetchData() {
      //console.log("book details from backend...");
      api.getBooks().then(response => {
        console.log("CURRENT USER: " + this.username);
        response.data.forEach(element => {
          if (element.title === this.booktitle) {
            this.bookinfo = element;
            console.log(this.bookinfo);
          }
        });
      });
    }
  }
};
</script>
	

<style scoped>
#BookDetails {
  font-family: "Ubuntu";
  position: fixed;
  margin: auto 0;
  margin-top: 100px;
  left: 330px;
  height: 100%;
  width: calc(100% - 430px);
}
.images {
  display: inline-block;
  background-color: beige;
  height: 400px;
  width: 300px;
}

.textinfo {
  text-align: left;
  display: inline-block;
  padding: 30px;
  padding-left: 100px;
}

.smaller {
  font-size: 30px;
}

.addToCart {
  margin-top: 80px;
  margin-left: 180px;
  width: 100px;
  height: 50px;
  background-color: mediumseagreen;
  color: white;
  border: none;
  font-weight: bold;
  border: 1px solid rgb(0, 0, 0, 0.3);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
}

.description {
  padding: 40px;
  text-align: left;
}

.bookdes {
  padding: 30px;
  font-style: italic;
  font-size: 25px;
}

.booktitle {
  font-size: 40px;
  font-weight: bold;
}
</style>