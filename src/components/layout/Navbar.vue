<template>
  <header>
    <div class="flex justify-between items-center p-8 lg:px-12 relative z-20">
      <!-- Logo -->
      <div class="text-3xl font-bold dark:text-white">
        
         <img
              src="@/assets/images/logo2.png"
              alt="Hero Picture"
              class="h-[100px] w-[100px] relative z-[1] bg-primary dark:bg-secondary rounded-full"
              loading="lazy"
            />
        
      </div>

      <!-- Mobile Toggle Button -->
      <div class="md:hidden z-30">
        <button
          class="block focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <span
            v-if="isMenuOpen"
            class="text-5xl text-white dark:text-white"
          >
            <Icon icon="material-symbols:close" />
          </span>
          <span
            v-else
            class="text-5xl text-white dark:text-white"
          >
            <Icon icon="material-symbols:menu" />
          </span>
        </button>
      </div>

      <!-- Navigation Menu (Responsive) -->
      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-2"
      >
        <nav
          :class="[
            'transition-all duration-300 ease-in-out',
            isMenuOpen ? 'flex' : 'hidden',
            'fixed inset-0 z-20 flex-col items-center justify-center bg-primary',
            'md:relative md:bg-transparent md:flex md:justify-between md:flex-row'
          ]"
        >
          <!-- Menu Items -->
          <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
            <li v-for="item in Menu" :key="item.name">
              <a
                :href="item.href"
                class="block transition ease-linear md:text-lg lg:text-xl font-bold
                  text-3xl md:text-primary hover:text-secondary dark:text-white dark:hover:text-secondary"
                @click="scrollToSection(item.href)"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>

          <!-- Dark Mode Toggle (Only shows on desktop) -->
          <button
            @click="toggleDarkMode"
            class="text-white ml-20 z-10 hidden md:block"
            aria-label="Toggle dark mode"
          >
            <Transition name="fade" mode="out-in">
              <Icon
                v-if="!isDarkMode"
                icon="line-md:moon-filled"
                class="text-5xl text-gray-900 dark:text-grey-900"
                key="moon"
              />
              <Icon
                v-else
                icon="line-md:sunny-outline"
                class="text-5xl text-yellow-500 dark:text-yellow-500"
                key="sun"
              />
            </Transition>
          </button>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

// State for mobile menu toggle
const isMenuOpen = ref(false);

// Navigation links
const Menu = ref([
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Why Me", href: "#whyme" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]);

// Scroll to section handler
const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

// Dark mode state
const isDarkMode = ref(localStorage.getItem("theme") === "dark");

// Apply dark mode on mount
onMounted(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  }
});

// Toggle dark mode
const toggleDarkMode = () => {
  const html = document.documentElement;
  if (isDarkMode.value) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
  isDarkMode.value = !isDarkMode.value;
};
</script>

<style>
/* Fade transition for dark mode icons */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>



