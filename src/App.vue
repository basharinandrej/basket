<template>
  <div id="app">
    <div class="container">

      <h1>Ваша корзина</h1>

      <Button
        :onClick="this.onClick"
        :typeButton="typeButtonPrimary"
      >
        Оформить заказ
      </Button>

      <Button
          :onClick="this.onClick"
          :typeButton="typeButtonGhost"
      >
        Купить в 1 клик
      </Button>


      <Breadcrumbs
        :breadcrumbs="breadcrumbs"
      />

      <Input
          :typeInput="typeInputCheckbox"
          :typeControl="typeControl"
      >
        <div class="main-input__input-content input-content">
          <img src="./assets/img/tools.png" class="input-content__img" alt="icon">
          <div class="input-content__wrapper">
            <h5 class="input-content__title">
              Установка
            </h5>
            <p class="input-content__paragraph">
              Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.
            </p>
          </div>
        </div>
      </Input>
    </div>
  </div>
</template>

<script>

import Button from "@/UI/command/Button";
import Breadcrumbs from "@/UI/Breadcrumbs/Breadcrumbs";
import Input from "@/UI/command/Input/Input";

export default {
  name: 'App',
  data() {
    return {
      typeButtonPrimary: 'primary',
      typeButtonGhost: 'ghost',
      typeButtonDefault: 'default',
      breadcrumbs: [{ page: 'Главная', href: '#1' }, { page: 'Корзина', href: '#2'}],
      typeInputCheckbox: 'checkbox',
      typeControl: 'big'
    }
  },
  components: {Button, Breadcrumbs, Input},
  methods: {
    onClick() {
      alert('1')
    }
  }
}

</script>

<style lang="sass">

*
  box-sizing: border-box

body
  margin: 0
  padding: 0

.container
  max-width: calc( 1440px - 162px )
  margin: 0 auto

h1, h2, h3, h4, h5, h6, p, span, ul
  margin: 0
  padding: 0

</style>
