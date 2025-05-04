<template>
  <div class="bg-white pb-3 rounded-2xl transition-transform duration-200 hover:scale-105">
    <img
      class="object-cover h-72 w-full rounded-t-2xl"
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
    />
    <h2 class="p-5 text-2xl font-bold">{{ meal.strMeal }}</h2>
    <h2 class="line-clamp-2 pb-5 mb-5 px-5">{{ meal.strInstructions }}</h2>
    <div class="p-5 flex justify-start gap-5">
      <router-link
        :to="{ name: 'mealDetails', params: { idMeal: meal.idMeal } }"
        class="bg-green-900 text-white p-3 rounded-md text-xl"
        >view recipie
      </router-link>
      <a
      target="_blank"
        :href="meal.strYoutube"
        class=" border-1 border-red-600 hover:text-white hover:bg-red-600 p-3 rounded-md text-xl"
        >Youtube
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({ meal: Object });
</script>
