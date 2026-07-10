<template>
  <section class="mt-32" id="contact">
    <SectionHeader title="Contact Me" />
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <form class="space-y-8">
        <div v-for="(item, index) in inputs" :key="index">
          <Input
            :id="item.id"
            :label="item.label"
            :type="item.type"
            :placeholder="item.placeholder"
            :rows="item.rows"
          />
        </div>
        <div class="flex justify-between">
          <Button label="Send" />
          <div
            class="mt-2 flex justify-center space-x-3 md:space-x-3"
          >
            <a href="#" class="text-gray-600 hover:text-blue-500">
              <Icon icon="fa-brands:twitter" style="font-size: 2rem" />
            </a>
            <a href="#" class="text-gray-600 hover:text-blue-500">
              <Icon icon="fa-brands:linkedin" style="font-size: 2rem" />
            </a>
            <a href="#" class="text-gray-600 hover:text-gray-500">
              <Icon icon="fa-brands:github" style="font-size: 2rem" />
            </a>
            <a href="#" class="text-gray-600 hover:text-pink-500">
              <Icon icon="fa-brands:instagram" style="font-size: 2rem" />
            </a>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "../UI/SectionHeader.vue";
import Input from "../UI/Input.vue";
import Button from "../UI/Button.vue";
import { ref } from "vue";

const inputs = ref([
  {
    id: "email",
    label: "your email",
    type: "email",
    placeholder: "email@example.com",
    rows: 6,
  },
  {
    id: "subject",
    label: "subject",
    type: "text",
    placeholder: "let us know how we can help you",
    rows: 6,
  },
  {
    id: "message",
    label: "message",
    type: "textarea",
    placeholder: "leave a comment",
    rows: 6,
  },
]);
</script>
