<template>
 <div id="LoginBadge">
    
    <div class="media" v-if="session.user">
         <div class="media-content">
            <a class = "button is-rounded is-danger" @click.prevent="signout">
                <strong>Log Out</strong>
            </a>
        </div>
    </div>
</div>
</template>

<script>
import session from "@/models/session";
export default {
    data: ()=> ({
        session
    }),
    methods: {
        signout(){
            session.user = null;
            session.username = null,
            session.user_id = null,
            session.addNotification('You have succesfully signed out');
            this.$router.push('Login');
        }
    }
}
</script>

<style>

</style>