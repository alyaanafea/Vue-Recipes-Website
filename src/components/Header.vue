<template>
  <div
    class="flex justify-between items-center h-16 border-b border-gray-200 md:text-xl text-md px-5"
  >
    <div>
      <router-link class="text-emerald-900 font-bold text-2xl" :to="{ name: 'home' }"
        >Home</router-link
      >
    </div>
    <div class="flex items-center justify-center h-full ">
      <router-link
      class="h-full flex items-center px-3 hover:bg-emerald-800 hover:text-white"
      active-class="bg-emerald-800 text-white"
      :to="{ name: 'byName' }"
      >Search by Name</router-link
      >
      <router-link
        class="h-full flex items-center px-3 hover:bg-emerald-800 hover:text-white "
        active-class="bg-emerald-800 text-white"
        :to="{ name: 'byLetter' }"
        >Find by Letter</router-link
      >
     
    </div>
  </div>
</template>
<script setup></script>
