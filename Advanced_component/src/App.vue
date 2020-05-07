<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                   <h2 slot="title">{{quoteTitle}}</h2>
                   <p slot="content">A wonderful Quote!</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue'
import New from './components/New.vue'
import Author from './components/Author.vue'
export default {
    data:function(){
        return{
            quoteTitle:'The Quote from parent'
        }
    },
    components:{
        appQuote:Quote,
        appAuthor:Author,
        appNew:New
    }
}
</script>

<style>
p{
    color: blue;
}
</style>
