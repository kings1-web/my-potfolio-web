<template>
  <section class="mt-32" id="skills">
    <SectionHeader title="My Skills" />
    <div class="mt-20 flex justify-center">
      <ul class="flex flex-wrap justify-center items-center">
        <li
          v-for="(element, index) in skills"
          :key="index"
          :ref="el => skillRefs[index] = el"
           class="mx-[15px] rounded-[12px] mb-7"
          :style="{
           background: `linear-gradient(to top, ${element.from}, ${element.to})`
  }"
     >
          <div
            class="rounded-[12px] bg-primary mt-[3px] p-12 md:p-5 text-center"
          >
            <h3
              class="font-bold text-[35px] text-white flex items-center justify-center"
            >
            <Countup v-if="visibleItems[index]" :endVal="element.percentage" :startVal="0" :duration="2"/>
        </h3>
        <p class="font-normal text-[16px]" :style="{color:element.textColor}">{{ element.title }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import Countup from "vue-countup-v3";
import { ref,onMounted ,onBeforeUnmount} from "vue";
import SectionHeader from "../UI/SectionHeader.vue";

const skills = ref([
  {
    percentage: 98,
    title: "Figma",
    from:'#1f1e1c99',
    to:'#acac39',
    textColor: "#ffe600",
  },
  {
    percentage: 92,
    title: "Java",
    from:'#1f1e1c99',
    to:'#59c37899',
    textColor: "#59c378",
  },
  {
    percentage: 88,
    title: "Photoshop",
    from:"#1f1e1c99",
    to:"#dd584f99",
    textColor: "#dd584f",
  },
  {
    percentage: 72,
    title: "Vue.js",
    from:"#1f1e1c99",
    to:"#ff9a0099",
    textColor: "#ff9a00",
  },
  {
    percentage: 43,
    title: "WordPress",
    from:"#1f1e1c99",
    to:"#00a9ff99",
    textColor: "#00a9ff",
  },
  {
    percentage: 40,
    title: "React.js",
    from:"#1f1e1c99",
    to:"#9a00ff99",
    textColor: "#ad00ff",
  },
  {
    percentage: 95,
    title: "HTML",
    from:"#1f1e1c99",
    to:"#acac39",
    textColor: "#ffe600",
  },
  {
    percentage: 90,
    title: "JavaScript",
    from:"#1f1e1c99",
    to:"#59c37899",
    textColor: "#59c378",
  },
]);
//track visibility of items
const visibleItems = ref(skills.value.map(()=>false));
const skillRefs=ref([])

//intersectionObserver logic
onMounted(()=>{
    const observer = new IntersectionObserver(
        (entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    const index=skillRefs.value.indexOf(entry.target);
                    if(index !== -1){
                        visibleItems.value[index] = true; //mark items as visible
                    }
                }
            })
        },
        {threshold:0.3}//Trigger when 30% of element is visible
    );
    //observer
    skillRefs.value.forEach((el)=>observer.observe(el));
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>
