import { defineStore } from "pinia";
import { axiosClient } from "./axiosClient";

export const useMealsStore = defineStore("mealsStore", {
  state: () => ({ searchedMeals: [],
    mealsByLetter:[],
    rondomMeals:[]
   }),
  getters: {
    getSearchedMeals: () => {
      return this.searchedMeals;
    },
  },
  actions: {
    async searchMeals(name) {
      const response = await axiosClient.get(`search.php?s=${name}`);
      this.searchedMeals = response.data.meals;
      //  console.log(this.searchedMeals);
    },
    async searchByLetter(letter) {
      const response = await axiosClient.get(`search.php?f=${letter}`);
      this.mealsByLetter = response.data.meals;
      //  console.log(this.searchedMeals);
    },
    // async viewRondomMEals() {
    //   const response = await axiosClient.get(`random.php`);
    //   this.rondomMeals = response.data.meals;
      //  console.log(this.searchedMeals);
    // },
  },
});
