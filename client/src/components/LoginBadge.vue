<template>
 <div id="LoginBadge">
    
    <div class="media" v-if="session.user">
        <div class="media-left">
            <figure class="image">
            <img :src="session.user.profile" alt="Placeholder image">
            </figure>
        </div>
         <div class="media-content">
            <p class="has-text-weight-bold">{{session.user.name}}</p>
            <p class="is-size-7">@{{session.user.handle}}</p>
        </div>
    </div>
    <div class="buttons" v-else>
          <router-link to="/register" class="button is-rounded is-primary">Register</router-link>
          <router-link to="/login" class="button is-rounded is-light">Log in</router-link>
    </div>
</div>
</template>

<script>
import session from "@/models/session";
export default {
    data: ()=> ({
        session
    })
}
</script>

<style>

</style>