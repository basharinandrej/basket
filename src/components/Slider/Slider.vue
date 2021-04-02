<template>
  <VueSlickCarousel v-bind="settingsSlider" 
                    v-if="getProductsRecently.length"
                    class="slider">
    <SliderItem 
      v-for="item in getProductsRecently"
        :key="item.id"
        :name="item.name"
        :imageUrl="item.imageUrl"
        :description="item.description"
        :minPriceRU="+item.minPriceRU"
        :maxPriceRU="+item.minPriceRU"
        :minPriceEU="+item.minPriceEU"
        :maxPriceEU="+item.maxPriceEU"
    />

    <template #prevArrow="arrowOption">
      <div class="custom-arrow">
        <img src='@/assets/arrow.png' class='prev-arrow' alt='1'>

        <div class="custom-arrow__box">
          <span class="custom-arrow__current-sl">
            {{ arrowOption.currentSlide + 1 }} 
          </span>
          <span class="custom-arrow__separator">
            / 
          </span>
          <span class="custom-arrow__counter-sl">
            {{ arrowOption.slideCount }}
          </span>
        </div>
      </div>
    </template>

    <template #nextArrow>
      <div class="custom-arrow">
        <img src='@/assets/arrow.png' class='next-arrow' alt='1'>
      </div>
    </template>

  </VueSlickCarousel>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import SliderItem from '@/components/Slider/SliderItem/SliderItem.vue'
 
  export default {
    name: 'Slider',
    components: { VueSlickCarousel, SliderItem },
    data() {
      return {
        settingsSlider: {
          dots: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                dots: true
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true  
              }
            }
          ]
        }
      }
    },
    computed: {
      getProductsRecently() {
        return this.$store.state.recentlyWatchedProducts.items
      }
    }
  }
</script> 

<style lang="sass">

.slider 

  .prev-arrow
    position: absolute
    top: 0
    left: -60px
    transform: rotate(180deg)

  .next-arrow
    position: absolute
    right: 0

  .slick-slide
    padding: 0 10px

  .custom-arrow
    position: absolute
    font-size: 24px
    top: -80px
    width: 100px
    display: flex
    font-family: Lato
    font-style: normal
    font-weight: 500
    line-height: 150%
    color: #212121
    right: 0
    left: unset
    align-items: center
    height: 50px

    &::before
      content: none
    &__separator
      color: #797b86
      font-size: 14px
      margin: 0 4px
      pointer-events: none  
    &__counter-sl
      color: #797b86
      font-size: 14px
      pointer-events: none
    &__current-sl
      pointer-events: none
    &__box
      display: flex
      align-items: baseline
</style>