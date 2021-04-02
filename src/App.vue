<template>
  <div id="app" class="basket">

    <Header />

    <div class="basket__container container">

      <Breadcrumbs
        :breadcrumbs="breadcrumbs"
      />

      <div class="basket__wrapper">
        <Main />

        <Aside />
      </div>

      <RecentlyProducts />

    </div>
  </div>
</template>

<script>

import Breadcrumbs from "@/UI/Breadcrumbs/Breadcrumbs";
import Main from "@/components/Main/Main";
import Aside from "@/components/Aside/Aside";
import Header from "@/components/Header/Header";
import RecentlyProducts from "@/components/RecentlyProducts/RecentlyProducts";

export default {
  name: 'App',
  data() {
    return {
      breadcrumbs: [{ page: 'Главная', href: '#1' }, { page: 'Корзина', href: '#2'}],
    }
  },
  components: {Header, Aside, Main, Breadcrumbs, RecentlyProducts},
  async mounted() {
    await this.$store.dispatch('actionFetchProducts')
    await this.$store.dispatch('actionFetchProductsRecently')
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

.basket
  .header
    margin-bottom: 63px
  &__wrapper
    display: flex
    align-items: flex-start
    margin-bottom: 96px
  .main
    margin-right: 61px
    width: 775px
    max-width: 100%
  .aside
    flex-grow: 1
  .breadcrumbs-list
    margin-bottom: 60px

@media screen and (max-width: 1300px) 
  .container
    width: calc( 1440px - 162px )
    max-width: 95%
  .basket
    &__wrapper
      display: flex
      flex-direction: column
    .main
      margin-right: 0
      width: 100%
    .aside
      width: 100%

//typo
h1.title
  font-size: 44px
  font-family: 'Lato', sans-serif
  @media screen and (max-width: 768px) 
    font-size: 32px

h2.title
  font-size: 30px
  @media screen and (max-width: 768px) 
    font-size: 24px

h3.title
  font-size: 24px
  font-family: 'Lato', sans-serif
  @media screen and (max-width: 768px) 
    font-size: 20px

h4.title
  font-size: 22px
  @media screen and (max-width: 768px) 
    font-size: 16px

h5.title
  font-size: 16px
  font-family: 'Lato', sans-serif
  @media screen and (max-width: 768px) 
    font-size: 12px


</style>
