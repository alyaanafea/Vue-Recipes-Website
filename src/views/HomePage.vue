<template>
  <router-view />
  <div class="font-bold text-emerald-700 text-2xl md:text-4xl pt-8 px-8">
    Random Meals
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:p-15 p-8 justify-center items-center"
  >
    <MealsCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import MealsCard from "../components/MealsCard.vue";
import { axiosClient } from "../store/axiosClient";

const meals = ref([]);
onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    const response = await axiosClient.get(`random.php`);
    meals.value.push(response.data.meals[0]);
  }
});
</script>
