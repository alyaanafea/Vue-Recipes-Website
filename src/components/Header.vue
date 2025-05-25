<template>
  <div
    class="flex justify-between items-center h-16 border-b bg-white fixed z-20 w-full border-gray-200 md:text-xl text-md px-5"
  >
    <div>
      <router-link class="text-orange-800 font-bold text-2xl" :to="{ name: 'home' }"
        >Home</router-link
      >
    </div>
    <div class="flex items-center justify-center h-full ">
      <router-link
      class="h-full flex items-center px-3 hover:text-orange-800 "
      active-class="text-orange-800 "
      :to="{ name: 'byName' }"
      >Search by Name</router-link
      >
      <router-link
        class="h-full flex items-center px-3 hover:text-orange-800  "
        active-class="text-orange-800 "
        :to="{ name: 'byLetter' }"
        >Find by Letter</router-link
      >
     
    </div>
  </div>
</template>
<script setup></script>
