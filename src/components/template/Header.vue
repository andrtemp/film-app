<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light navbar-fixed">
            <div class="container pull-right">
                <div class="header-menu__title"><router-link to="/" class="btn">Главная</router-link></div>
                <div class="header-menu__title"><router-link to="/list" class="btn">Список</router-link></div>
                <div class="header-menu__title"><router-link to="/latest" class="btn">Новинки</router-link></div>
                <div class="header-menu__title"><router-link to="/rated" class="btn">Оцененные</router-link></div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>