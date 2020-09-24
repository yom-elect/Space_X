import { createStore } from 'vuex'
import auth from './modules/auth';
import images from './modules/images';

const store = new createStore({
    modules: {
        auth,
        images
    }
})

export default store;