<template>
  <div class="flex justify-center items-center pt-5">
    <input
      @input="searchMeals(keyword)"
      v-model="keyword"
      type="text"
      class="w-3/4 border border-gray-200 rounded-md p-2 text-lg"
      placeholder="search for meal"
    />
  </div>
 <div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:p-15 p-8  justify-center items-center"><MealsCard  v-for="meal in meals" :key="meal.idMeal" :meal="meal"/></div> 
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useMealsStore } from "../store/mealsStore";
import MealsCard from "../components/MealsCard.vue";
import { useRoute } from "vue-router";

const route=useRoute()
const keyword = ref("");
const mealsStore = useMealsStore();
const searchMeals = mealsStore.searchMeals;
const meals = computed(()=>mealsStore.searchedMeals)
onMounted(()=>{
  keyword.value=route.params.name
  if(keyword.value){
    searchMeals(keyword.value)
  }
})
</script>
