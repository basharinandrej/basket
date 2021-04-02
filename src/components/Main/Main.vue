<template>
  <main class="main">

    <HeadMain />

    <ListProducts />

    <Input
        :typeInput="typeInputCheckbox"
        :typeControl="typeControl"
        @onChange="isChecked"
        v-if="getTotalProductsBasket"
    >
      <div class="main-input__input-content input-content">
        <img src="../../assets/img/tools.png" class="input-content__img" alt="icon">
        <div class="input-content__wrapper">
          <h5 class="input-content__title title">
            Установка
          </h5>
          <p class="input-content__paragraph">
            Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.
          </p>
        </div>
      </div>
    </Input>
  </main>
</template>

<script>

import ListProducts from "@/components/ListProducts/ListProducts";
import Input from "@/UI/command/Input/Input";
import HeadMain from "@/components/Main/HeadMain/HeadMain";

export default {
  name: 'Main',
  components: {HeadMain, ListProducts, Input},
  data() {
    return {
      typeInputCheckbox: 'checkbox',
      typeControl: 'big'
    }
  },
  computed: {
    getTotalProductsBasket() {
      return this.$store.state.products.items.length
    }
  },
  methods: {
    isChecked(e) {
      let isChecked = e.target.checked
      
      this.$store.commit('toggleInstallationServices', isChecked)
    }
  }
}

</script>

<style lang="sass">

.main
  &__main-head
    margin-bottom: 54px
  &__counter
    font-family: "Lato", sans-serif
    font-style: normal
    font-weight: normal
    font-size: 18px
    line-height: 145%
    color: #797B86



</style>