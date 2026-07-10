<template>
  <section class="mt-20 lg:mt-0 w-full relative text-white flex justify-center">
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-primary via-secondary to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"
    ></header>

    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-primary via-secondary to-secondary opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
    ></header>
    <ul
      ref="statsSection"
      class="relative z-[1] p-6 mx-auto w-11/12 lg:mx-0 rounded-3xl border dark:bg-[#ffffff29] bg-primary shadow-lg md:divide-x grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 border-secondary divide-secondary"
    >
      <li class="text-center" v-for="element in numbers" :key="element.id">
        <h2
          class="font-semibold flex justify-center text-xl sm:text-2xl md:text-4xl w-full"
        >
          + <Countup v-if="hasIntersected" :endVal="element.number"/>
        </h2>
        <p class="mt-2">{{ element.title }}</p>
      </li>
    </ul>
  </section>
</template>
<script setup>
import Countup from "vue-countup-v3";
import { ref, onMounted } from "vue";

const numbers = ref([
  { id: 1, number: 12, title: "Created projects" },
  { id: 2, number: 200, title: "Projects" },
  { id: 3, number: 120, title: "Happy clients" },
  { id: 4, number: 5, title: "Year" },
]);

const statsSection = ref(null);
const hasIntersected = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        hasIntersected.value = true;
        observer.disconnect(); //stop observing once it has Intersected
      }
    },
    { threshold: 0.5 } //trigger when 50% of the section is visible
  );
  if (statsSection.value) {
    observer.observe(statsSection.value);
  }
});
</script>
