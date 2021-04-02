<template>
    <div class="sl-card">
        <img    :src="imageUrl" 
                alt="avatar-card"
                class="sl-card__img"
                >

        <h3 class="sl-card__title">{{name}}</h3>    
        <p class="sl-card__paragraph">{{description}}</p>    

        <p class="sl-card__price-ru">{{minPriceRU}} ₽ - {{maxPriceRU}} ₽ </p>
        <p class="sl-card__price-eu">{{minPriceEU}} €- {{maxPriceEU}} € </p>

        <Button
            :typeButton="typeButtonPrimary"
            :onClick="onClickHandler"
        >
            Подробнее
        </Button>
    </div>
</template>

<script>

import Button from '@/UI/command/Button'

export default {
    name: 'SliderItem',
    components: {Button},
    data() {
        return {
            typeButtonPrimary: 'primary'
        }
    },
    props: {
        name: String,
        imageUrl: String,
        description: String,
        minPriceRU: Number,
        maxPriceRU: Number,
        minPriceEU: Number,
        maxPriceEU: Number
    },
    methods: {
        onClickHandler() {
            console.log('Slider')
        }
    }
}
</script>

<style lang="sass">

.sl-card
    background: #F6F8FA
    border-radius: 5px
    padding: 25px
    min-height: 563px
    display: flex !important
    flex-direction: column
    &__img
        width: 245px
        height: 245px
        object-fit: cover
        display: block
        margin: 0 auto 5px auto
    &__title
        font-family: Lato
        font-style: normal
        font-weight: bold
        font-size: 22px
        line-height: 120.52%
        color: #1F2432
        margin-bottom: 10px
    &__paragraph
        font-family: Lato
        font-style: normal
        font-weight: normal
        font-size: 14px
        line-height: 145%
        color: #1F2432
        flex-grow: 1
    &__price-ru
        margin-bottom: 3px
        font-family: 'Roboto'
        font-style: normal
        font-weight: 500
        font-size: 22px
        line-height: 130%
        letter-spacing: 0.005em
        color: #1F2432
    &__price-eu
        margin-bottom: 20px

@media screen and (max-width: 768px) 
    .list-product
        &__item
            display: flex
            flex-direction: column
        &__description-product
            margin-right: 0
            text-align: center
            margin-bottom: 24px
        &__wrapper
            margin-right: 0
            margin-bottom: 12px
        &__img
            margin-right: 0

</style>