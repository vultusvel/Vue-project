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
          {{ calculateProductTotal(product) }}$
        </div>
      </div>
    </div>
    <div class="cart-costs">
      <div class="cart-costs-box">
        <div class="cart-costs-box-total">
          <p class="cart-costs-box-total__title">Subtotal:</p>
          <p class="cart-costs-box-total__cost">{{ subtotal }}$</p>
        </div>
        <div class="cart-costs-box-total">
          <p class="cart-costs-box-total__title">Total:</p>
          <p class="cart-costs-box-total__cost">{{ total }}$</p>
        </div>
        <div class="cart-costs-box-shipping">
          <p class="cart-costs-box-shipping__title">Shipping:</p>
          <p class="cart-costs-box-shipping__cost">100$</p>
        </div>
        <div class="cart-costs-box-b">
          <button class="cart-costs-box-b-button">Proceed to checkout</button>
        </div>
      </div>
      <div class="cart-costs-b">
        <button @click="items.clearCart()" class="cart-costs-b-button">
          Clear cart
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "../../stores/CartStore";
import { Product } from "../../types/interfaces";

const items = useCartStore();

const calculateProductTotal = (product: Product) => {
  return (product.price * product.quantity).toFixed(2);
};
const subtotal = computed(() => {
  return items.cart
    .reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0)
    .toFixed(2);
});

const total = computed(() => {
  return +subtotal.value + 100;
});
</script>

<style lang="scss">
@import "../../styles/sass/CartPage.scss";
</style>
