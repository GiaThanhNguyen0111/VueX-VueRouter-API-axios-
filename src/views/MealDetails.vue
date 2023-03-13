<template >
    <div class="w-[800px] mx-auto mt-10">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
        <div class="grid frid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold"> Category: </strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold"> Area: </strong>  {{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold"> Tags: </strong>  {{ meal.strTags }}
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div class="text-2xl font-semibold mb-2">
                <h2>Ingredients</h2>
                <ul>
                   <template v-for="(e , index) of new Array(20)">
                        <li v-if="meal[`strIngredient${index + 1}`]">
                         {{ index + 1 }}.{{ meal[`strIngredient${index+1}`] }}
                        </li>
                   </template> 
                </ul>
            </div>
            <div class="text-2xl font-semibold mb-2">
                <h2>Measures</h2>
                <ul>
                    <template v-for="(e , index) of new Array(20)">
                         <li v-if="meal[`strMeasure${index+1}`]">
                          {{ index + 1 }}.{{ meal[`strMeasure${index+1}`] }}
                         </li>
                    </template> 
                 </ul>
            </div>
            <div class="mt-4 mb-4 flex flex-row">
                <YouTubeButton :href="meal.strYoutube"/>
                <a :href="meal.strSource"
                    target="_blank"
                    class="ml-2 mt-[-5px] py-1 px-1 rounded border-2 text-white border-indigo-600 bg-indigo-500 hover:bg-indigo-200 hover:text-black"
                    >
                    Original Source
                </a>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axiosClient from '../axiosClient';
import { useRoute } from 'vue-router';
import YouTubeButton from '../components/YouTubeButton.vue';

const route = useRoute();
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`).then(({data}) => {
        debugger;
        meal.value = data.meals[0] || {}
    })
});

</script>
<style>
    
</style>