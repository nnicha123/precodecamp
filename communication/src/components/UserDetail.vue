<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username : {{switchName()}}</p>
        <p>User Age : {{userAge}}</p>
        <button @click="resetName">Reset Name</button>
        <!-- Another way (to avoid using the emit) -->
        <button @click='resetFn()'>Reset Name</button>
    </div>
</template>

<script>
    export default{
        props:{
            myName:{
                type:String,
                required:true
            },
            // passed from User.vue to its child
            resetFn: Function,
            userAge:Number
        },
        methods:{
            switchName(){
                return this.myName.split("").reverse().join("");
            },
            resetName(){
                this.myName = 'Nicha';
                this.$emit('nameWasReset',this.myName);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
