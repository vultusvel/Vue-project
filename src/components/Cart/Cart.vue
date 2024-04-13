<template>
  <section class="cart">
    <div class="cart-products">
      <div
        class="cart-products__product"
        v-for="(product, index) in items.cart"
        :key="index"
      >
        <img
          class="cart-products__product__img"
          :width="150"
          :height="105"
          :src="product.imageSet[0]"
          :alt="product.name"
        />
        <img
          src="@/img/close.svg"
          alt="close-icon"
          width="12"
          height="12"
          class="cart-products__product__img-close"
          @click="items.removeFromCart(product)"
        />
        <div class="cart-products__product__text-box">
          <h3 class="cart-products__product__text-box__title">
            {{ product.name }}
          </h3>
          <p class="cart-products__product__text-box__price">
            $ {{ product.price }}
          </p>
        </div>
        <div class="cart-products__product__quantity">
          <button
            type="submit"
            class="cart-products__product__quantity-button"
            @click="items.decrementQuantity(index)"
          >
            -
          </button>
          <p class="cart-products__product__quantity-number">
            {{ product.quantity }}
          </p>
          <button
            type="submit"
            class="cart-products__product__quantity-button"
            @click="items.addToCart(product)"
          >
            +
          </button>
        </div>

        <div class="cart-products__product__total">
          {{
            parseFloat((product.price * product.quantity).toFixed(2)).toFixed(
              2
            )
          }}$
        </div>
      </div>
    </div>
    <div class="cart-costs"></div>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from "../../stores/CartStore";

const items = useCartStore();
</script>

<style lang="scss">
// @import "../../styles/sass/CartPage.scss";
</style>
