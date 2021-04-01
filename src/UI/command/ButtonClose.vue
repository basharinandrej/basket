<template>

  <button class="button-close" @click="() => onClick(id)">&times;</button>

</template>

<script>

export default {
  name: 'ButtonClose',
  props: ['onClick', 'id']
}

</script>

<style lang="sass">

.button-close
  background: transparent
  border: none
  font-size: 32px
  padding: 0
  line-height: 100%
  font-weight: 100
  cursor: pointer


</style>