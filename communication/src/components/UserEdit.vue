<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age : {{userAge}}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
import {eventBus} from '../main'
export default{
    props:['userAge'],
    methods:{
        editAge(){
            this.userAge = 30;
            this.$emit('ageWasEdited', this.userAge)
            // For communication between children (doesn't need to pass parent)
            // eventBus.$emit('ageWasEdited', this.userAge)
            // OR changeAge (globally) setup in main.js
            eventBus.changeAge(this.userAge)
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
