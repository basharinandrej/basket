<template>
  <ul class="list-product">
    <ListProductsItem />
    <ListProductsItem />
  </ul>
</template>


<script>
import ListProductsItem from '@/components/ListProducts/ListProductsItem/ListProductsItem'


export default {
  components: {ListProductsItem}
}
</script>

<style lang="sass">

.list-product
  &__item
    border-bottom: 1px solid #C4C4C4
  &__item:last-child
    border-bottom: 1px solid transparent

</style>