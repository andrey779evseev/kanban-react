import { LampOn } from 'iconsax-react'

export default function SidebarNotice() {
	return (
		<div className='relative flex h-fit w-full flex-col items-center gap-3 rounded-2xl bg-gray-200 px-5 pb-5 pt-[37px] text-center'>
			<div className='absolute top-[-33px] grid h-[66px] w-[66px] place-items-center rounded-full bg-gray-200'>
				<div className='relative h-[33px] w-[33px]'>
					<div className='absolute inset-0 rounded-full bg-yellow/70 blur-[14px]' />
					<div className='absolute inset-0 grid place-items-center'>
						<LampOn color='#fbcb18' variant='Bold' />
					</div>
				</div>
			</div>
			<span className='text-sm font-medium text-black'>Thoughts Time</span>
			<p className='text-xs text-gray-700'>
				We don`t have any notice for you, till then you can share your thoughts
				with your peers.
			</p>
			<button className='h-10 w-full rounded-md border-none bg-white text-center text-sm font-medium text-black outline-none'>
				Write a message
			</button>
		</div>
	)
}
