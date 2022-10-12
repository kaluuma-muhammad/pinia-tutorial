<template>
    <div class="task">
        <h1> {{ task.title}} </h1>
        <div class="icons">
            <div @click="taskStore.deleteTask(task.id)" :class="{active: task.isFav}" class="material-icons">delete</div>
            <div @click="taskStore.toggleFav(task.id)" class="material-icons">favorite</div>
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