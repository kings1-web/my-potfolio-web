<template>
  <article class="max-w-sm overflow-hidden shadow-lg rounded border border-secondary dark:bg-[#ffffff29] bg-primary">
    
    <!-- Image -->
    <figure>
      <img :src="image" :alt="title" class="w-full h-48 object-cover" />
    </figure>

    <!-- Content -->
    <section class="px-6 py-4">
      <h3 class="font-bold text-xl m-2 text-white">{{ title }}</h3>
      <p class="text-gray-300 text-sm">{{ description }}</p>
    </section>

    <!-- Tags -->
    <footer class="px-6 pt-4 pb-2">
      <ul class="flex flex-wrap gap-2">
        <li
          v-for="(tag, index) in tags"
          :key="index"
          class="inline-block dark:bg-primary bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-sm font-semibold"
        >
          #{{ tag }}
        </li>
      </ul>
    </footer>

    <!-- Actions -->
    <div class="px-6 pb-4 flex justify-between items-center">
      <a v-if="livelink" :href="livelink" class="text-secondary font-semibold hover:underline text-sm">
        Live Demo
      </a>
      <a v-if="codelink" :href="codelink" class="text-secondary font-semibold hover:underline text-sm">
        View Code
      </a>
    </div>

  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Project Title",
  },
  description: {
    type: String,
    default: "Brief description of the project",
  },
  image: {
    type: String,
    default: "/",
  },
  tags: {
    type: Array,
    default: () => ["vue", "tailwind"],
  },
  livelink: {
    type: String,
    default: null,
  },
  codelink: {
    type: String,
    default: "#",
  },
});
</script>
