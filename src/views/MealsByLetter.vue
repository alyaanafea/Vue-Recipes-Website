<template>
  <div class="flex flex-wrap justify-center items-center gap-5 pt-20 text-2xl">
    <router-link
      class="transition-transform duration-200 hover:scale-125 hover:font-bold hover:text-orange-800"
      active-class="scale-125 font-bold text-orange-800"
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter in letters"
      :key="letter"
      >{{ letter }}</router-link
    >
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:p-15 p-8 justify-center items-center"
  >
    <div v-if="!meals" class="text-center col-span-full text-xl text-gray-500">
      There is no recipe starts with {{ route.params.letter }} to view
    </div>
    <MealsCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useMealsStore } from "../store/mealsStore";
import MealsCard from "../components/MealsCard.vue";
import { useRoute } from "vue-router";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const route = useRoute();
const letter = ref("");
const mealsStore = useMealsStore();

const mealsByLetter = mealsStore.searchByLetter;
const meals = computed(() => mealsStore.mealsByLetter);
onMounted(() => {
  letter.value = route.params.letter;
});
watch(
  () => route.params.letter,
  (newLetter) => {
    if (newLetter) {
      letter.value = newLetter;
      mealsByLetter(newLetter);
    } else {
      route.params.letter = "A";
      mealsByLetter("A");
    }
  },
  { immediate: true }
);
</script>
