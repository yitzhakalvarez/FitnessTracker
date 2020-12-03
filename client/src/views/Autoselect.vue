<template>
    <section>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Find or add an exercise">
            <b-autocomplete
                v-model="name"
                ref="autocomplete"
                :data="filteredDataArray"
                placeholder="e.g. Running"
                @select="option => selected = option">
                <template slot="footer">
                    <a @click="showAddExercises">
                        <span> Add new... </span>
                    </a> 
                </template>
                <template slot="empty">No results for {{name}}</template>
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
 import session from "@/models/session";
import { getexercisetypesname } from "@/models/exercise";
    export default {
        data:function() {
            return {
                data: [],
                name: '',
                selected: null,
            }
        },
        async created()
        {
           this.data = await getexercisetypesname();
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
    }
</script>