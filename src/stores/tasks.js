import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', () => {
	state: () => ({
		tasks: [
			{id: 1, title: 'Buy some milk', isFave: false},
			{id: 2, title: 'Play Max Payne', isFave: true},
		]
	})
})
