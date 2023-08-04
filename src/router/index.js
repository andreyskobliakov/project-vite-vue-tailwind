import { createRouter, createWebHistory } from "vue-router";
import UsersList from "../components/UsersList.vue";
import UserPage from "../components/UserPage.vue";

const routes = [
  {
    path: "/",
    component: UsersList,
  },
  {
    path: "/user/:id",
    name: "User",
    component: UserPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
