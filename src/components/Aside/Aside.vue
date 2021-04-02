<template>

  <aside class="aside">

    <h3 class="aside__title title">
      Итого
    </h3>

    <ul class="aside__aside-list aside-list">
      <li class="aside-list__item">
        <p class="aside-list__name">Сумма заказа</p>
        <p class="aside-list__result">{{getTotalPriseBasket}} ₽</p>
      </li>

      <li class="aside-list__item">
        <p class="aside-list__name">Количество</p>
        <p class="aside-list__result">{{getTotalProductsBasket}} шт</p>
      </li>

      <li class="aside-list__item">
        <p class="aside-list__name">Установка</p>
        <p class="aside-list__result">{{ getInstallationServices}}</p>
      </li>
    </ul>

    <hr class="aside__line">

    <div class="aside__wrapper">
      <p class="aside__paragraph">Стоимость товаров</p>

      <strong class="aside__total-price">{{getTotalPriseBasket}} ₽</strong>
    </div>
    <div class="aside__box-button">
      <Button
          :onClick="this.onSubmitHandler"
          :typeButton="typeButtonPrimary"
      >
        Оформить заказ
      </Button>

      <Button
          :typeButton="typeButtonGhost"
          :onClick="onClick"
      >
        Купить в 1 клик
      </Button>
    </div>
  </aside>

</template>

<script>

import Button from "@/UI/command/Button";

export default {
  name: "Aside",
  components: {Button},
  data() {
    return {
      typeButtonPrimary: 'primary',
      typeButtonGhost: 'ghost',
    }
  },
  methods: {
    onSubmitHandler() {
      const products = this.$store.state.products.items
      const isInstallation = this.$store.state.products.isInstallation
      const totalPrice = this.$store.getters.getTotalPriceAllProducts
      const totalProduct = this.$store.getters.getTotalProducts
      
      const data = {
        products: [...products],
        isInstallation,
        totalPrice,
        totalProduct
      }
      products.length ? console.log(data) : alert('Корзина пуста')
    },
    onClick() {
      console.log('Купить в 1 клик')
    }
  },
  computed: {
    getTotalProductsBasket() {
      return this.$store.getters.getTotalProducts
    },
    getTotalPriseBasket() {
      return this.$store.getters.getTotalPriceAllProducts
    },
    getInstallationServices() {
      return this.$store.state.products.isInstallation ? 'Да' : 'Нет'
    },
  }
}
</script>

<style lang="sass">

.aside
  padding: 35px 30px
  background: #F6F8FA
  border-radius: 5px
  &__total-price
    font-size: 26px
    font-family: 'Lato', sans-serif
    @media screen and (max-width: 576px) 
      font-size: 20px
  &__paragraph
    font-family: 'Lato', sans-serif
  &__wrapper
    display: flex
    justify-content: space-between
    margin-bottom: 32px
  &__aside-list
    margin-bottom: 29px

  &__line
    margin-bottom: 16px

  &-list
    &__name
      font-family: 'Lato', sans-serif
    &__result
      font-family: 'Lato', sans-serif
    &__item
      display: flex
      list-style: none
      justify-content: space-between
      margin-bottom: 18px
    &__item:last-child
      margin-bottom: 0

  &__title
    font-family: 'Lato'
    font-style: normal
    font-weight: 600
    font-size: 24px
    line-height: 120.52%
    color: #1F2432
    margin-bottom: 31px

  &__box-button
    display: flex
    flex-direction: column
    .main-btn:first-child
      margin-bottom: 12px
</style>