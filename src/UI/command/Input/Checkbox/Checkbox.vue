<template>

<!--    <img :src="urlImg"-->
<!--         class="main-input__checkbox"-->
<!--         alt="icon-checkbox">-->

    <span class="main-input__checkbox--checked"/>

</template>

<script>

export default {
  name: 'Checkbox',
}

</script>

<style lang="sass">

.main-input__checkbox
  &--checked
    &::after
      content: ''
      width: 10px
      height: 2px
      background: #0069B4

    &::before
      content: ''
      width: 10px
      height: 2px
      background: #0069B4

</style>
