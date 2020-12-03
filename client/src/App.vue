<template>
     <div>
          <Nav/>
         <div class="container">
              <Notifications /> 
              <router-view/>
        </div>
     </div>
</template>

<script>
import Nav from "@/components/Nav"
import Notifications from "@/components/Notifications";
export default {
  components:{
     Nav,                      //auto puts Nav object in Nav with name Nav
     Notifications
  },
}
</script>

<style lang="scss">

</style>
