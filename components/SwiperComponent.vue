<script setup>
import { Autoplay } from 'swiper/modules';

const props = defineProps({
    loop: Boolean,
    speed: Number,
    navigator: Boolean,
    breakpoints: Object,
    spaceBetween: Number,
    slidesPerView: [Number, String],
    class: String,
    freeMode:Boolean,
    slideToClickedSlide:Boolean,
});
</script>

<template>
    <ClientOnly>
        <swiper-container ref="containerRef" v-bind="props">
            <slot />
        </swiper-container>
    </ClientOnly>
</template>