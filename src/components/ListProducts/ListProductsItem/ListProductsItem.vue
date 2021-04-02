<template>
  <li class="list-product__item">

    <img :src="setImageUrl" alt="avatar_product" class="list-product__img">

    <div class="list-product__description-product description-product">
      <h5 class="description-product__title title">{{name}}</h5>
      <p class="description-product__paragraph">{{description}}</p>
      <p class="description-product__signature">Артикул: {{vendor_code}}</p>
    </div>

    <div class="list-product__wrapper">
      <ButtonGroup 
        :incrementCounter="onClickIncrementCounter"
        :decrementCounter="onClickDecrementCounter"
        :id="id"
      />
      <p class="list-product__price-one" v-show="totalPrice - price >= price"> {{ price }} ₽/шт.  </p>
    </div>

    <p class="list-product__price"> {{totalPrice}} ₽ </p>

    <ButtonClose 
      :onClick="removeOneProduct"
      :id="id"
    />
  </li>
</template>


<script>

import ButtonGroup from '@/UI/command/ButtonGroup'
import ButtonClose from '@/UI/command/ButtonClose'

export default {
  name: "ListProductsItem",
  props: ['imageUrl', 'name', 'description', 'price', 'vendor_code', 'id', 'totalPrice'],
  components: {ButtonGroup, ButtonClose},
  methods: {
    removeOneProduct(id) {
      this.$store.commit('removeIdProduct', id)
      // TODO вернуть проверку
      // window.confirm(`Вы действительно хотите удалить ${this.name} из корзины ?`) 
      //   ? 
      //   : null
      !this.$store.state.products.items.length 
        && this.$store.commit('setDefaultInstalitionSerices')
    },
    onClickIncrementCounter(id) {
      this.$store.commit('incrementPrizeCurrentProduct', id)
    },
    onClickDecrementCounter(id) {
      this.$store.commit('decrementPrizeCurrentProduct', id)
    }
  },
  computed: {
    setImageUrl() {
      return require(`@/assets/products/${this.imageUrl}.png`)
    }
  }
}

</script>


<style lang="sass">

.list-product
  &__price
    font-family: 'Lato', sans-serif
    font-weight: bold
  &__price-one
    font-family: 'Lato', sans-serif
  &__wrapper
    display: flex
    flex-direction: column
    align-items: center
    margin-right: 84px
  &__item
    list-style: none
    display: flex
    align-items: center
    padding: 29px 53px 23px 15px
    position: relative
  &__img
    margin-right: 31px
    width: 72px
    height: 72px
  &__description-product
    margin-right: 79px
  .button-close
    position: absolute
    top: 0
    right: 0

.description-product
  &__title
    font-family: 'Lato', sans-serif
    font-style: normal
    font-weight: normal
    font-size: 16px
    line-height: 145%
    color: #1F2432
    margin-bottom: 6px

  &__paragraph
    font-family: 'Lato', sans-serif
    font-style: normal
    font-weight: normal
    font-size: 12px
    line-height: 150%
    color: #2C3242
    max-width: 263px
    margin-bottom: 7px

  &__signature
    font-family: 'Lato', sans-serif
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 150%
    color: #797B86

@media screen and (max-width: 768px) 
  .list-product
    &__item
      padding: 29px 15px 23px 15px

</style>