<template>
    <div class="upgrades">
        <div v-for="(upgrade,index) in upgrades"
        :key="index"
        class="upgrade">
           <button :class="`button ${upgrade.disabled ? 'disabled' :''}`" @click="() => buyUpgrade(index)">
               {{upgrade.name}} {{upgrade.disabled ? `(lvl: ${upgrade.unlocksAt})` : ''}}
           </button>
           <div class="details">
               <div class="cost">Cost: {{upgrade.cost}}</div>
               <div class="quantity">Quantity: {{upgrade.quantity}}</div>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'upgrades',
    computed:{
        upgrades(){
            return this.$store.getters.availableUpgrades;
        }
    },
    methods:{
        buyUpgrade(index){
            this.$store.commit('buyUpgrade', {
                index,
                amount:1
            })
        }
    }
}
</script>

<style lang="scss">
    .upgrades{
        background-color: #222;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .upgrade{
            display: flex;
            justify-content: center;
            margin: 0px -15px 15px;
            align-items: center;

            .button,
            .cost,
            .quantity{
                color: #fff;
                margin: 0 15px;
            }
            .details{
                flex: 1 1 100%;
            }

            .button{
                appearance: none;
                border: none;
                outline: none;
                background: none;
                display: inline-block;
                min-width: 300px;
                padding: 15px 25px;
                background-color: #28b485;
                color: #fff;
                font-size: 20px;
                font-weight: 700;
                text-align: center;
                text-transform: uppercase;
                cursor: pointer;

                &.disabled{
                    color: #222;
                    background-color: #ccc;
                    pointer-events: none;
                }
            }
        }
    }
</style>