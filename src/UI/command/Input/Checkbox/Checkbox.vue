<template>

    <span class="main-input__checkbox checkbox">
      <span class="checkbox__checkbox"/>
      <span class="checkbox__checkbox checkbox__checkbox--checked"/>
    </span>

</template>

<script>

export default {
  name: 'Checkbox',
}

</script>

<style lang="sass">

.main-input
  &__input:checked+.checkbox .checkbox__checkbox--checked
    display: block


  &__checkbox
    width: 20px
    height: 20px
    margin-right: 20px


.checkbox
  display: flex

  &__checkbox
    background: #FFFFFF
    border: 1px solid #797B86
    box-sizing: border-box
    box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.08)
    border-radius: 2px
    width: 20px
    height: 20px
    display: block

    &--checked
      margin-left: -20px
      display: none
      position: relative
      &::after
        content: ''
        position: absolute
        width: 10px
        height: 4px
        top: 60%
        left: 0
        display: block
        background: #0069B4
        transform: translateY(-50%) rotate(45deg)
        border-radius: 2px 0 0 2px
      &::before
        content: ''
        position: absolute
        width: 14px
        height: 4px
        top: 45%
        right: -1px
        display: block
        background: #0069B4
        border-radius: 0 2px 2px 0
        transform: translateY(-50%) rotate(-45deg)


</style>
