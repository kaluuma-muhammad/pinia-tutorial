<template>
    <div class="task">
        <h1> {{ task.title}} </h1>
        <div class="icons">
            <div class="material-icons">delete</div>
            <div class="material-icons">favorite</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['task']
    }
</script>