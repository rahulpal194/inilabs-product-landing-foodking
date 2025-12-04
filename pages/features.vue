<template>
     <!--===============================
           HERO PART START 
     =================================-->
     <section class="h-auto w-full pt-26 lg:pt-38 relative">
        <span class="hero-bg"></span>
        <div class="container">
            <div class="max-w-[934px] w-full mx-auto">
                <h1 class="heading text-center mb-6">Extraordinary<span class="gradient-text"> Features of FoodKing Multi-Branch </span>Restaurant Business Solution</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24 mb-8 sm:mb-6">FoodKing is packed with the tools that keep your restaurant running smooth and growing your business fast. Manage orders, deliveries, dine-in, inventory, staff, and more from one powerful system. Whether you run a small café or a multi-branch restaurant, FoodKing scales with your business.</p>
            </div>
            <div class="flex gap-5 sm:gap-6 items-center justify-center mb-8">
                <button class="primary-button">Buy Now</button>
                <button class="outline-button">Explore Demo</button>
            </div>
            <div class="flex flex-col sm:flex-row gap-2 items-center justify-center mb-12 sm:mb-16">
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
           KEY FEATURES PART START 
     =================================-->
     <section class="container">
        <div class="mb-20 sm:mb-40">
            <div class="sticky top-20 lg:top-24 z-10">
                <div class="w-full relative p-4 mb-12 bg-white rounded-full">
                    <nav class="flex overflow-x-auto scrollbar-hide">
                        <button 
                            type="button" 
                            v-for="featureTab in featureTabs"
                            @click="featureActive = featureTab.id"
                            :key="featureTab.id"
                            :class="featureTab.id === featureActive ? 'active' : ''"
                            class="navbtn">
                            <i :class="[featureActive === featureTab.id? 'text-white': '', featureTab.icon]" class="text-xl text-[#818B9B]"></i>
                            <span>{{ featureTab.name }}</span>
                        </button>
                    </nav>
                    <div class="w-full h-12 bg-[#FFA087] absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10 bg-linear-270 from-[#FFB19B] from-0% via-[#DCA4FF] via-50% to-[#FF97BD] to-100% blur-[30px]"></div>
                    <div class="lg:w-[580px] lg:h-[75px] bg-[#FFA087] blur-[300px] rotate-[35deg] absolute -bottom-0 left-1/4"></div>
                </div>
            </div>
            <div v-if="featureActive == 1" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Admin Dashboard</h3>
                                <p class="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the admin can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <NuxtImg class="max-w-[414px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Built-in POS</h3>
                                <p class="text-base font-normal">Admin can create dine-in, takeaway, delivery order from POS & choose payment option also.</p>
                            </div>
                            <NuxtImg class="h-[185px] w-full" src="/images/features/admin-panel/admin-panel-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">QR Code Menu Maker</h3>
                                <p class="text-base font-normal">Admin can create QR code for each table and link to the restaurant’s menu where customers can order from table using this qr code.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/admin-panel/admin-panel-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Add Items with Variations & Addon</h3>
                                <p class="text-base font-normal">In setting option in admin panel, admin can add item categories, items with variations & extras, item attributes, variation wise pricing, etc.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px]" src="/images/features/admin-panel/admin-panel-4.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 lg:grid-rows-2 lg:grid-flow-col gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 lg:row-span-1 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Online Orders Manage</h3>
                                <p class="text-base font-normal">A well-organized online order list allows the admin to quickly locate orders by their current status. Easily view and manage individual orders, including customer details, order summary, status, payment info, delivery progress, and more.</p>
                            </div>
                            <NuxtImg class="w-[318px] h-[226px]" src="/images/features/admin-panel/admin-panel-5.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 lg:row-span-1 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Table Orders Manage</h3>
                                <p class="text-base font-normal">In setting option in admin panel, admin can add item categories, items with variations & extras, item attributes, variation wise pricing, etc.</p>
                            </div>
                            <NuxtImg class="w-[336px] h-[226px]" src="/images/features/admin-panel/admin-panel-6.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:row-span-2 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">POS Order Manage</h3>
                                <p class="text-base font-normal">A well-organized POS order list allows the admin to quickly locate orders by their current status. Easily view and manage individual orders, including customer details, order summary, status, delivery progress, and more.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[366px] w-full" src="/images/features/admin-panel/admin-panel-7.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Status Screen (OSS)</h3>
                                <p class="text-base font-normal">Customers can see their order’s current progress in real-time by the token number in OSS Monitor from the table.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/admin-panel/admin-panel-8.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Add Items with Variations & Addon</h3>
                                <p class="text-base font-normal">In setting option in admin panel, admin can add item categories, items with variations & extras, item attributes, variation wise pricing, etc.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px]" src="/images/features/admin-panel/admin-panel-9.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Built-in Messaging System</h3>
                                <p class="text-base font-normal overflow-ellipsis">Built-in messaging system allows real-time communication between admin, managers, staffs, and customers making it easy to coordinate tasks, share updates, and resolve issues quickly without relying on external apps.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/admin-panel/admin-panel-10.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Offer & Promotion</h3>
                                <p class="text-base font-normal">In the Promotion section, the admin can create coupons and offers with customizable options like discount type, minimum and maximum purchase amounts, and expiry date. These promos appear on the customer website and can be used for discounted food purchases.</p>
                            </div>
                            <NuxtImg class="h-[241px] w-full" src="/images/features/admin-panel/admin-panel-11-1.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Employees & User Management</h3>
                                <p class="text-base font-normal">We offer user management system lets the admin easily manage users & their  roles like branch managers, staff, delivery boys, customers, waiters, and chefs—each with specific permissions to ensure smooth and secure operations.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px]" src="/images/features/admin-panel/admin-panel-12.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Report & Analytics</h3>
                                <p class="text-base font-normal">We offers smart reports and analytics, including sales, items, and credit balance, helping admins track performance.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/admin-panel/admin-panel-13.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 bg-[#FCF6F8] py-8 ps-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Company & Business Settings</h3>
                                <p class="text-base font-normal">Company & Site Settings allow the admin to configure essential details like business name, logo, contact info, tax settings, currency, google map and more. This ensures the platform aligns with the brand identity and operates according to business needs.</p>
                            </div>
                            <NuxtImg class="max-w-[599px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-13.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 ps-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Multi Branch Setup</h3>
                                <p class="text-base font-normal">Multi-branch setup lets the admin manage multiple restaurant locations from a single system. Each branch can have its own staff, orders, and settings, while the admin maintains full control and oversight across all branches.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-14.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Branch-wise Delivery Zone</h3>
                                <p class="text-base font-normal">Each branch can set its own delivery area, ensuring faster, more efficient delivery service for customers.</p>
                            </div>
                            <NuxtImg class=" h-[184px] w-full" src="/images/features/admin-panel/admin-panel-15.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Restaurant Availability Time Slot</h3>
                                <p class="text-base font-normal overflow-ellipsis">Lets admins set specific operating hours for each branch. This helps control when customers can place orders, ensuring orders are only accepted during active business hours.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/admin-panel/admin-panel-16.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Order & Delivery Charge Setup</h3>
                                <p class="text-base font-normal">Order & Delivery Charge Setup allows admins to define minimum order amounts and set flexible delivery fees based on distance, zone, or fixed rates. This ensures fair pricing while optimizing delivery operations.</p>
                            </div>
                            <NuxtImg class="h-[241px] w-full" src="/images/features/admin-panel/admin-panel-17.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Push Notification Setup</h3>
                                <p class="text-base font-normal">Push Notification Setup enables real-time updates to customers, delivery boys, and staff, improving communication and overall user experience.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[160px] w-full" src="/images/features/admin-panel/admin-panel-18.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 ps-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Bulk Import and Export</h3>
                                <p class="text-base font-normal">Bulk Import & Export feature allows admins to quickly upload or download item data in bulk, making it easy to manage large menus efficiently and save time on manual entry.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-19.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Multi Payment Setup</h3>
                                <p class="text-base font-normal overflow-ellipsis">It supports various payment methods, including cash, card, and credit wallets. Admins can enable or disable options for all branch, offering customers convenient payment choices.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/admin-panel/admin-panel-20.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Multi Language Setup</h3>
                                <p class="text-base font-normal">It allows the platform to support multiple languages, making it accessible to a wider audience. Admins can add, edit, and manage languages to provide a localized experience.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/admin-panel/admin-panel-21.png" alt="pos"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="featureActive == 2" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Branch Manager Dashboard</h3>
                                <p class="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the branch manager can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/branch-staff/branch-staff-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Chef/Kitchen Dashboard</h3>
                                <p class="text-base font-normal">The dashboard shows real-data where the chef can see business analytics, order statistics, sales summary, orders summary, most popular items and so on of his branch.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/branch-staff/branch-staff-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">POS Operator Dashboard</h3>
                                <p class="text-base font-normal">The dashboard shows real-data where the POS operator can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-3.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Point of Sale (POS)</h3>
                                <p class="text-base font-normal">Admin can create dine-in, takeaway, delivery order from POS & choose payment option also.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/branch-staff/branch-staff-4.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 lg:grid-rows-2 lg:grid-flow-col gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 lg:row-span-1 bg-[#FCF6F8] pt-8 ps-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Online Orders Manage</h3>
                                <p class="text-base font-normal">A well-organized online order list allows the admin to quickly locate orders by their current status. Easily view and manage individual orders, including customer details, order summary, status, payment info, delivery progress, and more.</p>
                            </div>
                            <NuxtImg class="max-w-[318px] w-full h-[226px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-5.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 lg:row-span-1 bg-[#FCF6F8] pt-8 ps-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Table Orders Manage</h3>
                                <p class="text-base font-normal">A well-organized table order list allows the admin to quickly locate orders by their current status. Easily view and manage individual orders, including customer details, order summary, status, payment info, delivery progress, and more.</p>
                            </div>
                            <NuxtImg class="max-w-[338px] w-full h-[226px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-6.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:row-span-2 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">POS Order Manage</h3>
                                <p class="text-base font-normal">A well-organized POS order list allows the admin to quickly locate orders by their current status. Easily view and manage individual orders, including customer details, order summary, status, delivery progress, and more.</p>
                            </div>
                            <NuxtImg class="h-[366px] w-full" src="/images/features/branch-staff/branch-staff-7.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Status Screen (OSS)</h3>
                                <p class="text-base font-normal">Customers can see their order’s current progress in real-time by the token number in OSS Monitor from the table.</p>
                            </div>
                            <NuxtImg class="h-[184px] w-full" src="/images/features/branch-staff/branch-staff-8.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Kitchen Display System (KDS)</h3>
                                <p class="text-base font-normal">KDS is helps streamline kitchen workflow by showing real-time orders on-screen. Orders update live by status, making it easy for staff to manage and serve efficiently.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-9.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Built-in Messaging System</h3>
                                <p class="text-base font-normal overflow-ellipsis">Built-in messaging system allows real-time communication between admin, managers, staffs, and customers making it easy to coordinate tasks, share updates, and resolve issues quickly without relying on external apps.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/branch-staff/branch-staff-10.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Delivery Zone</h3>
                                <p class="text-base font-normal">Each branch has its own delivery area which is configure by system admin to ensuring faster, more efficient delivery service for customers.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/branch-staff/branch-staff-11.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Employees & Staff Management</h3>
                                <p class="text-base font-normal">We offer staff & user management system lets the branch manger easily manage staff & their  roles like delivery boys, customers, waiters, and chefs—each with specific permissions to ensure smooth and secure operations.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-12.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Report & Analytics</h3>
                                <p class="text-base font-normal">We offers smart reports and analytics, including sales, items, and credit balance, helping admins track performance.</p>
                            </div>
                            <NuxtImg class="h-[185px] w-full" src="/images/features/branch-staff/branch-staff-13.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="featureActive == 3" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Responsive User Website</h3>
                                <p class="text-base font-normal overflow-ellipsis">FoodKing’s user website works seamlessly on all devices, making it easy for customers to browse, order, and track—anytime, anywhere.</p>
                            </div>
                            <NuxtImg class="w-[414px] h-[286px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Web Banners</h3>
                                <p class="text-base font-normal">Highlight offers, promotions, or important updates with top banners on user website—grab attention & drive engagement.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[185px] w-full" src="/images/features/user-site/user-site-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Cookie Banner</h3>
                                <p class="text-base font-normal">FoodKing includes a built-in cookie banner to help you stay transparent and compliant—inform users and gain consent with ease.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] h-[168px] w-full" src="/images/features/user-site/user-site-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Featured & Most Popular Items</h3>
                                <p class="text-base font-normal">Showcase popular & featured items to boost visibility and drive more orders—automatically or manually highlight what’s hot on your menu.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-4.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Item or Dish Search</h3>
                                <p class="text-base font-normal overflow-ellipsis">Help customers find their favorite dishes fast with a smart search bar—quick, accurate results make ordering easier and faster.</p>
                            </div>
                            <NuxtImg class="h-[295px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-5.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Menu Category</h3>
                                <p class="text-base font-normal">Organize your dishes into clear, user-friendly categories, making it easy for customers to browse and find what they’re craving.</p>
                            </div>
                            <NuxtImg class="h-[295px] w-full" src="/images/features/user-site/user-site-6.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Veg/Non-veg Filter</h3>
                                <p class="text-base font-normal">Let customers quickly filter dishes by veg or non-veg—ensuring a personalized and hassle-free browsing experience.</p>
                            </div>
                            <NuxtImg class=" h-[185px] w-full" src="/images/features/user-site/user-site-7.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Item Details & Add to Cart</h3>
                                <p class="text-base font-normal overflow-ellipsis">A quick view modal of each items that showing item details with sizes, extras, addons, and a field for special instructions. Customers can add to cart any item from here.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-8.png" alt="admin"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">User’s Cart</h3>
                                <p class="text-base font-normal overflow-ellipsis">The user cart page offers a clear summary of selected items, allowing customers to review quantities, customize extras, and proceed to checkout with ease.</p>
                            </div>
                            <NuxtImg class="h-[295px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-9.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Checkout</h3>
                                <p class="text-base font-normal">The checkout page is fast, simple, and user-friendly—letting customers confirm their order, add delivery address, choose delivery time schedule or choose branch & time schedule for takeaway and place their order with confidence.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/user-site/user-site-10.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Set Delivery Location</h3>
                                <p class="text-base font-normal overflow-ellipsis">Customers can easily set their delivery location or edit existing location on the map or by address—ensuring accurate, timely deliveries every time.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-11.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Branch Selection</h3>
                                <p class="text-base font-normal">For delivery, the nearest branch is auto-selected based on customer’s location. For takeaway, customers can pick their preferred branch manually.</p>
                            </div>
                            <NuxtImg class=" h-[160px] w-full" src="/images/features/user-site/user-site-12.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Coupon or Voucher</h3>
                                <p class="text-base font-normal">Customers can discover all available coupons & vouchers and can apply them at checkout for instant savings.</p>
                            </div>
                            <NuxtImg class=" h-[185px] w-full" src="/images/features/user-site/user-site-13.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Schedule Delivery</h3>
                                <p class="text-base font-normal overflow-ellipsis">Customers can schedule their delivery by selecting a preferred date and time—making it easy to plan meals in advance and receive orders at their convenience.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] h-[286px] w-full" src="/images/features/user-site/user-site-14.png" alt="admin"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Multi Payment Option</h3>
                                <p class="text-base font-normal overflow-ellipsis">FoodKing supports multiple payment methods—including cash, card, and credit balance—giving customers the flexibility to pay however they prefer.</p>
                            </div>
                            <NuxtImg class="h-[289px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-15.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Order Tracking</h3>
                                <p class="text-base font-normal">Customers can track their order status in real time—from confirmation to preparation and delivery—ensuring transparency and peace of mind.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/user-site/user-site-16.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Orders History</h3>
                                <p class="text-base font-normal overflow-ellipsis">The Order History feature lets customers view all their past orders & current orders in one place. They can easily review order details and track spending with just a few clicks.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] h-[286px] w-full" src="/images/features/user-site/user-site-17.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Multi Language</h3>
                                <p class="text-base font-normal">FoodKing supports multiple languages for a more personalized and accessible user experience.</p>
                            </div>
                            <NuxtImg class=" h-[185px] w-full" src="/images/features/user-site/user-site-18.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Built-in Messaging System</h3>
                                <p class="text-base font-normal overflow-ellipsis">Built-in messaging system allows real-time communication between customers and branch manager making it easy to  resolve issues quickly without any hassle.</p>
                            </div>
                            <NuxtImg class="h-[289px]" src="/images/features/user-site/user-site-19.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Authentication & Guest Login</h3>
                                <p class="text-base font-normal">Customers can sign up or log in easily to manage their orders, or simply continue as a guest for a quick and hassle-free checkout experience.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/user-site/user-site-20.png" alt="pos"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="featureActive == 4" class="mb-12 md:mb-16">
                 <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Scan QR for Menu</h3>
                                <p class="text-base font-normal overflow-ellipsis">Customers can quickly access the full menu by scanning a QR code from table—making ordering easy, contactless, and convenient.</p>
                            </div>
                            <NuxtImg class="h-[271px] flex-grow flex-shrink-0" src="/images/features/qr-code/qr-code-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Cart & Checkout</h3>
                                <p class="text-base font-normal">Allowing customers to review their selected items, adjust quantities, choose payment option, and complete their order quickly and securely.</p>
                            </div>
                            <NuxtImg class="h-[271px] w-full" src="/images/features/qr-code/qr-code-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Item Details</h3>
                                <p class="text-base font-normal">A quick view modal of each items that showing item details with sizes, extras, addons, and quantity.</p>
                            </div>
                            <NuxtImg class="h-[184px]" src="/images/features/qr-code/qr-code-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Veg/Non-veg Filter</h3>
                                <p class="text-base font-normal">Let customers quickly filter dishes by veg or non-veg—ensuring a personalized and hassle-free browsing experience.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/qr-code/qr-code-4.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Tracking</h3>
                                <p class="text-base font-normal">Customers can track their order—from confirmation to prepared and delivery—ensuring transparency & peace of mind.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/qr-code/qr-code-5.png" alt="order_tracking"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="featureActive == 5" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Home Screen</h3>
                                <p class="text-base font-normal overflow-ellipsis">The home screen gives users a smooth start with menu categories, popular and featured items, plus eye-catching offer banners—all designed to help users discover and order quickly.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold mb-4">Item or Dish Search</h3>
                                <p class="text-base font-normal">Help customers find their favorite dishes fast with a smart search bar—type a name or keyword and accurate results make ordering easier and faster.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Offer Banner</h3>
                                <p class="text-base font-normal">Catch attention with vibrant offer banners that highlight discounts, deals, and special promotions right on the app’s home page.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/user-app/user-app-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Menu Items List</h3>
                                <p class="text-base font-normal">Browse a clean, organized list of menu items with images, prices, and brief descriptions—making it easy to explore and choose your favorites.</p>
                            </div>
                            <NuxtImg class="max-w-[396px] w-full h-[286px]" src="/images/features/user-app/user-app-4.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Item Details & Add to Cart</h3>
                                <p class="text-base font-normal">A quick view modal of each items that showing item details with sizes, extras, addons, and a field for special instructions. Customers can add to cart any item from here.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] w-full h-[286px]" src="/images/features/user-app/user-app-5.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Veg/Non-veg Filter</h3>
                                <p class="text-base font-normal">Let customers quickly filter dishes by veg or non-veg—ensuring a personalized and hassle-free browsing experience.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/user-app/user-app-6.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">User’s Cart</h3>
                                <p class="text-base font-normal overflow-ellipsis">The user cart page offers a clear summary of selected items, allowing customers to review quantities, customize extras, and proceed to checkout with ease.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-7.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold mb-4">Checkout</h3>
                                <p class="text-base font-normal">The checkout page letting customers confirm their order, add delivery address, choose delivery time schedule or choose branch & time schedule for takeaway and place their order.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-8.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Coupon or Voucher</h3>
                                <p class="text-base font-normal">Customers can discover all available coupons & vouchers and can apply them at checkout for instant savings.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/user-app/user-app-9.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Set Delivery Location</h3>
                                <p class="text-base font-normal">Customers can easily set their delivery location or edit existing location on the map or by address—ensuring accurate, timely deliveries every time.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] h-[286px] w-full" src="/images/features/user-app/user-app-10.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Schedule Delivery</h3>
                                <p class="text-base font-normal overflow-ellipsis">Customers can schedule their delivery by selecting a preferred date and time—making it easy to plan meals in advance and receive orders at their convenience.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-11.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold mb-4">Multi Payment Option</h3>
                                <p class="text-base font-normal">FoodKing supports multiple payment methods—including cash, card, and credit balance—giving customers the flexibility to pay however they prefer.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-12.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Tracking</h3>
                                <p class="text-base font-normal overflow-ellipsis">Customers can track their order status in real time—from confirmation to preparation and delivery—ensuring transparency and peace of mind.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-13.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold mb-4">Order History</h3>
                                <p class="text-base font-normal">The Order History feature lets customers view all their past orders & current orders in one place. They can easily review order details and track spending with just a few clicks.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-14.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6">   
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">User Profile</h3>
                                <p class="text-base font-normal">Users can manage their personal details, saved addresses, order history, and preferences—all in one profile section.</p>
                            </div>
                            <NuxtImg class="h-[184px]" src="/images/features/user-app/user-app-15.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Multi Language</h3>
                                <p class="text-base font-normal">FoodKing supports multiple languages for a more personalized and accessible user experience.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/user-app/user-app-16.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Authentication & Guest Login</h3>
                                <p class="text-base font-normal">Customers can sign up or log in easily, or simply continue as a guest for a quick and hassle-free checkout experience.</p>
                            </div>
                            <NuxtImg class="h-[154px] flex-grow flex-shrink-0" src="/images/features/user-app/user-app-17.png" alt="order_tracking"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="featureActive == 6" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold">Home Screen</h3>
                                <p class="text-base font-normal overflow-ellipsis">The home screen shows delivery stats of a quick overview of their activity and a real-time list of active assigned orders—keeping delivery boys informed and on track.</p>
                            </div>
                            <NuxtImg class="h-[271px] flex-grow flex-shrink-0" src="/images/features/delivery-app/delivery-app-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl font-bold">Active Orders & Details</h3>
                                <p class="text-base font-normal">Delivery boys can view all active orders with full details, including customer info, address, items, and delivery instructions—ensuring smooth, accurate deliveries.</p>
                            </div>
                            <NuxtImg class="h-[271px] w-full" src="/images/features/delivery-app/delivery-app-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold">View Delivery Direction</h3>
                                <p class="text-base font-normal overflow-ellipsis">Delivery boys can easily view the best route to the customer using integrated map directions—making deliveries faster and more efficient.</p>
                            </div>
                            <NuxtImg class="h-[271px] flex-grow flex-shrink-0" src="/images/features/delivery-app/delivery-app-3.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order History</h3>
                                <p class="text-base font-normal">Delivery boys can access a complete history of their past deliveries—helpful for tracking performance and resolving any order-related issues.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/delivery-app/delivery-app-4.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Delivery Boy Profile</h3>
                                <p class="text-base font-normal">Delivery boys can manage their personal information, update profile details—all from their profile section.</p>
                            </div>
                            <NuxtImg class="h-[184px]" src="/images/features/delivery-app/delivery-app-5.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Multi Language</h3>
                                <p class="text-base font-normal">FoodKing supports multiple languages for a more personalized and accessible user experience.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/delivery-app/delivery-app-6.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Delivery Boy Login</h3>
                                <p class="text-base font-normal">Delivery boys can securely log in to their account to access assigned orders, track deliveries, and manage their profile.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/delivery-app/delivery-app-7.png" alt="order_tracking"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
           KEY FEATURES PART END 
     =================================-->

    <!--===============================
          ADDON FEATURES PART START 
     =================================-->
     <section class="bg-[url('/images/bg/addon-bg.png')] bg-contain md:bg-cover bg-no-repeat bg-top pt-20 pb-20 sm:pb-40">
        <div class="container">
            <div class="max-w-[742px] w-full mx-auto md:px-20 mb-12 lg:mb-16">
                <h1 class="heading text-center mb-6">Boost Your System –<span class="gradient-text"> Addons Features </span>Uncovered</h1>
               <p class="text-base lg:text-lg font-normal text-center lg:px-24">Packed with extra goodies to make running your restaurant smoother, faster, and way more fun!</p>
            </div>
            <div class="sticky top-20 lg:top-24 z-10">
                <div class="w-full max-w-[850px] relative p-4 mb-12 mx-auto bg-white rounded-full">
                    <nav class="flex overflow-x-auto scrollbar-hide justify-evenly">
                        <button 
                            type="button" 
                            v-for="addonTab in addonTabs"
                            @click="addonActive = addonTab.id"
                            :key="addonTab.id"
                            :class="addonTab.id === addonActive ? 'active' : ''"
                            class="navbtn">
                            <i :class="[addonActive === addonTab.id? 'text-white': '', addonTab.icon]" class="text-xl text-[#818B9B]"></i>
                            <span>{{ addonTab.name }}</span>
                        </button>
                    </nav>
                    <div class="w-full h-12 bg-[#FFA087] absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10 bg-linear-270 from-[#FFB19B] from-0% via-[#DCA4FF] via-50% to-[#FF97BD] to-100% blur-[30px]"></div>
                </div>
            </div>
            <div v-if="featureActive == 1">
                <div class="grid lg:grid-cols-12 gap-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-[28px] font-bold mb-4">Dashboard</h3>
                                <p class="text-base font-normal">Quick overview of entire business with a real-time dashboard that shows sales, orders, performance, and key insights.</p>
                            </div>
                            <NuxtImg class="h-full w-full" src="/images/addon/marchent/dashboard.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-[28px] font-bold mb-4">Online Orders Manage</h3>
                                <p class="text-base font-normal">Manage online customer orders effortlessly with live updates, automatic status tracking, and easy access to order details for smooth fulfillment.</p>
                            </div>
                            <NuxtImg class="h-full w-full" src="/images/addon/marchent/order-management.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">POS Orders Manage</h3>
                                <p class="text-base font-normal">Take in-store orders quickly with built-in POS system—optimized for speed, accuracy, & an intuitive user experience.</p>
                            </div>
                            <NuxtImg class="h-full w-full" src="/images/addon/marchent/pos-order.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Details</h3>
                                <p class="text-base font-normal">View and manage each order including items, customer info, payment status, and delivery progress—all in one place.</p>
                            </div>
                            <NuxtImg class="h-full w-full" src="/images/addon/marchent/order-details.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Sales Report</h3>
                                <p class="text-base font-normal">Access detailed sales reports to monitor performance, spot trends, and make data-driven decisions that drive growth.</p>
                            </div>
                            <NuxtImg class="h-full w-full" src="/images/addon/marchent/sales-report.png" alt="pos"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
           ADDON FEATURES PART END 
     =================================-->

    <!--===============================
              ACTION PART START 
     =================================-->
     <ActionComponent>
        <div class="flex flex-col justify-center items-center">
            <h2 class="heading text-center mb-3">Curious to
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
    const featureActive = ref(1);
    const addonActive = ref(1);

    const featureTabs = reactive([
        { id: 1, name: 'Admin Panel', icon:"icon-admin-panel" },
        { id: 2, name: 'Branch & Staffs Panel', icon:"icon-branch-panel" },
        { id: 3, name: 'User Website', icon:"icon-user-site" },
        { id: 4, name: 'QR Table Order' , icon:"icon-qr-order"},
        { id: 5, name: 'User App', icon:"icon-user-app" }, 
        { id: 6, name: 'Delivery App', icon:"icon-delivery-app" },
    ])
    

    const addonTabs = reactive([
        { id: 1, name: 'Marchent/Manager App', icon:"icon-merchant-app" },
        { id: 2, name: 'Chef/Kitchen (KDS) App', icon:"icon-kitchen-app" },
        { id: 3, name: 'Self-Ordering Kiosk App', icon:"icon-kiosk-app" },
    ])

</script>