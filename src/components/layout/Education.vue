<template>
  <section class="p-16">
    <header class="text-center">
      <h3 class="text-4xl font-bold text-primary dark:text-white">Education</h3>
    </header>
    <ul class="mt-10 space-y-8 y-8">
      <li
        class="w-full rounded-xl shadow-lg border bg-gradient-to-t to-[#acac39] from-[#1f1e1c99]"
        v-for="(item, index) in education"
        :key="index"
      >
        <article
          class="flex flex-col lg:flex-row items-start rounded-[12px] bg-primary mt-[3px] mx-[3px] p-6 md:p-8 lg:p-10"
        >
        <figure class="w-full lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0">
            <Icon icon="hugeicons:university" class="text-4xl md:text-6xl lg:text-7xl text-secondary" />
        </figure>

        <section class="w-full lg:w-3/4 lg:pl-4 text-center lg:text-left">
          <header>
            <h3 class="text-xl md:text-2xl font-semibold uppercase text-secondary">{{ item.School }}</h3>
          </header>
          <p class="text-sm md:text-base text-white">{{ item.degree }}</p>
          <p class="text-sm md:text-base text-white">{{ item.duration }}</p>
          
        </section>
    </article>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from "vue";
const education = ref([
  {
    duration: "03/2011-07/2015",
    School: "school 1",
    degree: "Software Engineer",
  },
  {
    duration: "03/2016-07/2019",
    School: "school 2",
    degree: "Software Engineer",
  },
]);
</script>
