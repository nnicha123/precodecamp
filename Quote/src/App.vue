<template>
    <div class="container">
        <app-quote>Hello</app-quote>
    </div>
</template>

<script>
    import QuoteGrid from '../components/QuoteGrid.vue'
    import Quote from '../components/Quote.vue'
    export default {

        data:function(){
            return{
                quote:['Just a Quote to see something'],
                maxQuotes:10
            }
        },
        components:{
            appQuoteGrid:QuoteGrid,
            appQuote: Quote
        }
    }
</script>

<style>
</style>
