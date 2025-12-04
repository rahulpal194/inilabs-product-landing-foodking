<template>
     <!--===============================
           HERO PART START 
     =================================-->
     <section class="pt-26 lg:pt-38 mb-12 relative">
        <span class="hero-bg"></span>
        <div class="container">
            <span class="title">FoodKing Demo</span>
            <div class="max-w-[790px] w-full mx-auto">
                <h1 class="heading text-center mb-6">No Monthly Bills—Just a<span class="gradient-text"> One-Time Purchase </span>and Full Access</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Choose the perfect plan for your multi-branch restaurant business and get started instantly!</p>
            </div>
        </div>
     </section>
     <!--==============================
           HERO PART END 
     =================================-->

    <!--==============================
          PRICING PLAN PART START
     =================================-->
     <section class="mb-20 sm:mb-40" id="pricing-plan">
        <div class="container">
            <div class="bg-white rounded-full shadow-navbar w-fit mx-auto mb-12 p-2 flex gap-6 items-center h-[60px]">
                 <button @click="pricingPlan = 'regular'" type="button" :class="pricingPlan == 'regular' ? 'text-white primary-button py-3 px-8' : 'text-black ps-8'" class="flex items-center h-full w-full rounded-full font-bold capitalize cursor-pointer">Regular</button>
                 <button @click="pricingPlan = 'extended'" type="button" :class="pricingPlan == 'extended' ? 'text-white primary-button py-3 px-8' : 'text-black pr-8'" class="flex items-center h-full w-full rounded-full font-bold capitalize cursor-pointer">Extended</button>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div v-for="plan in plans" :class="[plan.title === 'Advanced' ? 'active' : '']" class="pricePlan group p-6 rounded-3xl border border-[#E7EAEF] hover:border-secondary bg-white hover:bg-linear-180 hover:from-[#FFF7FA] hover:to-[#FFF]">
                    <div class="flex justify-between mb-4">
                        <div class="w-9 h-9 rounded-full bg-[#FFE4F0] flex items-center justify-center"><i :class="plan.icon" class="text-primary"></i></div>
                        <span v-if="plan.most_popular" class="text-xs font-semibold bg-[#007EDD] h-fit px-2 py-1.5 rounded-full text-white">Most Popular</span>
                    </div>
                    <h2 class="text-primary font-bold text-2xl mb-3">{{ plan.title }}</h2>
                    <p class="text-base font-semibold mb-6">{{ plan.subtitle }}</p>
                    <h6 v-if="pricingPlan=='regular'" class="text-[42px] font-bold leading-tight mb-8"><span>$</span>{{ plan.regular_price }}</h6>
                    <h6 v-if="pricingPlan=='extended'" class="text-[42px] font-bold leading-tight mb-8"><span>$</span>{{ plan.extended_price }}</h6>
                    <button class="mb-8 outline-button block w-full shadow-none group-hover:shadow-gradientBtn hover-button">Buy Now</button>
                    <ul class="flex flex-col gap-5">
                        <li v-for="feature in plan.features"
                         class="flex items-start gap-3"> 
                         <i :class="feature.type? 'icon-line-check text-[#31C970]':'icon-line-minus text-[#818B9B]'" class="text-2xl"></i>
                         <span :class="feature.type? '':'text-[#818B9B]'" class="text-lg font-medium leading-tight">{{ feature.name }}</span></li>
                    </ul>
                </div>
            </div>
        </div>
     </section>
     <!--==============================
            PRICING PLAN PART END
     =================================-->

     <!--===============================
        LICENSE COMPARISON PART START
     =================================-->
     <section class="mb-20 sm:mb-40">
        <div class="container">
            <span class="title">Difference Between Regular & Extended</span>
            <div class="max-w-[790px] w-full mx-auto mb-12">
                <h1 class="heading text-center mb-6">Look at the<span class="gradient-text"> License Comparison </span></h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Get the right license for your goals and deliver a stronger, more valuable experience to your customers.</p>
            </div>
            <div class="relative">
                <div class="bg-white shadow-[0px_6px_12px_0px_rgba(156,174,186,0.10)] rounded-3xl overflow-x-auto overflow-y-hidden">
                    <span class="blur-rect"></span>
                <table class="w-full">
                    <thead class="border-b last:border-none border-[#E7EAEF]">
                        <tr class="[&_th]:first:text-left align-bottom ">
                            <th class="p-6">
                                <h2 class="text-[32px] font-bold">License <br> Features <span class="text-lg font-medium">(As per Envato policy)</span></h2>
                            </th>
                            <th class="p-6">
                                <h2 class="text-2xl font-bold mb-4 text-nowrap">Regular License</h2>
                                <NuxtLink to="#pricing-plan" @click="pricingPlan = 'regular'" class="block w-fit px-6 mx-auto outline-button py-2 shadow-none hover:shadow-gradientBtn">Buy Now</NuxtLink>
                            </th>
                            <th class="p-6">
                                <h2 class="text-2xl font-bold mb-4 text-nowrap">Extended License</h2>
                                <NuxtLink to="#pricing-plan" @click="pricingPlan = 'extended'" class="block w-fit px-6 mx-auto outline-button py-2 shadow-none hover:shadow-gradientBtn">Buy Now</NuxtLink>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="feature in licenseFeature" class="border-b last:border-none border-[#E7EAEF] [&_td]:text-lg font-medium [&_tD]:first:text-left text-center">
                            <td class="p-6">{{ feature.name }}</td>
                            <td class="p-6"><i class="text-2xl" :class="feature.regular? 'icon-check-circle text-[#31C970]': 'icon-close-circle text-[#F55858]'"></i></td>
                            <td class="p-6"><i class="text-2xl" :class="feature.extended? 'icon-check-circle text-[#31C970]': 'icon-close-circle text-[#F55858]'"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
     </section>
     <!--===============================
        LICENSE COMPARISON PART END
     =================================-->

     <!--===============================
           ADDON PRICING PART START
     =================================-->
     <section>
        <div class="pt-20 pb-20 sm:pb-40 md:px-20 bg-[url('/images/bg/six-steps-bg.png')] bg-contain md:bg-cover bg-no-repeat bg-top">
            <div class="container">
                <span class="title">Addon Pricing</span>
                <div class="max-w-[460px] md:max-w-[542px] lg:max-w-[742px] w-full mx-auto flex flex-col items-center justify-center px-6 lg:px-0 mb-12">
                    <h1 class="heading text-center mb-6">Supercharge with Premium<span class="gradient-text"> FoodKing Addons </span>– See the Prices</h1>
                    <p class="text-base lg:text-lg font-normal text-center lg:px-10">Explore advanced features designed to boost performance and tailor your system to your needs.</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div v-for="plan in addonplans" class="p-6 rounded-2xl shadow-stepcard bg-linear-180 from-[#FFFAFC] to-[#FFFF]">
                        <div class="mb-4">
                            <NuxtImg class="w-12 drop-shadow-[0px_8px_16px_rgba(221,49,144,0.25)] mb-6" :src="plan.logo"/>
                            <h6 class="text-2xl font-bold mb-4">{{ plan.name }}</h6>
                            <p class="text-base font-normal">{{ plan.subtitle }}</p>
                        </div>
                        <div class="border-b last:border-none border-[#E5EDF3] flex justify-between items-center pt-6 pb-6">
                            <div>
                                <p>Regular License</p>
                                <h6 class="text-[28px] font-semibold text-primary">${{ plan.regular_price }}</h6>
                            </div>
                            <button class="outline-button py-2 shadow-none hover:shadow-gradientBtn">Buy Now</button>
                        </div>
                        <div class="border-b last:border-none border-[#E5EDF3] flex justify-between items-center pt-6 last:pb-0">
                            <div>
                                <p>Extended License</p>
                                <h6 class="text-[28px] font-semibold text-primary">${{ plan.extended_price }}</h6>
                            </div>
                            <button class="outline-button py-2 shadow-none hover:shadow-gradientBtn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section> 
     <!--===============================
           ADDON PRICING PART END
     =================================-->

     <!--===============================
              ACTION PART START 
     =================================-->
     <ActionComponent>
        <div class="flex flex-col justify-center items-center">
            <h2 class="heading text-center mb-3">Start Your Journey with FoodKing & Build a
                <span class="gradient-text"> Restaurant Business </span>
                Today!
                </h2>
            <p class="text-base font-normal text-center mb-6">Stay ahead in the game with the best restaurant business solution.</p>
            <div class="flex flex-wrap gap-6 items-center justify-center">
                 <button class="primary-button">Buy Now</button>
                 <button class="outline-button">Explore Demo</button>
            </div>
        </div>
     </ActionComponent>
     <!--===============================
              ACTION PART END 
     =================================-->
</template>
<script setup>
import plans from '@/assets/json/pricing-plan.json';
import addonplans from '@/assets/json/addon-plan.json'
 const pricingPlan=ref('regular')
 const licenseFeature = ref([
    {id:1, name:"Lifetime License Validity", regular: true, extended:true},
    {id:2, name:"Permitted for 1 Domain", regular: true, extended:true},
    {id:3, name:"6 months of general and technical support", regular: true, extended:true},
    {id:4, name:"All Premium Features", regular: true, extended:true},
    {id:4, name:"Lifetime FREE Update", regular: true, extended:true},
    {id:1, name:"For Personal Project", regular: true, extended:true},
    {id:2, name:"For Commercial Projects [if end product is paid]", regular: false, extended:true},
    {id:3, name:"Postman Collection for REST API Documentation", regular: false, extended:true},
    {id:4, name:"Admin Panel FREE Installation in cPanel [One Time]", regular: false, extended:true},
    {id:4, name:"Priority Support", regular: false, extended:true},
 ])
</script>