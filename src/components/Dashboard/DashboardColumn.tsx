import { useDroppable } from '@dnd-kit/core'
import { Add } from 'iconsax-react'
import { PropsWithChildren } from 'react'
import { cn } from '@/utils/cn'

type PropsType = PropsWithChildren<{
	title: string
	type: 'todo' | 'inprogress' | 'completed'
}>

export default function DashboardColumn(props: PropsType) {
	const { title, children, type } = props
	const { setNodeRef } = useDroppable({
		id: `column-${type}`,
	})
	return (
		<div className='flex h-full flex-col gap-5 rounded-2xl bg-gray-200 p-5'>
			<div className='flex justify-between'>
				<div className='flex items-center'>
					<div
						className={cn('mr-2 h-[8px] w-[8px] rounded-full', {
							'bg-violet': type === 'todo',
							'bg-orange': type === 'inprogress',
							'bg-green-300': type === 'completed',
						})}
					/>
					<span className='mr-3 text-base font-medium text-dark'>{title}</span>
					<div className='grid h-5 w-5 place-items-center rounded-full bg-gray-400 text-xs font-medium text-gray-800'>
						4
					</div>
				</div>
				<button
					className={cn('grid h-5 w-5 place-items-center rounded-md', {
						'bg-violet/20': type === 'todo',
						'bg-orange/20': type === 'inprogress',
						'bg-green-300/20': type === 'completed',
					})}
				>
					<Add
						size='18'
						color={
							type === 'todo'
								? '#5030e5'
								: type === 'inprogress'
								? '#FFA500'
								: '#8BC48A'
						}
					/>
				</button>
			</div>
			<div
				className={cn('h-[3px] w-full', {
					'bg-violet': type === 'todo',
					'bg-orange': type === 'inprogress',
					'bg-green-300': type === 'completed',
				})}
			/>
			<div className='flex flex-col gap-5' ref={setNodeRef}>
				{children}
			</div>
		</div>
	)
}
