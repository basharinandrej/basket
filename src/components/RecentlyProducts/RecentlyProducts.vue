<template>

<section class="basket__section-recently section-recently">
    <h2 class="section-recently__title">Просмотренные товары</h2>
    <Slider />
</section>

</template>


<script>

import Slider from "@/components/Slider/Slider";

export default {
    components: {Slider}
}

</script>

<style lang="sass">

.basket__section-recently
    margin-bottom: 116px
    
.section-recently
    &__title
        margin-bottom: 60px 

@media screen and (max-width: 576px) 
    .basket
        &__section-recently
            margin-bottom: 52px
    
    .section-recently
        &__title
            margin-bottom: 24px
</style>