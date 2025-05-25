<template>
  <div class="mx-auto w-4/5 py-25 px-3 flex md:flex-row flex-col gap-8 max-w-screen">
    <img
      class="object-cover w-[500px] rounded-xl self-center"
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
    />
    <div class="">
      <div class="grid grid-cols-1 gap-4 justify-between">
        <h2><strong>Area:</strong>{{ meal.strArea }}</h2>
        <h2><strong>Category:</strong> {{ meal.strCategory }}</h2>
        <h2><strong>Tags:</strong>{{ meal.strTags }}</h2>
      </div>
      <h2 class="text-2xl font-bold pt-8">{{ meal.strMeal }}</h2>
      <h2 class="pt-6">{{ meal.strInstructions }}</h2>

      <div class="flex justify-center pt-8 items-center">
        <a
          :href="meal.strYoutube"
          target="_blank"
          class="  border-2 border-amber-950 px-3 py-2 rounded-md text-xl hover:bg-amber-950  hover:text-white"
          >youtube
        </a>
      </div>
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
