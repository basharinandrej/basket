<template>
  <ul class="list-product">
    <ListProductsItem
      v-for="item in getProducts"
        :key="item.id"
        :imageUrl="item.imageUrl"
        :name="item.name"
        :description="item.description"
        :price="item.price"
        :vendor_code="item.vendor_code"
        :totalPrice="item.totalPrice"
        :id="item.id"
    />

    <li class="list-product__stub" v-if="getTotalProductsBasket === 0">Нет товаров в корзине</li>
  </ul>
</template>


<script>

import ListProductsItem from '@/components/ListProducts/ListProductsItem/ListProductsItem'

export default {
  name: 'ListProduct',
  components: {ListProductsItem},
  computed: {
    getProducts() {
      return this.$store.state.products.items
    },
    getTotalProductsBasket() {
      return this.$store.state.products.items.length
    }
  }
}
</script>

<style lang="sass">

.list-product
  &__stub
    margin-bottom: 52px
    display: block
    list-style: none
  &__item
    border-bottom: 1px solid #C4C4C4
  &__item:last-child
    border-bottom: 1px solid transparent

</style>