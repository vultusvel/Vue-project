import {
    createMemoryHistory,
    createRouter,
    createWebHistory,
  } from "vue-router";
  // @ts-ignore
  import FiltersPage from "../views/FiltersPage.vue";
  // @ts-ignore
  import HomePage from "../components/Home/HomePage.vue";
  // @ts-ignore
  import CartPage from "../views/CartPage.vue";
  // @ts-ignore
  import DetailsPage from "../views/DetailsPage.vue";
  
  const routes = [
    {
      path: "/",
      name: "Home",
      // @ts-ignore
      component: HomePage,
    },
    {
      path: "/products/:name?",
      name: "Products",
      // @ts-ignore
      component: FiltersPage,
    },
    {
      path: "/cart",
      name: "Cart",
      // @ts-ignore
      component: CartPage,
    },
    {
      path: "/details/:name",
      name: "Details",
      // @ts-ignore
      component: DetailsPage,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  