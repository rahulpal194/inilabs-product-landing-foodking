<template>
     <!--===============================
           HERO PART START 
     =================================-->
     <section class="pt-26 lg:pt-38 mb-12 sm:mb-16 relative">
        <span class="hero-bg"></span>
        <div class="container">
            <div class="max-w-[790px] w-full mx-auto">
                <h1 class="heading text-center mb-6">Hassle-Free Setup with Our<span class="gradient-text"> Installation Packages </span></h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Purchased the latest FoodKing on CodeCanyon? Explore our installation plans and get started fast.</p>
            </div>
        </div>
     </section>
     <!--==============================
           HERO PART END 
     =================================-->

    <!--===============================
       INSTALLATION PACKAGE PART START 
     =================================-->
     <section class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 sm:mb-40">
            <div v-for="plan in packages" class="group p-4 rounded-3xl border border-[#E7EAEF] hover:border-secondary bg-white hover:bg-linear-180 hover:from-[#FFF7FA] hover:to-[#FFF]">
                <div class="flex justify-between mb-4">
                    <div class="w-9 h-9 rounded-full bg-[#FFE4F0] flex items-center justify-center"><i :class="plan.icon" class="text-primary"></i></div>
                    <span v-if="plan.popular" class="text-xs font-semibold bg-[#007EDD] h-fit px-2 py-1.5 rounded-full text-white">Most Popular</span>
                </div>
                <h2 class="text-primary font-bold text-2xl mb-3">{{ plan.title }}</h2>
                <p class="text-base font-semibold mb-6">{{ plan.subtitle }}</p>
                <div class="flex gap-2 items-end mb-6">
                    <h6 class="text-3xl font-bold"><span>$</span>{{ plan.price }}</h6>
                    <small class="text-base font-bold text-[#818B9B] line-through"><span>$</span>{{ plan.old_price }}</small>
                </div>
                <button class="mb-8 block w-full outline-button shadow-none group-hover:shadow-gradientBtn hover-button">Buy Now</button>
                <ul class="flex flex-col gap-5">
                    <li v-for="feature in plan.features"
                     class="flex items-start gap-3"> 
                     <i :class="feature.enable? 'icon-line-check text-[#31C970]':'icon-line-minus text-[#818B9B]'" class="text-2xl"></i>
                     <span :class="feature.enable? '':'text-[#818B9B]'" class="text-lg font-medium leading-tight">{{ feature.name }}</span></li>
                </ul>
            </div>
        </div>
     </section>
    <!--===============================
       INSTALLATION PACKAGE PART START 
     =================================-->

     <!--===============================
        RIGHT CHOICE PART START 
     =================================-->
     <section class="mb-20 sm:mb-40">
        <div class="container relative">
            <span class="blur-rect"></span>
            <div class="max-w-[742px] w-full mx-auto mb-12 sm:mb-16">
                <h1 class="heading text-center mb-6">What Makes Our Installation Plans the<span class="gradient-text"> Right Choice </span>for You?</h1>
                 <p class="text-base lg:text-lg font-normal text-center lg:px-24">We provide a clean, precise installation and configuration for smooth, uninterrupted operation.</p>
            </div>
            <div class="flex flex-wrap gap-6">
                <div v-for="choice in choices" :id="`choice-${choice.id}`" class="bg-white rounded-2xl p-6 shadow-faq hover:shadow-card transition-all duration-300 relative">
                    <i :class="['vector-bg-' + choice.id, choice.icon]" class="text-[36px] mb-6 bg-clip-text text-transparent shadow-none" ></i>
                    <h6 class="text-2xl font-bold mb-3">{{choice.name}}</h6>
                    <p class="text-base font-normal">{{choice.desc}}</p>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
        RIGHT CHOICE PART END 
     =================================-->

     <!--===============================
              ACTION PART START 
     =================================-->
     <ActionComponent>
        <div class="flex flex-col justify-center items-center">
            <h2 class="text-3xl md:text-[42px] leading-tight text-center font-bold mb-3">Curious to
                <span class="gradient-text"> Discuss More </span>
                About FoodKing?
                </h2>
            <p class="text-base font-normal text-center mb-6">FoodKing is built using modern, secure, and scalable technologies to ensure top-tier performance and reliability.</p>
            <div class="flex flex-wrap items-center max-lg:justify-center gap-4">
                <NuxtLink to="#" class="primary-button">
                    <i class="icon-line-tidycal text-2xl"></i>
                    Book a Meeting
                </NuxtLink>
                <NuxtLink to="#" class="h-[52px] !leading-[52px] px-6 rounded-full whatsapp-gradient flex items-center gap-3 text-white">
                    <i class="icon-line-whatsapp text-2xl"></i>
                    <span class="text-base sm:text-lg font-semibold capitalize">WhatsApp</span>
                </NuxtLink>
            </div>
        </div>
     </ActionComponent>
     <!--===============================
              ACTION PART END 
     =================================-->
</template>
<script setup>
import packages from '@/assets/json/installation-plan.json'
import features from '@/assets/json/ecosystem.json'
import ActionComponent from '~/components/ActionComponent.vue';
const choices = ref([
    {id:1, icon:"icon-light-creator", name:"Creator of FoodKing", desc:"We made FoodKing, you can count on us for a smooth, worry-free installation."},
    {id:2, icon:"icon-fill-installation", name:"Professional Installation", desc:"Our team of experts ensures the software is installed accurately and perfectly setup for publishing & running the business."},
    {id:3, icon:"icon-doc-check", name:"Compatibility Check", desc:"Before installation, we check for compatibility with your environment and make necessary adjustments."},
    {id:4, icon:"icon-fill-testing", name:"Testing & Verification", desc:"We are dedicated to delivering your project with a rigorous 100% quality assurance process by our software quality assurance team."},
    {id:5, icon:"icon-fill-safety", name:"Enhanced Security", desc:"We prioritize security throughout the installation process to safeguard your system and data."},
    {id:6, icon:"icon-fill-support", name:"Ongoing Support", desc:"With our installation plans, you gain access to dedicated support for any technical questions."}
])
</script>