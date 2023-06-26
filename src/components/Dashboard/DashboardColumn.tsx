import { Add } from 'iconsax-react'
import { PropsWithChildren } from 'react'
import { cn } from '@utils/cn'

type PropsType = PropsWithChildren<{
	title: string
	color: 'violet' | 'orange' | 'green'
}>

export default function DashboardColumn(props: PropsType) {
	const { title, color, children } = props
	return (
		<div className='flex h-full flex-col gap-5 rounded-2xl bg-gray-200 p-5'>
			<div className='flex justify-between'>
				<div className='flex items-center'>
					<div
						className={cn('mr-2 h-[8px] w-[8px] rounded-full', {
							'bg-violet': color === 'violet',
							'bg-orange': color === 'orange',
							'bg-green-300': color === 'green',
						})}
					/>
					<span className='mr-3 text-base font-medium text-dark'>{title}</span>
					<div className='grid h-5 w-5 place-items-center rounded-full bg-gray-400 text-xs font-medium text-gray-800'>
						4
					</div>
				</div>
				<button
					className={cn('grid h-5 w-5 place-items-center rounded-md', {
						'bg-violet/20': color === 'violet',
						'bg-orange/20': color === 'violet',
						'bg-green-300/20': color === 'violet',
					})}
				>
					<Add
						size='18'
						color={
							color === 'violet'
								? '#5030e5'
								: color === 'orange'
								? '#FFA500'
								: '#8BC48A'
						}
					/>
				</button>
			</div>
			<div
				className={cn('h-[3px] w-full', {
					'bg-violet': color === 'violet',
					'bg-orange': color === 'orange',
					'bg-green-300': color === 'green',
				})}
			/>
			{children}
		</div>
	)
}
