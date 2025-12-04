<template>
     <!--===============================
           HERO PART START 
     =================================-->
     <section class="pt-26 lg:pt-38 mb-20 relative">
        <span class="hero-bg"></span>
        <div class="container">
            <div class="grid lg:grid-cols-2 gap-y-12 lg:place-content-between">
                <div class="max-lg:max-w-2xl max-lg:text-center max-lg:mx-auto mx-auto">
                    <h1 class="heading mb-6"><span class="gradient-text">Customize FoodKing </span>to Fit Your Business Perfectly</h1>
                    <p class="text-base lg:text-lg font-normal mb-6 lg:text-left text-center">As the creator of FoodKing, no one knows the system better than we do—and that means we can customize it exactly the way you need. From design changes and new features to third-party integrations and workflow tweaks, we’ll tailor FoodKing to fit your business perfectly.</p>
                    <div class="flex flex-wrap items-center max-lg:justify-center gap-6">
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
                <div>
                    <NuxtImg class="max-w-[465px] w-full lg:ml-auto mx-auto lg:mx-0" src="/images/customization/banner.png"/>
                </div>
            </div>
        </div>
     </section>
     <!--==============================
           HERO PART END 
     =================================-->

    <!--==============================
            COUNTER PART START                  
    ==============================-->
    <section class="mb-20 sm:mb-40">
        <div class="container">
            <div class="p-12 rounded-3xl shadow-blog bg-white">
                <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-[94px]">
                    <li v-for="counter in counters" class="w-full flex items-center gap-4">
                        <NuxtImg :style="`filter: drop-shadow(${counter.shadow})`" class="w-8 h-8" :src="counter.vector"/>
                        <div>
                            <h3 :style="{color:`${counter.color}`}" class="text-[28px] font-semibold flex items-center gap-0.5 mb-2">
                                <CountUp v-if="counter.count%2 != 0" decimal-places="1" :end-val="counter.count" class="text-[28px] font-extrabold"></CountUp>
                                <CountUp v-else :end-val="counter.count" class="text-[28px] font-extrabold"></CountUp>
                                <span class="leading-none -mt-2">+</span>
                            </h3>
                            <p class="text-base">
                                {{ counter.title }}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <!--==============================
            COUNTER PART END                  
    ==============================-->

    <!--==============================
            SERVICE PART START                  
    ==============================-->
    <section class="mb-20 sm:mb-40">
        <div class="container">
            <div class="mb-12 sm:mb-16 mx-auto max-w-[742px] text-center">
                <h2 class="text-3xl md:text-[42px] leading-tight text-center font-bold mb-6">Uncover
                    <span class="gradient-text"> Customization Services </span>
                    Designed Just for You
                </h2>
                <p class="text-base sm:text-lg lg:px-18">
                    Your needs matter to us. That’s why we offer a wide range of customization services tailored specifically to meet them.
                </p>
            </div>
            <div class="grid col-span-2 gap-y-12 lg:grid-cols-3 lg:place-content-between">
                <div class="col-span-1 lg:col-span-2 lg:self-center order-2 sm:order-1">
                    <div class="flex flex-col sm:flex-row items-start justify-between gap-y-6 sm:gap-y-0 gap-x-6 lg:mr-20">
                        <ul class="flex flex-col items-start gap-6 md:gap-8">
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Custom Localization</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Database Customization</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Workflow Customization</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Performance Optimization</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">New Feature Development</span></li>
                        </ul>
                        <ul class="flex flex-col items-start gap-6 md:gap-8">
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Change Functionality</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">UI Customization</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Security Customization</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Mobile App Customization</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Integration Services</span></li>
                        </ul>
                    </div> 
                </div>
                <div class="col-span-1 sm:order-2 order-1">
                    <NuxtImg src="/images/customization/services.png" alt="service-banner" class="w-full max-w-md max-lg:mx-auto"/>
                </div>
            </div>
        </div>
    </section>
    <!--==============================
            SERVICE PART END                  
    ==============================-->

    <!--==============================
        WORK PROCESS PART START                  
    ==============================-->
    <section class="mb-20 sm:mb-40">
        <div class="container">
            <div class="mb-12 sm:mb-16 mx-auto max-w-[742px] text-center">
                <h2 class="heading text-center mb-6">The
                    <span class="gradient-text"> Proven Work-Process </span>
                    Behind Our Customization Service
                </h2>
                <p class="text-base lg:text-lg font-normal text-center">From request to delivery—here’s how we make it happen.</p>
            </div>
            <div class="grid lg:grid-cols-2 relative">
                <span class="blur-rect"></span>
                <div class="flex items-center lg:justify-start justify-center">
                    <NuxtImg src="/images/customization/work-process.png" alt="process-banner" class="w-full max-w-[479px]"/>
                </div>     
                <div class="grid grid-cols-2 gap-6  max-lg:mx-auto max-lg:max-w-xl max-lg:mt-12">
                    <div v-for="process in processes" class="w-full py-4 px-4 sm:px-6 rounded-3xl bg-white shadow-[0px_6px_12px_0px_rgba(186,186,186,0.10)]">
                        <div class="flex items-center justify-between gap-2 mb-4">
                            <div class="flex items-center justify-center w-[52px] aspect-square rounded-full drop-shadow-process bg-white">
                                <NuxtImg :src="process.image" alt="process-1" class="w-7" />
                            </div>
                            <h3 class="text-[42px] font-semibold text-[#DEEAF2]">
                                0{{ process.id }}
                            </h3>
                        </div>
                        <p class="text-base sm:text-lg font-medium">
                            {{ process.title }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--==============================
        WORK PROCESS PART END                 
    ==============================-->

    <!--==============================
            CHOOSE PART START                  
    ==============================-->
    <section class="mb-20 sm:mb-40">
        <div class="container">
            <div class="mb-12 sm:mb-16 mx-auto max-w-[742px] text-center">
                <h2 class="heading text-center mb-6">Why
                    <span class="gradient-text"> Choose </span>
                    Us?
                </h2>
                <p class="text-base lg:text-lg font-normal text-center lg:px-18">With deep knowledge of our own applications, we can tailor them precisely to your needs, delivering custom solutions that truly satisfy.</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div v-for="choose in chooses">
                    <div class="group py-12 px-4.5 rounded-3xl shadow-choose flex flex-col items-center justify-center text-center gap-4 bg-white">
                        <NuxtImg :src="choose.image" alt="choose-1" class="h-16" />
                        <h4 class="text-lg font-semibold transition-all duration-300 group-hover:text-primary">{{ choose.title }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--==============================
            CHOOSE PART END                  
    ==============================-->

    <!--===============================
              ACTION PART START 
     =================================-->
     <ActionComponent>
        <div class="flex flex-col justify-center items-center">
            <h2 class="text-3xl md:text-[42px] leading-tight text-center font-bold mb-3">
                <span class="gradient-text">Customize FoodKing </span>
                to Fit Your Business
            </h2>
            <p class="text-base font-normal text-center mb-6">Need help or customization? Talk to the experts who built it — book your session now.</p>
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
import CountUp from 'vue-countup-v3'

const counters = ref([
    {
        "id": 1,
        "count": 40,
        "color": "#0F88F9",
        "title": "Countries Served",
        "vector": "/images/customization/earth.png",
        "shadow": "0px 6px 10px rgba(15, 136, 249, 0.30)"
    },
    {
        "id": 2,
        "count": 900,
        "color": "#22B08E",
        "title": "Happy Clients",
        "vector": "/images/customization/emoji.png",
        "shadow":"0px 6px 10px rgba(74, 204, 107, 0.30)"
    },
    {
        "id": 3,
        "count": 4.9,
        "color": "#761DFA",
        "title": "Rating & Reviews",
        "vector": "/images/customization/review.png",
        "shadow": "0px 6px 10px 0px rgba(118, 29, 250, 0.30)"
    },
    {
        "id": 4,
        "count": 98,
        "color": "#E4156F",
        "title": "Client Satisfaction",
        "vector": "/images/customization/heart.png",
        "shadow": "0px 6px 10px 0px rgba(230, 26, 114, 0.30)"
    }
])

const processes = ref([
    {
        "id": 1,
        "title": "Purchase the script from Codecanyon.",
        "image": "/images/customization/process1.png"
    },
    {
        "id": 2,
        "title": "Book a meeting to discuss.",
        "image": "/images/customization/process2.png"
    },
    {
        "id": 3,
        "title": "Discuss requirements and receive a quote.",
        "image": "/images/customization/process3.png"
    },
    {
        "id": 4,
        "title": "Request customization based on the quote.",
        "image": "/images/customization/process4.png"
    },
    {
        "id": 5,
        "title": "We’ll work on the project and deliver it to you.",
        "image": "/images/customization/process5.png"
    }
])

const chooses = ref([
    {
        id: 1,
        image: "/images/customization/choose1.png",
        title: "Expert Customization",
    },
    {
        id: 2,
        image: "/images/customization/choose2.png",
        title: "Proven Experience",
    },
    {
        id: 3,
        image: "/images/customization/choose3.png",
        title: "Dedicated Support",
    },
    {
        id: 4,
        image: "/images/customization/choose4.png",
        title: "Deep Industry Knowledge",
    },
    {
        id: 5,
        image: "/images/customization/choose5.png",
        title: "Advanced Technology",
    },
    {
        id: 6,
        image: "/images/customization/choose6.png",
        title: "Pixel Perfect Design",
    },
    {
        id: 7,
        image: "/images/customization/choose7.png",
        title: "Client Satisfaction",
    },
    {
        id: 8,
        image: "/images/customization/choose8.png",
        title: "Affordable Price",
    },
])

</script>