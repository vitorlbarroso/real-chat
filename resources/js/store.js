import axios from 'axios';
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    // Definindo o objeto do usuário
    state: {
        user: {}
    },
    
    // Atualizando o id dentro do objeto do usuário
    mutations: {
        setUserState: (state, value) => {
            state.user = value
        }
    },
    
    // Disparando o evento para atualizar o objeto do usuário na mutation
    actions: {
        userStateAction: ({ commit }) => {
            axios.get('api/user/me').then(response => {
                const userReponse = response.data.user;
                commit('setUserState', userReponse);
            });
        }
    },
    plugins: [createPersistedState()]
});