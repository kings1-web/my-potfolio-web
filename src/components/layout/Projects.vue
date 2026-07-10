<template>
  <!-- SECTION HEADER -->
  <section id="projects" class="relative w-11/12 px-16 mx-auto">
    <SectionHeader title="My Projects" />

    <!-- Left Button (Previous) -->
<button
  ref="prevBtn"
  class="absolute top-2/3 left-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-2 rounded-full"
>
  <Icon icon="line-md:arrow-left" class="font-bold text-3xl" />
</button>

<!-- Right Button (Next) -->
<button
  ref="nextBtn"
  class="absolute top-2/3 right-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-2 rounded-full"
>
  <Icon icon="line-md:arrow-right" class="text-3xl" />
</button>


    <!-- SWIPER -->
    <swiper
      :effect="'coverflow'"
      grabCursor
      centeredSlides
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :navigation="{
         prevEl: prevBtn,
        nextEl: nextBtn,
      }"
       loop
      :pagination="{clickable: true }"
      :modules="[EffectCoverflow, Navigation, Pagination]"
      class="max-w-full mt-32"
    >
      <swiper-slide
        class="max-w-[300px]"
        v-for="(project, index) in projects"
        :key="index"
      >
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :image="`src/assets/images` + project.image"
          :tags="project.tags"
          :livelink="project.livelink"
          :codelink="project.codelink"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import SectionHeader from "../UI/SectionHeader.vue";
import ProjectCard from "../UI/ProjectCard.vue";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ref } from "vue";

// 1. Create template refs for the HTML elements
const prevBtn = ref(null);
const nextBtn = ref(null);


// -----------------------------
// Navigation config (FIXED)
// -----------------------------
/*const navigationOptions = {
  prevEl: ".swiper-prev",
  nextEl: ".swiper-next",
};*/

// -----------------------------
// Project data (FIXED)
// -----------------------------
const projects = ref([
  {
    title: "E-commerce Website",
    description: "Full online store with cart and checkout",
    image: "/project1.png",
    tags: ["Vue", "Node.js", "MongoDB"],
    livelink: "https://royalgoods.onrender.com",
    codelink: "/",
  },
  
  {
    title: "Blog App",
    description: "Blog platform with authentication",
    image: "/project3.png",
    tags: ["Vue", "Express", "MongoDB"],
    livelink: "/",
    codelink: "/",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with animations",
    image: "/project2.png",
    tags: ["Vue", "Tailwind"],
    livelink: "/",
    codelink: "/",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with animations",
    image: "/project2.png",
    tags: ["Vue", "Tailwind"],
    livelink: "/",
    codelink: "/",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with animations",
    image: "/project2.png",
    tags: ["Vue", "Tailwind"],
    livelink: "/",
    codelink: "/",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with animations",
    image: "/project2.png",
    tags: ["Vue", "Tailwind"],
    livelink: "/",
    codelink: "/",
  },
   {
    title: "E-commerce Website",
    description: "Full online store with cart and checkout",
    image: "/project1.png",
    tags: ["Vue", "Node.js", "MongoDB"],
    livelink: "/",
    codelink: "/",
  },
   {
    title: "E-commerce Website",
    description: "Full online store with cart and checkout",
    image: "/project1.png",
    tags: ["Vue", "Node.js", "MongoDB"],
    livelink: "/",
    codelink: "/",
  },
   {
    title: "E-commerce Website",
    description: "Full online store with cart and checkout",
    image: "/project1.png",
    tags: ["Vue", "Node.js", "MongoDB"],
    livelink: "/",
    codelink: "/",
  },
   {
    title: "E-commerce Website",
    description: "Full online store with cart and checkout",
    image: "/project1.png",
    tags: ["Vue", "Node.js", "MongoDB"],
    livelink: "/",
    codelink: "/",
  },
]);
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

