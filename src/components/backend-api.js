import axios from "axios";

const AXIOS = axios.create({
  baseURL: `http://localhost:8080/`,
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default {
  getUser() {
    //console.log("fetching users");
    return AXIOS.get(`/user/all`);
  },
  createUser(Name, email, password, identity) {
    //console.log("Adding User: " + Name + " " + email);
    return AXIOS.post(
      `user/add/` + Name + "/" + email + "/" + password + "/" + identity
    );
  },
  createOrder(user, book) {
    //console.log("Adding To cart: " + book + " " + user);
    return AXIOS.post(`cart/add/` + user + `/` + book);
  },
  createNOrder(user, books, sum) {
    //console.log("Adding To cart: " + book + " " + user);
    return AXIOS.post(`norder/add/` + user + `/` + books + "/" + sum);
  },
  getBooks() {
    //console.log("fetching all books...");
    return AXIOS.get(`/book/all`);
  },
  getOrders() {
    //console.log("fetching all books...");
    return AXIOS.get(`/cart/all`);
  },
  getNOrders() {
    //console.log("fetching all books...");
    return AXIOS.get(`/norder/all`);
  },
  clearCart() {
    return AXIOS.delete(`/cart/delete/all`);
  },
  getSecured(user, password) {
    return AXIOS.get(`/secured/`, {
      auth: {
        username: user,
        password: password,
      },
    });
  },
};
