import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/LoginPage.vue";
import Register from "../views/RegisterPage.vue";
import Home from "../views/Home.vue";
import Book from "@/components/Books.vue";
import booklist from "@/components/BookList.vue";
import ManageAccount from "@/components/ManageAccount.vue";
import Shoppingcart from "@/components/ShoppingCart.vue";
import Order from "@/components/Order.vue";
import details from "@/components/Details.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
  },

  {
    path: "/Admin",
    component: Home,
    props: { isAdmin: true },
    children: [
      {
        path: "Books",
        component: Book,
        props: { isAdmin: true },
      },
      {
        path: "Home",
        name: "AdminHome",
        props: { isAdmin: true },
      },
      {
        path: "ManageAccount",
        component: ManageAccount,
        props: { isAdmin: true },
      },
      {
        path: "Shoppingcart",
        component: Shoppingcart,
        props: { isAdmin: true },
      },
      {
        path: "Orders",
        component: Order,
        props: { isAdmin: true },
      },
      {
        path: "Statistics",
        component: Book,
        props: { isAdmin: true },
      },
    ],
  },

  {
    path: "/Guest",
    component: Home,
    props: { isAdmin: false },
    children: [
      {
        path: "Books",
        component: Book,
        props: { isAdmin: false },
        children: [
          {
            path: "search",
            component: booklist,
          },
          {
            path: "search/*",
            component: details,
          },
        ],
      },
      {
        path: "Home/:username",
        name: "GuestHome",
        props: { isAdmin: false },
      },
      {
        path: "Shoppingcart",
        component: Shoppingcart,
        props: { isAdmin: false },
      },
      {
        path: "Orders",
        component: Order,
        props: { isAdmin: false },
      },
      {
        path: "Statistics",
        component: Book,
        props: { isAdmin: false },
      },
    ],
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
