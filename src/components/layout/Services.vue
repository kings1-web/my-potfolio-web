<template>
  <section id="services" class="relative text-white mt-32">
    <SectionHeader title="My services" />

    <div
      class="mt-20 py-8 xl:px-16 sm:py-18 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
    >
      <article
        class="px-[12px] md:px-[24px]"
        v-for="element in services"
        :key="element.id"
      >
        <div
          class="mt-[30px] relative flex flex-col justify-center text-center rounded-[30px] border border-secondary dark:bg-[#ffffff29] bg-primary"
          data-aos="fade-out"
          :data-aos-delay="element.id * 100"
        >
          <div class="mt-[-30px] flex justify-center relative">
            <div class="mt-[-7px] p-[20px] relative bg-primary rounded-full">
              <span
                class="h-[60px] w-[60px] m-auto border border-secondary absolute top-[8px] left-[8px] rounded-full inline-block z-[1]"
              ></span>
              <img
                :src="element.icon"
                alt="service icon"
                class="h-[35px] w-[35px] relative z-[1]"
              />
            </div>
          </div>

          <div class="p-[30px]">
            <h3 class="uppercase font-semibold text-secondary text-base">
              {{ element.name }}
            </h3>
            <p class="text-[14px] leading-[20px] text-white tracking-[0.03rem]">
              {{ element.description }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import SectionHeader from "../UI/SectionHeader.vue";
const services = ref([
  {
    id: 1,
    icon: "https://img.icons8.com/ios-filled/100/daed/source-code.png",
    name: "frontend development",
    description:
    "I build responsive and modern user interfaces using Vue.js, ensuring smooth user experience across all devices. "
  },
  {
    id: 2,
    icon: "https://img.icons8.com/ios-filled/100/daed/server.png",
    name: "Backend Development",
    description:
    "I develop secure and scalable backend systems with Node.js and Express, handling APIs, authentication, and data management. "
  },
  {
    id: 3,
     icon: "https://img.icons8.com/ios-filled/100/daed/shopping-cart.png",
    name: "E-commerce Development",
    description:
    "I create fully functional e-commerce websites with product management, cart systems, and payment integration (Paystack) "
  },
  {
    id: 4,
    icon: "https://img.icons8.com/ios-filled/100/daedla/design.png",
    name: " Website Design & UI Improvement ",
    description:
    " I improve website layouts and design to make them more professional, user-friendly, and visually appealing "
  },
  {
    id: 5,
    icon: "https://img.icons8.com/ios-filled/100/daed/cloud.png",
    name: " Deployment & Hosting ",
    description:
    " I deploy applications on platforms like Render and ensure your website runs smoothly online. "
  },
  {
    id: 6,
     icon: "https://img.icons8.com/ios-filled/100/daed/lock.png" ,
    name: " Authentication & Security ",
    description:
    " I implement secure login systems using JWT and protect user data with best practices. "
  },
]);
</script>
