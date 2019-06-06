<template>
    <div class="list">
        <Film v-for="(film, index) in films"
            v-bind:film="film"
            v-bind:index="index"/>
    </div>
</template>

<script>
    import Film from './Film.vue';
    export default {
        name: 'List',
        components:{
            Film
        },
        computed: {
            films(){
                return this.$store.state.films;
            }
        }
    }
</script>