import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
	state: () => ({
		tasks: [
			{id: 1, title: 'Buy some milk', isFav: false},
			{id: 2, title: 'Play Max Payne', isFav: true},
		]
	}),

	getters: {
		favs() {
			return this.tasks.filter(t => t.isFav)
		},

		favCount() {
			return this.tasks.reduce((p, c) => {
				return c.isFav ? p + 1 : p
			}, 0)
		},

		totalCount: (state) => {
			return state.tasks.length
		}
	}
})
