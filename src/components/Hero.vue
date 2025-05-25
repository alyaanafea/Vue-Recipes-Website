<template>
  <section
    class="bg-white flex justify-center items-start md:items-center pt-16 md:h-screen"
  >
    <div
      class="md:px-12   px-4 py-20 lg:flex-row flex-col-reverse h-10/12 w-full lg:w-11/12 justify-between md:rounded-4xl text-center md:text-start bg-orange-50 gap-8 flex items-center  border-transparent"
    >
      <div class="">
       <h1 class="text-2xl h-14 inline md:text-5xl font-bold  text-orange-800">
      {{ displayedText }}
    </h1>
        <p class="text-md  lg:text-lg pt-4 text-gray-700 mb-6">
          Explore a world of flavors with our handpicked, easy-to-make recipes.
        </p>
        <a href="#meals"
          class="underline text-amber-950 cursor-pointer  text-xl py-3   "
        >
          Browse Recipes
        </a>
      </div>

      <div>
        <img
          src="/images/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"
          class="lg:w-[600px] w-[450] border-transparent rounded-xl animate-fade-in-left"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const texts = [
  'Delicious Recipes',
  'Easy Meals for Busy Days',
  'Cook with Love'
]

const displayedText = ref('')
const showCursor = ref(true)

let currentTextIndex = 0
let i = 0

function type() {
  const fullText = texts[currentTextIndex]

  if (i < fullText.length) {
    displayedText.value += fullText[i++]
    setTimeout(type, 100)
  } else {
    currentTextIndex = (currentTextIndex + 1) % texts.length
    i = 0
    setTimeout(() => {
      displayedText.value = ''
      type()
    }, 1000)
  }
}


onMounted(() => {
  type()
  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
})
</script>

<style scoped>
@keyframes blink {
  0%, 100% { opacity: 0; }
  /* 50% { opacity: 0; } */
}

</style>