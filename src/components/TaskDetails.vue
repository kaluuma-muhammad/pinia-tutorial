<template>
    <div class="task">
        <h1> {{ task.title}} </h1>
        <div class="icons">
            <i @click="taskStore.deleteTask(task.id)" class="material-icons">delete</i>
            <i @click="taskStore.toggleFav(task.id)" :class="{active: task.isFav}" class="material-icons">favorite</i>
        </div>
    </div>
</template>

<script>
import { useTaskStore } from '../stores/tasks';

    export default {
        props: ['task'],
        setup() {
            const taskStore = useTaskStore()

            return { taskStore }
        }
    }
</script>