<template>

     <!--===============================
           HERO PART START 
     =================================-->
     <section class="h-auto w-full pt-26 lg:pt-38 relative">
        <span class="hero-bg"></span>
        <div class="container">
            <span class="title">FoodKing Demo</span>
            <div class="max-w-[742px] w-full mx-auto">
                <h1 class="heading text-center mb-6">Turn Your<span class="gradient-text"> Restaurant Vision Into Reality </span>with FoodKing</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24 mb-8 sm:mb-6">Take a tour! Try our FoodKing demo and see how it can boost your multi-branch restaurant business.</p>
            </div>
            <div class="flex flex-col sm:flex-row gap-2 items-center justify-center mb-8 sm:mb-12">
                <div class="flex gap-2">
                    <h6 class="text-base font-bold">Excellent</h6>
                    <div class="flex gap-0.5 items-center [&_i]:text-xl [&_i]:text-[#FFB900]">
                        <i class="icon-fill-star"></i>
                        <i class="icon-fill-star"></i>
                        <i class="icon-fill-star"></i>
                        <i class="icon-fill-star"></i>
                        <i class="icon-fill-star"></i>
                    </div>
                </div>
                <div class="flex sm:flex-row flex-col gap-2 items-center justify-center">
                    <p class="text-base"><span class="font-bold">4.9 </span>out of 5 based on<span class="font-bold"> 50+ reviews</span></p>
                    <NuxtImg class="ms-1 h-5 w-fit" src="/images/envato/codecannyon.png"/>
                </div>
            </div>
        </div>
     </section>
     <!--==============================
           HERO PART END 
     =================================-->

    <!--===============================
        RESTAURANT ECOSYSTEM PART START 
     =================================-->
     <section class="mb-20 sm:mb-40">
        <div class="container">
            <div class="w-full px-6 py-4 rounded-2xl border border-[#FFF4BC] bg-[#FFFEF4] mb-8">
                <h6 class="text-[15px] font-semibold mb-3.5 flex items-center gap-2">
                    <i class="icon-fill-danger text-[#FFCC40] text-2xl"></i>
                    Important Note for Demo:
                </h6>
                 <p class="text-[15px] font-normal">The system refreshes every 1 hour and your all demo data will be removed. So, you may need to clear your cookies and login again using demo credentials.</p>
            </div>
            <div class="flex flex-wrap gap-6">
                <div v-for="feature in features.slice(0,6)" :id="`card-${feature.id}`" class="group bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 relative">
                    <div class="flex items-start justify-between">
                        <div :class="`vector-bg-${feature.id}`" class="w-9 h-9 rounded-full mb-6 flex items-center justify-center">
                            <i :class="feature.vector" class="text-xl text-white"></i>
                        </div>
                        <div v-if="feature.addon" class="absolute right-0 shadow-badge">
                            <div class="relative overflow-y-clip bg-linear-270 from-secondary to-primary">
                                <div class="w-6 h-6 rotate-45 bg-primary absolute -left-3 "></div>
                                <div class="p-1 h-6 text-sm font-semibold text-white flex items-center relative z-10">Add-On</div>
                            </div>
                        </div>
                    </div>
                    <h6 class="text-2xl font-bold mb-3">{{feature.name}}</h6>
                    <p class="text-base font-normal mb-6">{{feature.desc}}</p>
                    <button class="outline-button shadow-none px-6 py-2.5 group-hover:shadow-gradientBtn hover-button">Explore Demo</button>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
        RESTAURANT ECOSYSTEM PART END 
     =================================-->
     
    <!--===============================
            ADDON DEMO PART START 
     =================================-->
     <section class="mb-20 sm:mb-40">
        <div class="container">
            <span class="title">Addons Demo</span>
            <div class="max-w-[934px] w-full mx-auto mb-12 sm:mb-16">
                <h1 class="heading text-center mb-6">Turn Up the Flavor<span class="gradient-text"> with Addons!</span></h1>
                 <p class="text-base lg:text-lg font-normal text-center lg:px-24">Discover addons that bring flexibility, automation, and convenience — all in one seamless experience.</p>
            </div>
            <div class="flex flex-wrap gap-6">
                <div v-for="feature in features.slice(6,)" :id="`card-${feature.id}`" class="group bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 relative">
                    <div class="flex items-start justify-between">
                        <div :class="`vector-bg-${feature.id}`" class="w-9 h-9 rounded-full mb-6 flex items-center justify-center">
                            <i :class="feature.vector" class="text-xl text-white"></i>
                        </div>
                        <div v-if="feature.addon" class="absolute right-0 shadow-badge">
                            <div class="relative overflow-y-clip bg-linear-270 from-secondary to-primary">
                                <div class="w-6 h-6 rotate-45 bg-primary absolute -left-3"></div>
                                <div class="p-1 h-6 text-sm font-semibold text-white flex items-center relative z-10">Add-On</div>
                            </div>
                        </div>
                    </div>
                    <h6 class="text-2xl font-bold mb-3">{{feature.name}}</h6>
                    <p class="text-base font-normal mb-6">{{feature.desc}}</p>
                    <button class="outline-button shadow-none group-hover:shadow-gradientBtn hover-button">Explore Demo</button>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
             ADDON DEMO PART END 
     =================================-->

    <!--===============================
        GLOBAL CUSTOMER PART START 
     =================================-->
     <section>
        <div class="pt-20 pb-20 sm:pb-40 md:px-20 bg-[url('/images/bg/six-steps-bg.png')] bg-contain md:bg-cover bg-no-repeat bg-top">
            <div class="container">
                <div class="max-w-[460px] md:max-w-[542px] lg:max-w-[742px] w-full mx-auto flex flex-col items-center justify-center px-6 mb-12">
                    <h1 class="heading text-center mb-6">FoodKing Powered<span class="gradient-text"> 800+ Businesses </span>Across the Globe</h1>
                    <p class="text-base lg:text-lg font-normal text-center lg:px-10">See what’s possible with FoodKing — these live businesses using FoodKing. Start your journey with FoodKing and create a business just like these today!</p>
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                    <div v-for="customer in globalbusiness" class="p-6 sm:p-8 rounded-2xl bg-linear-0 from-[#fff] to-[#FFFAFC] shadow-stepcard">
                        <div>
                            <NuxtImg class="w-full h-full mb-8" :src="customer.img"/>
                        </div>
                        <div class="flex justify-between mb-4">
                            <h3 class="text-[28px] sm:text-[32px] font-bold leading-tight">{{ customer.name }}</h3>
                            <div class="flex items-center gap-2 px-4 py-2 rounded-full shadow-country">
                                <NuxtImg class="w-5 sm:w-6" :src="customer.flag"/>
                                <span class="text-sm sm:text-base font-medium">{{ customer.country }}</span>
                            </div>
                        </div>
                        <p class="text-sm sm:text-base font-normal text-[#323D4E]">{{ customer.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
     </section>            
    <!--===============================
        GLOBAL CUSTOMER PART START 
     =================================-->

    <!--===============================
              ACTION PART START 
     =================================-->
     <ActionComponent>
        <div class="flex flex-col justify-center items-center">
            <h2 class="text-3xl md:text-[42px] leading-tight text-center font-bold mb-6">Start Your Journey with FoodKing & Build a
                <span class="gradient-text"> Restaurant Business </span>
                Today!
                </h2>
            <p class="text-base font-normal text-center mb-6">Stay ahead in the game with the best restaurant business solution.</p>
            <div class="flex flex-wrap gap-6 items-center justify-center">
                 <button class="primary-button">Buy Now</button>
                 <button class="outline-button w-fit">Explore Demo</button>
            </div>
        </div>
     </ActionComponent>
     <!--===============================
              ACTION PART END 
     =================================-->
     
</template>
<script setup>
    import features from '@/assets/json/ecosystem.json'
    import globalbusiness from '@/assets/json/globalBusiness.json'
</script>