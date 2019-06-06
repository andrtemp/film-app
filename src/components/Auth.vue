<template>
    <div class="hello text-center">
        <div class="jumbotron">
            <form>
                <div class="form-group">
                    <label for="name">
                        Имя
                    </label>
                    <input type="text" id="name" name="name" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="password">
                        Пароль
                    </label>
                    <input type="password" id="password" name="password" class="form-control"/>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-info btn-group-lg">Войти</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data: function(){
            return {
                name: 'Анна Иванова',
                sex: 'Женский',
                age: '20 лет'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
