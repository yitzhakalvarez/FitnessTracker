<template>
<div class = "page">
    <strong>Fitness Page</strong>
    <div class = "container">
        <Fitness/>
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