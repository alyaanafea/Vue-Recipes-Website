<template>
 
    <div>
      <Header />
    </div>
    <div class="bg-gray-50  min-h-screen "> <router-view />
  </div>
</template>
<script setup>
import Header from "../components/Header.vue";
</script>
