import avatar1 from '@assets/images/avatar1.png'
import SearchInput from '@components/SearchInput'
import {
	ArrowDown2,
	ArrowLeft2,
	Calendar2,
	Colorfilter,
	MessageQuestion,
	Notification
} from 'iconsax-react'

export default function Header() {
	return (
		<>
			{/* first section */}
			<div className='flex items-center justify-between border-b border-r border-gray-300 py-8 pl-[22px] pr-[25px]'>
				<div className='flex items-center gap-2'>
					<Colorfilter size='24' color='#5030e5' variant='Bulk' />
					<span className='text-xl font-bold text-dark'>Project M.</span>
				</div>
				<div className='relative h-5 w-5'>
					<ArrowLeft2
						color='#787486'
						variant='Outline'
						size='20'
						className='absolute right-0'
					/>
					<ArrowLeft2
						color='#787486'
						variant='Outline'
						size='20'
						className='absolute right-[6px]'
					/>
				</div>
			</div>

			{/* second section */}
			<div className='flex items-center justify-between border-b border-gray-300 px-12 py-[22px]'>
				<SearchInput/>
				<div className='flex items-center'>
					<div className='mr-[50px] flex gap-6'>
						<Calendar2 size='24' color='#787486' />
						<MessageQuestion color='#787486' size='24' />
						<div className='relative h-6 w-6'>
							<Notification color='#787486' size='24' />
							<div className='absolute right-1 top-px h-[6px] w-[6px] rounded-full bg-red-500' />
						</div>
					</div>
					<div className='flex items-center'>
						<div className='mr-[22px] flex flex-col items-end gap-1'>
							<span className='text-base text-dark'>Anima Agrawal</span>
							<span className='text-sm text-gray-700'>U.P, India</span>
						</div>
						<img
							src={avatar1}
							alt='avatar'
							className='mr-[10px] h-[38px] w-[38px] rounded-full'
						/>
						<ArrowDown2 size='18' color='#292D32' />
					</div>
				</div>
			</div>
		</>
	)
}
