<template>
  <a href="#" class="main-link" @click="onClick">
    <slot/>
  </a>
</template>

<script>

export default {
  name: 'Link',
  methods: {
    onClick() {
      alert('Link')
    }
  }
}
</script>

<style lang="sass">

.main-link
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 150%
  text-align: right
  text-decoration-line: underline
  color: #797B86



</style>