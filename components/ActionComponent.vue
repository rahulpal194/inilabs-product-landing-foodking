<template>
    <section class="container">
        <div class="mb-16 sm:mb-20 md:mb-40">
            <div class="p-8 md:p-12 rounded-2xl bg-custom-gradient relative">
                <NuxtImg class="absolute right-0 top-0 z-0 max-w-[455px] w-full" src="/images/vector/Union.png"/>
                <div class="relative z-10">
                    <slot />
                </div>
            </div>
        </div>    
    </section>
</template>