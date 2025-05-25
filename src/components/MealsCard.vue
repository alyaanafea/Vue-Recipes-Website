<template>
  <div class="bg-white pb-3 rounded-2xl overflow-hidden">
    
    <!-- الصورة clickable -->
    <router-link
      :to="{ name: 'mealDetails', params: { idMeal: meal.idMeal } }"
      class="block overflow-hidden"
    >
      <img
        class="object-cover h-72 w-full rounded-t-2xl transform transition-transform duration-500 hover:scale-110"
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
      />
    </router-link>

    <!-- باقي الكارد -->
    <h2 class="p-5 text-2xl font-bold">{{ meal.strMeal }}</h2>
    <h2 class="line-clamp-2 pb-5 mb-5 px-5">{{ meal.strInstructions }}</h2>
    <div class="p-5 flex justify-start gap-5">
      <router-link
        :to="{ name: 'mealDetails', params: { idMeal: meal.idMeal } }"
        class="bg-amber-950 text-white border-2 border-amber-950 px-3 py-2 rounded-md text-xl hover:bg-white hover:text-black"
      >
        View Recipe
      </router-link>
      <a
        target="_blank"
        :href="meal.strYoutube"
        class="border-2 border-amber-950 px-3 py-2 rounded-md text-xl"
      >
        YouTube
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({ meal: Object });
</script>
