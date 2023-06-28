import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { cn } from '@/utils/cn'

type PropsType = {
	type: 'low' | 'high' | 'completed'
}

export default function PriorityTag(props: PropsType) {
	const { type } = props
	return (
		<div
			className={cn('rounded px-[6px] py-1 text-xs font-medium ', {
				'bg-orange-300/20 text-orange-500': type === 'low',
				'bg-red-500/10 text-red-500': type === 'high',
				'bg-green-400/20 text-green-500': type === 'completed',
			})}
		>
			{capitalizeFirstLetter(type)}
		</div>
	)
}
