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
import FitnessStuff from "@/components/FitnessStuff";
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
        FitnessStuff
    },
}
</script>

<style>

</style>