<template>
  <div class="main__main-head main-head">
    <h1 class="main-head__title">
      Ваша корзина
    </h1>

    <p class="main-head__counter">
      {{ getTotalProductsBasket }} товара
    </p>

    <MainLink
      :onClick="removeAllProductsBasket"
    >
      Очистить корзину
    </MainLink>
  </div>
</template>

<script>

import MainLink from '@/UI/command/MainLink'

export default {
  name: 'HeadMain',
  components: {MainLink},
  computed: {
    getTotalProductsBasket() {
      return this.$store.state.products.items.length
    }
  },
  methods: {
    removeAllProductsBasket() {
      this.$store.commit('removeAllProduct')
    }
  }
}

</script>

<style lang="sass">

.main
  &-head
    display: flex
    align-items: baseline

    &__title
      margin-right: 22px

    &__counter
      color: #797B86
      margin-right: auto


</style>