export type Task = {
	id: number
	priority: 'low' | 'high'
	title: string
	description?: string
	images?: string[]
	type: 'todo' | 'inprogress' | 'completed'
}
