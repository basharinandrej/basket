<template>

  <div class="button-group">
    <button class="button-group__button button-group__button--left" @click="onClickDecrementCounter"/>
    <span class="button-group__counter">
      {{ counter }}
    </span>
    <button class="button-group__button button-group__button--right" @click="onClickIncrementCounter"/>
  </div>

</template>

<script>

export default {
  name: 'ButtonGroup',
  props: ['incrementCounter', 'id', 'decrementCounter'],
  data() {
    return {
      counter: 1
    }
  },
  methods: {
    onClickIncrementCounter() {
      this.incrementCounter(this.id)
      return this.counter++
    },
    onClickDecrementCounter() {
      this.decrementCounter(this.id)
      return this.counter <= 1 ? 1 : this.counter--
    }
  }
}

</script>

<style lang="sass">
.button-group
  display: flex

  &__counter
    background: transparent
    border: none
    cursor: pointer
    padding: 6px
    font-family: 'Lato'
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 150%
    text-align: center
    color: #1F2432
    width: 40px
    display: block

  &__button
    background: #F6F8FA
    border: none
    cursor: pointer
    padding: 6px
    font-family: 'Lato'
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 150%
    text-align: center
    color: #1F2432

    &--left
      border-radius: 4px 0 0 4px
      padding: 12px
      &::after
        content: ''
        display: block
        width: 8px
        height: 1px
        background: #000
    &--right
      border-radius: 0 4px 4px 0
      padding: 12px
      position: relative
      &::after
        content: ''
        display: block
        width: 8px
        height: 1px
        background: #000
        position: absolute
        transform: rotate(90deg) translateX(0%)
        top: 48%
      &::before
        content: ''
        display: block
        width: 8px
        height: 1px
        background: #000

</style>