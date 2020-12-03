<template>
<div class = "page">
    <h1 class="is-size-1">
        Fitness Goals Tracker!
    </h1> 
    <div class = "container">
        <FitnessStuff/>
        <router-view/>
    </div>
</div>
   
</template>

<script>
import session from "@/models/session";
import Fitness from "@/components/Fitness";
import { getExercises } from "@/models/exercise";

export default {
    data()
    {
        return {
            exercises: []
        }
    },
    async created(){
        this.exercises = await getExercises();
    },
    components: {
        Fitness
    },
}
</script>

<style>

</style>