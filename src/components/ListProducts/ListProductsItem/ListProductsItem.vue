<template>
  <li class="list-product__item">
    <img src="" alt="avatar_product" class="list-product__img">

    <div class="list-product__description-product description-product">
      <h3 class="description-product__title">Вытяжное устройство G2H</h3>
      <p class="description-product__paragraph">12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия</p>
      <p class="description-product__signature">Артикул: G2H1065</p>
    </div>

    <div class="list-product__wrapper">
      <ButtonGroup />
      <p class="list-product__price-one" v-show="priceForOne"> 12 644 ₽/шт.  </p>
    </div>

    <p class="list-product__price"> 12 644 ₽ </p>

    <ButtonClose />
  </li>
</template>


<script>

import ButtonGroup from '@/UI/command/ButtonGroup'
import ButtonClose from '@/UI/command/ButtonClose'

export default {
  name: "ListProductsItem",
  components: {ButtonGroup, ButtonClose},
  data() {
    return {
      priceForOne: true
    }
  }
}

</script>


<style lang="sass">

.list-product
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
  &__description-product
    margin-right: 79px
  .button-close
    position: absolute
    top: 0
    right: 0

.description-product
  &__title
    font-family: 'Lato'
    font-style: normal
    font-weight: normal
    font-size: 16px
    line-height: 145%
    color: #1F2432
    margin-bottom: 6px

  &__paragraph
    font-family: 'Lato'
    font-style: normal
    font-weight: normal
    font-size: 12px
    line-height: 150%
    color: #2C3242
    max-width: 263px
    margin-bottom: 7px

  &__signature
    font-family: 'Lato'
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 150%
    color: #797B86


</style>