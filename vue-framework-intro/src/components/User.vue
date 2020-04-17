<template>
    <div id="user">
        <h3>The User</h3>
        <p>My username is {{username}}</p>
        <!-- can use locally only here -->
        <app-info></app-info>
    </div>
</template>

<script>
//add as local
import Info from './info.vue'
export default {
    data(){
        return {
            username : 'Nicha'
        }
    },
//use here
    components:{
        'app-info': Info
    }
}
</script>

<style scoped>
    p{
        font-style: italic;
    }
</style>
