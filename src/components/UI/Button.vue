<template>

 <button
   @click="$emit('click')"
  class="relative overflow-hidden rounded-full bg-gray-700 dark:bg-ashes text-white w-[180px] h-[60px] text-lg font-semibold flex items-center justify-center transition-all duration-300 cursor-pointer">
  
  <!-- CENTER WRAPPER (handles positioning ONLY) -->
  <div class="absolute inset-0 scale-[1.06] blur-lg transition-transform duration-300 flex items-center justify-center">
    
    <!-- ANIMATION LAYER (no translate here) -->
    <div
      class="absolute transform w-[140%] h-[140%] rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary blur-3xl animate-rotate"
    ></div>

  </div>

  <!-- CONTENT -->
  <div class="relative z-10 w-[156px] h-[45px] flex justify-center items-center rounded-full bg-secondary text-primary border border-primary">
    {{ label }}
  </div>

</button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "Button",
  },
});

defineEmits(["click"]);

/*how to use it
<MyButton label="Hire Me" @click="handleClick" />*/
</script>

<style scoped>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-rotate {
  animation: rotate 3s linear infinite;
}

</style>
