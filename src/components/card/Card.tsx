import { Folder2, Message } from 'iconsax-react'
import AvatarsGroup from '@components/AvatarsGroup'
import PriorityTag from '@components/card/PriorityTag'
import MoreIcon from '@components/icons/MoreIcon'
import If from '@components/If'

type PropsType = {
	priority: 'low' | 'high' | 'completed'
	title: string
	description?: string
	images?: string[]
}

export default function Card(props: PropsType) {
	const { priority, title, description, images = [] } = props
	return (
		<div className='h-fit w-full rounded-2xl bg-white p-5 @container'>
			<div className='mb-1 flex items-center justify-between'>
				<PriorityTag type={priority} />
				<MoreIcon size='16' color='#0D062D' />
			</div>
			<h4 className='mb-2 text-lg font-semibold text-dark'>{title}</h4>
			<If condition={images.length > 0}>
				<div
					className='mb-2 grid gap-3'
					style={{ gridTemplateColumns: images.map((_) => '1fr').join(' ') }}
				>
					{images.map((image, i) => (
						<img
							src={image}
							alt={`image${i}`}
							key={i}
							className='h-auto w-full rounded-lg'
						/>
					))}
				</div>
			</If>
			<If condition={description !== undefined}>
				<p className='text-xs text-gray-700'>{description}</p>
			</If>
			<div className='mt-7 flex flex-row items-end justify-between'>
				<AvatarsGroup direction='right' size='small' />
				<div className='flex flex-col gap-1 @[350px]:flex-row @[350px]:gap-5'>
					<div className='flex items-center gap-1 text-xs font-medium text-gray-700'>
						<Message size='16' color='#787486' />
						12 comments
					</div>
					<div className='flex items-center gap-1 text-xs font-medium text-gray-700'>
						<Folder2 size='16' color='#787486' />0 comments
					</div>
				</div>
			</div>
		</div>
	)
}
