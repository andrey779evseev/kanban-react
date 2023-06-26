import { PropsWithChildren, useMemo } from 'react'
import avatar2 from '@assets/images/avatar2.png'
import avatar3 from '@assets/images/avatar3.png'
import avatar4 from '@assets/images/avatar4.png'
import avatar5 from '@assets/images/avatar5.png'
import { cn } from '@utils/cn'
import { getRandomInt } from '@utils/getRandomInt'

type PropsType = PropsWithChildren<{
	size: 'big' | 'small'
	direction: 'left' | 'right'
}>

const avatarsBase = [avatar2, avatar3, avatar4, avatar5]

/// children is an extra element in a row
export default function AvatarsGroup(props: PropsType) {
	const { size, direction, children } = props
	const avatars = useMemo(() => avatarsBase.slice(0, getRandomInt(1, 4)), [])
	return (
		<div className='flex'>
			{avatars.map((avatar, i) => (
				<img
					key={i}
					src={avatar}
					alt={`avatar${i}`}
					className={cn('rounded-full border border-white', {
						'h-6 w-6': size === 'small',
						'h-[37px] w-[37px]': size === 'big',
						'-mr-1':
							size === 'small' &&
							direction === 'right' &&
							avatars.length !== i + 1,
						'-ml-1': size === 'small' && direction === 'left' && i !== 0,
						'-mr-2':
							size === 'big' &&
							direction === 'right' &&
							avatars.length !== i + 1,
						'-ml-2': size === 'big' && direction === 'left' && i !== 0,
					})}
				/>
			))}
			{children}
		</div>
	)
}
