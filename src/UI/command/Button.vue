<template>

  <button @click="onClick"
          :class="setClassName"
  >
    <slot/>
  </button>

</template>

<script>

export default {
  name: 'Button',
  props: {
    typeButton: String,
    onClick: Function
  },
  computed: {
    setClassName() {
      return `main-btn ${this.typeButton}`
    }
  }
}

</script>

<style lang="sass">

.main-btn
  font-family: 'Lato', sans-serif
  font-style: normal
  font-weight: 600
  font-size: 18px
  line-height: 145%
  padding: 14px 20px
  border-radius: 4px
  cursor: pointer

.main-btn.primary
  background: #0069B4
  color: #FFF
  border: 1px solid transparent

.main-btn.ghost
  color: #0069B4
  border: 1px solid #0069B4
  background: #fff

</style>