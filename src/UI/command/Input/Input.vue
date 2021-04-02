<template>
  <label  :for="setIdControl"
          :class="setClassNames.join(' ')"
  >
    <input
        :id="setIdControl"
        :type="typeInput"
        @change="e => onChange(e)"
        class="main-input__input"
    >
    <Checkbox v-if="typeInput === 'checkbox'" />

    <slot />

  </label>
</template>

<script>

import Checkbox from "@/UI/command/Input/Checkbox/Checkbox";

export default {
  name: 'Input',
  components: {Checkbox},
  props: {
    typeInput: String,
    typeControl: String
  },
  computed: {
    setIdControl() {
      return `${this.typeInput}-${Math.random()}`
    },
    setClassNames() {
      let cls = ['main-input']

      cls.push(this.typeControl ? `main-input--${this.typeControl}` : '')
      return cls
    }
  },
  methods: {
    onChange(e) {
      this.$emit('onChange', e)
    }
  }
}

</script>

<style lang="sass">

.main-input
  display: flex
  background: #F6F8FA
  border-radius: 5px
  padding: 26px 25px
  cursor: pointer
  align-items: center
  &__input
    display: none



.input-content
  display: flex
  align-items: center

  &__img
    margin-right: 20px

  &__title
    font-family: 'Lato', sans-serif
    font-style: normal
    font-weight: 600
    font-size: 16px
    line-height: 145%
    color: #1F2432

  &__paragraph
    font-family: 'Lato', sans-serif
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 150%
    color: #797B86

</style>
