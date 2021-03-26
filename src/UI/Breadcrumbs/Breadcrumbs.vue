<template>

  <ul class="breadcrumbs-list">
    <BreadcrumbsItem v-for="item in breadcrumbs"
      :key="item + Math.random()"
      :href="item.href"
    >
      {{ item.page }}
    </BreadcrumbsItem>
  </ul>

</template>

<script>

import BreadcrumbsItem from '@/UI/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem'

export default {
  name: 'Breadcrumbs',
  components: {BreadcrumbsItem},
  props: {
    breadcrumbs: Array
  }
}

</script>

<style lang="sass">

.breadcrumbs-list
  display: flex

</style>