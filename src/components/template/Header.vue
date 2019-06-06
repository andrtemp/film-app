<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light navbar-fixed">
            <div class="container pull-right">
                <div class="header-menu__title"><router-link to="/" class="btn btn-dark">Главная</router-link></div>
                <div class="header-menu__title"><router-link to="/list" class="btn btn-dark">Список</router-link></div>
                <div class="header-menu__title"><router-link to="/latest" class="btn btn-dark">Новинки</router-link></div>
                <div class="header-menu__title"><router-link to="/rated" class="btn btn-dark">Оцененные</router-link></div>
                <div class="header-menu__title"><router-link to="/rated" class="btn btn-dark">Рекомендации</router-link></div>
                <div class="header-menu__title"><router-link to="/auth" class="btn btn-dark">Войти</router-link></div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>