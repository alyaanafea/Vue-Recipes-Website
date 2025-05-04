<template>
  <div class="mx-auto py-6 px-3 lg:max-w-[800px] flex flex-col gap-4">
    <img class="object-cover" :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="grid grid-cols-1 md:grid-cols-3 justify-between">
      <h2><strong>Area:</strong>{{ meal.strArea }}</h2>
      <h2><strong>Category:</strong> {{ meal.strCategory }}</h2>
      <h2><strong>Tags:</strong>{{ meal.strTags }}</h2>
    </div>
    <h2 class="text-2xl font-bold">{{ meal.strMeal }}</h2>
    <h2 class="  ">{{ meal.strInstructions }}</h2>

    <div class="flex justify-center items-center">
      <a
        :href="meal.strYoutube"
        target="_blank"
        class="bg-green-900 text-white p-3 rounded-md text-xl"
        >youtube
      </a>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { axiosClient } from "../store/axiosClient";

const route = useRoute();
const meal = ref({});
onMounted(async () => {
  const response = await axiosClient.get(`lookup.php?i=${route.params.idMeal}`);
  console.log(response.data.meals);

  meal.value = response.data.meals[0];
  // console.log(meal);
});
</script>
