<template>
    <div class="card">
        <h5 class="card-title text-center">{{film.Title}}</h5>
        <img class="card-img-top" v-bind:src="film.Poster" alt="Card image cap">
        <div class="card-body">
            <p class="card-text text-center">{{film.Year}}</p>
            <p class="btn btn-info" v-if="!!film.Rate">{{film.Rate}}</p>
            <button href="#" v-on:click="rate(1, index)" class="btn btn-danger full-width">Плохо</button>
            <button href="#" v-on:click="rate(2, index)" class="btn btn-warning full-width">Нормально</button>
            <button href="#" v-on:click="rate(3, index)" class="btn btn-success full-width">Хорошо</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Film',
        props: {
            film:{
                type: Object,
                required: true
            },
            index:{
                required: true
            }
        },
        methods: {
            rate: function (mark, index) {
                this.$store.commit('changeRate', {index: index, value: mark});
            }
        }
    }
</script>