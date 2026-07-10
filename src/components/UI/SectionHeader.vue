<template>
  <div>
    <div class="relative">
      <!-- Top Gradient Background -->
      <header
        class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-primary via-secondary to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"
      ></header>

      <!-- Bottom Gradient Background -->
      <header
        class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-primary via-secondary to-secondary opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
      ></header>
    </div>

    <!-- title -->
    <h2
      class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-secondary stroke-text text-stroke-primary dark:text-stroke-secondary"
      data-aos="fade-up"
    >
      {{ title }}
    </h2>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
