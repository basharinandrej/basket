<template>
  <header class="header">
    <div class="header__container container">

      <div class="header__header-total header-total">

        <img src="../../assets/img/basket.png" class="header-total__img" alt="basket_icon">

        <div class="header-total__text-box">
          <p class="header-total__paragraph">
            Ваша корзина
          </p>
          <p class="header-total__counter-product">
            {{getTotalProductsBasket}} товара
          </p>
          <p class="header-total__price">
            {{getTotalPriseBasket}} ₽
          </p>
        </div>
      </div>

    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  computed: {
    getTotalProductsBasket() {
      return this.$store.getters.getTotalProducts
    },
    getTotalPriseBasket() {
      return this.$store.getters.getTotalPriceAllProducts
    }
  }
}

</script>

<style lang="sass">

.header
  padding: 19px 0 0 0
  &__header-total
    justify-content: flex-end

.header-total
  display: flex
  align-items: center

  &__text-box
    display: flex
    flex-direction: column

  &__img
    min-width: 32px
    height: 32px
    width: 32px
    margin-right: 10px

  &__paragraph
    font-family: 'Lato', sans-serif
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 150%
    color: #1F2432

  &__counter-product
    font-family: 'Lato', sans-serif
    font-style: normal
    font-weight: normal
    font-size: 12px
    line-height: 145%
    color: #797B86

  &__price
    font-family: 'Lato', sans-serif
    font-style: normal
    font-weight: normal
    font-size: 12px
    line-height: 145%
    color: #1F2432


</style>