import Vuex from vuex;
import Vux from 'vue';
import todos from './modules/todos';

// Load Vuex 
Vue.use(Vuex);
// Create store
export default new Vuex.Store({
    modules:{
        todos
    }
});