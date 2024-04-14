<template>
  <header class="header">
    <v-breadcrumbs class="header-breadcrumbs">
      <RouterLink class="header-breadcrumbs__link" to="/"> Home </RouterLink>
      <RouterLink class="header-breadcrumbs__link" to="/products">
        Products
      </RouterLink>
    </v-breadcrumbs>
    <v-icon class="header-icon">
      <RouterLink class="header-breadcrumbs__link" to="/cart">
        <img src="@/img/Vector.svg" alt="Icon-Cart" class="cart-icon" />
        <span class="quantity">{{ items.cartTotalItems }}</span>
      </RouterLink>
    </v-icon>

    <div class="search">
      <input type="text" v-model="searchValue" class="search-input" placeholder="Search" />
      <button type="submit" class="search-button" @click="productName()">
        Click
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../../stores/CartStore";

const searchValue = ref("");
const router = useRouter();
const items = useCartStore();

const productName = () => {
  router.push({ name: "Products", params: { name: searchValue.value } });
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #7e33e0;
  color: #fff;

  &-breadcrumbs {
    display: flex;
    align-content: center;
    justify-content: space-around;

    &__link {
      text-decoration: none;
      margin-left: 20px;
      color: #fff;
      font-family: Josefin Sans;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
    }
  }
  .cart-icon {
    position: relative;
  }
  .quantity {
    position: absolute;
    top: -2%;
  }

  .search {
    &-input {
      width: 328px;
      height: 40px;
      padding: 2px 2px 2px 16px;
      border-radius: 10px;
      border: 1px solid #8a8fb9;
      margin-right: 10px;
      color: #fff;
    }
  }
}
</style>
