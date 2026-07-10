<template>
  <section
    data-aos="zoom-in"
    class="flex justify-center items-center dark:text-white min-h-screen mt-20 lg:mt-0"
  >
    <!-- Top Gradient Background -->
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-primary via-secondary to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"
    ></header>

    <!-- Bottom Gradient Background -->
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-primary via-secondary to-secondary opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
    ></header>

    <!-- Main Content -->
    <main
      class="absolute grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg:p-8"
    >
      <header class="text-center lg:text-left">
        <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
          👋 Hi, I'm
          <span
            class="text-secondary stroke-text text-stroke-primary dark:text-stroke-secondary"
          >
            Kingsley
          </span>
        </h1>
        <p class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold">
          I create high-performing websites and e-commerce solutions that are
          visually appealing, user-friendly, and built to convert visitors into
          customers.
        </p>
        <p class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold">
          From concept to deployment, I build full-stack web solutions that help
          businesses succeed in today’s digital world.
        </p>

        <!-- Action Buttons -->
        <div class="mt-6 flex justify-center lg:justify-start gap-3">
          <a
            href="https://wa.me/2348148674341?text=Hello%20Kingsley,%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20hire%20you"
            target="_blank"
            rel="noopener"
            class="inline-block"
          >
            <Button class="mr-2"  label="Hire Me" />
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener"
            class="font-semibold text-lg w-[10rem] h-[55px] rounded-full border-2 flex justify-center items-center text-primary border-primary bg-white dark:bg-transparent dark:text-secondary dark:border-secondary hover:scale-105 transition"
            title="Resume download is now available"
          >
             <Icon icon="line-md:download-loop" class="text-3xl" />
            <span class="ml-1">Resume</span>
          </a>
        </div>
      </header>

      <!-- Hero Image -->
      <aside
        class="container flex justify-center lg:justify-end mt-20 lg:mt-0 items-center flex-wrap"
      >
        <figure
          class="card card-before relative m-[30px] md:w-[420px] md:h-[420px] md:before:w-[450px] md:before:h-[450px] w-[280px] h-[350px] before:w-[300px] before:h-[300px] before:border-[25px] before:border-secondary before:shadow-[7px_7px_21px_primary,_-7px_-7px_21px_primary] dark:before:border-secondary dark:before:shadow-[7px_7px_21px_secondary,_-7px_-7px_21px_secondary]"
        >
          <div
            class="relative w-full h-full bg-cover transform translate-x-[3px] translate-y-[3px]"
          >
            <img
              src="@/assets/images/HeroPics2.jpg"
              alt="Hero Picture"
              class="w-full h-full object-cover bg-white"
              loading="lazy"
            />
          </div>
        </figure>
      </aside>
    </main>
    <!-- SVG filter for wavy effect -->
    <svg class="hidden">
      <filter id="wavy1">
        <feTurbulence
          x="0"
          y="0"
          baseFrequency="0.2"
          numOctaves="5"
          seed="1"
        ></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
    </svg>
  </section>
</template>

<script setup>
import Button from "../UI/Button.vue";
// import { Icon } from "@iconify/vue"; // optional if you're using icons
</script>

<style>
.fancy-stroke::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  color: black;
  z-index: -1;
  filter: blur(1px);
} /* Optional: glowing text animation */
@keyframes glow {
  0%,
  100% {
    text-shadow:
      0 0 5px #ffeb00,
      0 0 10px #ffeb00;
  }
  50% {
    text-shadow:
      0 0 10px #ffeb00,
      0 0 20px #ffeb00;
  }
}
.fancy-stroke {
  animation: glow 2s ease-in-out infinite;
}
/* before pseudo-element (manual because CDN doesn't support before:) */
.container .card-before::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: transparent;
  filter: url(#wavy1);
  z-index: 1;
  pointer-events: none;
}
</style>
