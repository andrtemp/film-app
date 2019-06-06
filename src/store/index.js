import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        films: []
    },
    getters: {},
    mutations: {
        changeRate(state, data) {
            state.films[data.index]['Rate'] = data.value;
        },
    },
    actions: {
        getFilms({state}) {
            axios.get('http://www.omdbapi.com/?s=Batman&apikey=57d8deb3').then((response) => {
                response.data.Search.forEach((el) => {
                    state.films.push(el);
                })
            });
            axios.get('http://www.omdbapi.com/?s=Spider&apikey=57d8deb3').then((response) => {
                response.data.Search.forEach((el) => {
                    state.films.push(el);
                })
            })
        }
    },
});
