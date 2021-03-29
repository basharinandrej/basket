<template>
  <div id="app" class="basket">
    <div class="basket__container container">



      <Breadcrumbs
        :breadcrumbs="breadcrumbs"
      />

      <div class="basket__wrapper">
        <Main />

        <Aside />
      </div>

    </div>
  </div>
</template>

<script>

import Breadcrumbs from "@/UI/Breadcrumbs/Breadcrumbs";
import Main from "@/components/Main/Main";
import Aside from "@/components/Aside/Aside";

export default {
  name: 'App',
  data() {
    return {
      breadcrumbs: [{ page: 'Главная', href: '#1' }, { page: 'Корзина', href: '#2'}],
    }
  },
  components: {Aside, Main, Breadcrumbs},
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
  font-family: 'Lato', sans-serif

body
  margin: 0
  padding: 0

.container
  max-width: calc( 1440px - 162px )
  margin: 0 auto

h1, h2, h3, h4, h5, h6, p, span, ul
  margin: 0
  padding: 0

.basket
  &__wrapper
    display: flex
  .main
    margin-right: 61px
  .aside
    flex-grow: 1
  .breadcrumbs-list
    margin-bottom: 60px

</style>
