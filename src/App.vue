<template>
	<main>
		<!-- heading -->
		<header>
			<img src="./assets/pinia-logo.svg" alt="Pinia Logo">
			<h1>Pinia Tasks</h1>
		</header>

		<!-- filter -->
		<nav class="filter">
			<button @click="filter = 'all'">All Tasks</button>
			<button @click="filter = 'fav'">Fav Tasks</button>
		</nav>

		<!-- tasks list -->
		<div class="task-list" v-if="filter === 'all'">
			<p>You have {{ taskStore.totalCount }} tasks left to do</p>
			<div v-for="task in taskStore.tasks" :key="task.id">
				<TaskDetails :task="task" />
			</div>
		</div>

		<div class="task-list"  v-if="filter === 'fav'">
			<p>You have {{ taskStore.favCount }} tasks left to do</p>
			<div v-for="task in taskStore.favs" :key="task.id">
				<TaskDetails :task="task" />
			</div>
		</div>
	</main>
</template>

<script setup>
	import TaskDetails from '@/components/TaskDetails.vue'
	import { ref } from '@vue/reactivity'
	import { useTaskStore } from './stores/tasks'

	const taskStore  = useTaskStore()

	const filter = ref('all')

</script>