import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Board from "../views/Board.vue";
import Article from "../views/Ariticle.vue";
import Editor from "../views/Editor.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/board",
    component: Board,
  },
  {
    path: "/board/editor",
    component: Editor,
  },
  {
    path: "/board/:id",
    component: Article,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
