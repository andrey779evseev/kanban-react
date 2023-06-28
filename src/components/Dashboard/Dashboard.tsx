import {
	DndContext,
	DragEndEvent,
	DragOverEvent,
	DragOverlay,
	DragStartEvent,
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useMemo, useState } from 'react'
import taskPicture1 from '@/assets/images/task-picture1.png'
import taskPicture2 from '@/assets/images/task-picture2.png'
import taskPicture3 from '@/assets/images/task-picture3.png'
import taskPicture4 from '@/assets/images/task-picture4.png'
import Card from '@/components/card/Card'
import DashboardColumn from '@/components/dashboard/DashboardColumn'
import DashboardHead from '@/components/dashboard/DashboardHead'
import If from '@/components/If'
import { Task } from '@/types/Task'

const columns: {
	type: 'todo' | 'inprogress' | 'completed'
	color: 'violet' | 'orange' | 'green'
	title: string
}[] = [
	{
		type: 'todo',
		title: 'To Do',
		color: 'violet',
	},
	{
		type: 'inprogress',
		title: 'On Progress',
		color: 'orange',
	},
	{
		type: 'completed',
		title: 'Done',
		color: 'green',
	},
]

export default function Dashboard() {
	const [tasks, setTasks] = useState<Task[]>([
		{
			id: 1,
			title: 'Brainstorming',
			description:
				'Brainstorming brings team members diverse experience into play.',
			priority: 'low',
			type: 'todo',
		},
		{
			id: 2,
			title: 'Research',
			description:
				'User research helps you to create an optimal product for users.',
			priority: 'high',
			type: 'todo',
		},
		{
			id: 3,
			title: 'Wireframes',
			description:
				'Low fidelity wireframes include the most basic content and visuals.',
			priority: 'high',
			type: 'todo',
		},
		{
			id: 4,
			title: 'Onboarding Illustrations ',
			priority: 'low',
			images: [taskPicture1],
			type: 'inprogress',
		},
		{
			id: 5,
			title: 'Moodboard',
			priority: 'high',
			images: [taskPicture2, taskPicture3],
			type: 'inprogress',
		},
		{
			id: 6,
			title: 'Mobile App Design',
			priority: 'high',
			images: [taskPicture4],
			type: 'completed',
		},
		{
			id: 7,
			title: 'Design System',
			description: 'It just needs to adapt the UI from what you did before ',
			priority: 'low',
			type: 'completed',
		},
	])
	const [activeTask, setActiveTask] = useState<Task | null>(null)

	const onDragEnd = (e: DragEndEvent) => {
		if (e.over?.id && e.over.id !== e.active.id) {
			const clone = structuredClone(tasks)
			const activeIndex = clone.findIndex((x) => x.id === e.active.id)
			const overIndex = clone.findIndex((x) => x.id === e.over!.id)
			const temp = clone[activeIndex]
			clone[activeIndex] = clone[overIndex]
			clone[overIndex] = temp
			setTasks(clone)
		}
	}

	const onDragStart = (e: DragStartEvent) => {
		setActiveTask(tasks.find((x) => x.id === e.active.id)!)
	}

	const onDragOver = (e: DragOverEvent) => {
		if (
			e.over?.id &&
			e.active.data.current &&
			e.over.data.current &&
			e.active.data.current?.type !== e.over.data.current?.type
		) {
			const clone = structuredClone(tasks)
			clone.find((x) => x.id === e.active.id)!.type = e.over.data.current.type
			setTasks(clone)
		}
	}

	const splittedTasks = useMemo(() => {
		return {
			todo: tasks.filter((x) => x.type === 'todo'),
			inprogress: tasks.filter((x) => x.type === 'inprogress'),
			completed: tasks.filter((x) => x.type === 'completed'),
		}
	}, [tasks])

	return (
		<main className='p-10'>
			<DashboardHead />
			<DndContext
				onDragEnd={onDragEnd}
				onDragStart={onDragStart}
				onDragOver={onDragOver}
			>
				<div className='grid h-fit grid-cols-3 gap-4'>
					<DragOverlay className='rounded-2xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]'>
						<If condition={activeTask !== null}>
							<Card task={activeTask!} />
						</If>
					</DragOverlay>
					{columns.map((column) => (
						<DashboardColumn
							title={column.title}
							type={column.type}
							key={column.type}
						>
							<SortableContext
								items={splittedTasks[column.type]}
								strategy={verticalListSortingStrategy}
							>
								{splittedTasks[column.type].map((task) => (
									<Card key={task.id} task={task} />
								))}
							</SortableContext>
						</DashboardColumn>
					))}
				</div>
			</DndContext>
		</main>
	)
}
