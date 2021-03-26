<template>

    <li class="breadcrumbs-list__item">
      <a :href="href" class="breadcrumbs-list__link">
        <slot/>
      </a>
    </li>

</template>

<script>

export default {
  name: 'BreadcrumbsItem',
  props: {
    href: String
  }
}

</script>

<style lang="sass">

.breadcrumbs-list__item
  list-style: none
  font-family: 'Lato', sans-serif
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 150%
  margin-right: 25px
  position: relative
  &::after
    content: ""
    position: absolute
    top: 7px
    transform: rotate(-90deg)
    border: 3px solid transparent
    border-top: 5px solid #33374E
    right: -17px

.breadcrumbs-list__item:last-child
  margin-right: 0
  &::after
    content: none
  .breadcrumbs-list__link
    color: #797B86

.breadcrumbs-list__link
  text-decoration: none
  color: #33374E


</style>