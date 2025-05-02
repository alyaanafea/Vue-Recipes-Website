import { createRouter,createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DefaultLayout from "../views/DefaultLayout.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByIngrediant from "../views/MealsByIngrediant.vue";
import MealDetails from "../views/MealDetails.vue";

const routes =[
    
    {
        path:"/",
        name:"DefaultLayout",
        component:DefaultLayout,
        children:[

            {
                path:"",
                name:"home",
                component:HomePage
            },
            {
                path:"/byLetter/:letter?",
                name:"byLetter",
                component:MealsByLetter,
                
            },
            {
                path:"/byName/:name?",
                name:"byName",
                component:MealsByName
            },
            {
                path:"/byIngredient/:ingrediant?",
                name:"byIngredient",
                component:MealsByIngrediant
            },
            {
                path:"/mealDetails/:idMeal",
                name:"mealDetails",
                component:MealDetails
            },
        ]
    },
]
const router= createRouter({
    history:createWebHistory(),
    routes
})

export default router