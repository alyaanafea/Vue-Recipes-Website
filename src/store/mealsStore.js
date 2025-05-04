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
      if(!name){this.searchedMeals =[]}
    else { const response = await axiosClient.get(`search.php?s=${name}`);
      this.searchedMeals = response.data.meals;}

    },
    async searchByLetter(letter) {
      
      const response = await axiosClient.get(`search.php?f=${letter}`);
      this.mealsByLetter = response.data.meals;
    },
   
  },
});
