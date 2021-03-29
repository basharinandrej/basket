<template>
  <div class="main__main-head main-head">
    <h1 class="main-head__title">
      Ваша корзина
    </h1>

    <p class="main-head__counter">
      4 товрар
    </p>

    <Link>
      Очистить корзину
    </Link>
  </div>
</template>

<script>

import Link from '@/UI/command/Link'

export default {
  name: 'HeadMain',
  components: {Link}
}

</script>

<style lang="sass">

.main
  &-head
    display: flex
    align-items: baseline

    &__title
      margin-right: 22px

    &__counter
      color: #797B86
      margin-right: auto


</style>