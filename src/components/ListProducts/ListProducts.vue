<template>
  <ul class="list-product">
    <ListProductsItem
      v-for="item in products"
        :key="item.id"
        :imageUrl="item.imageUrl"
        :name="item.name"
        :description="item.description"
        :price="item.price"
        :vendor_code="item.vendor_code"
    />
  </ul>
</template>


<script>

import ListProductsItem from '@/components/ListProducts/ListProductsItem/ListProductsItem'

export default {
  name: 'ListProduct',
  components: {ListProductsItem},
  data() {
    return {
      products: []
    }
  },
  async mounted() {
    this.products = await this.$store.state.products.items
  }
}
</script>

<style lang="sass">

.list-product
  &__item
    border-bottom: 1px solid #C4C4C4
  &__item:last-child
    border-bottom: 1px solid transparent

</style>