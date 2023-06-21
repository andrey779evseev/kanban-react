import {
	Add,
	ArrowDown2,
	Calendar1,
	Edit2,
	Filter,
	Link1,
	Menu,
	Pause,
	Profile2User,
} from 'iconsax-react'
import avatar2 from '@assets/images/avatar2.png'
import avatar3 from '@assets/images/avatar3.png'
import avatar4 from '@assets/images/avatar4.png'
import avatar5 from '@assets/images/avatar5.png'

export default function Dashboard() {
	return (
		<main className='p-10'>
			<div className='mb-10 flex items-center justify-between'>
				<div className='flex items-center'>
					<h1 className='mr-5 text-[46px] font-semibold leading-[56px] text-dark'>
						Mobile App
					</h1>
					<button className='mr-4 grid h-[25px] w-[25px] place-items-center rounded-lg bg-violet/20'>
						<Edit2 size='16' color='#5030E5' />
					</button>
					<button className='grid h-[25px] w-[25px] place-items-center rounded-lg bg-violet/20'>
						<Link1 size='16' color='#5030e5' />
					</button>
				</div>
				<div className='flex items-center'>
					<button className='flex items-center gap-2'>
						<div className='grid h-[15px] w-[15px] place-items-center rounded-md bg-violet/20'>
							<Add size='10' color='#5030e5' />
						</div>
						<span className='mr-3 text-base font-medium text-violet'>
							Invite
						</span>
					</button>
					<div className='flex'>
						<img
							src={avatar2}
							alt='avatar1'
							className='h-[37px] w-[37px] rounded-full border border-white'
						/>
						<img
							src={avatar3}
							alt='avatar2'
							className='-ml-2 h-[37px] w-[37px] rounded-full border border-white'
						/>
						<img
							src={avatar4}
							alt='avatar3'
							className='-ml-2 h-[37px] w-[37px] rounded-full border border-white'
						/>
						<img
							src={avatar5}
							alt='avatar4'
							className='-ml-2 h-[37px] w-[37px] rounded-full border border-white'
						/>
						<div className='-ml-2 grid h-[37px] w-[37px] place-items-center rounded-full border border-white bg-red-100 text-[15px] font-medium text-red-600'>
							+2
						</div>
					</div>
				</div>
			</div>
			<div className='mb-10 flex justify-between'>
				<div className='flex gap-3'>
					<button className='flex h-10 items-center gap-2 rounded-md border border-gray-700 px-4'>
						<Filter size='16' color='#787486' variant='Outline' />
						<span className='text-base font-medium text-gray-700'>Filter</span>
						<ArrowDown2 size='16' color='#787486' />
					</button>
					<button className='flex h-10 items-center gap-2 rounded-md border border-gray-700 px-4'>
						<Calendar1 size='16' color='#787486' />
						<span className='text-base font-medium text-gray-700'>Today</span>
						<ArrowDown2 size='16' color='#787486' />
					</button>
				</div>
				<div className='flex items-center gap-5'>
					<button className='flex h-10 items-center gap-2 rounded-md border border-gray-700 px-4'>
						<Profile2User size='16' color='#787486' />
						<span className='text-base font-medium text-gray-700'>Share</span>
					</button>
					<div className='h-7 w-px bg-gray-700' />
					<button className='grid h-10 w-10 place-items-center rounded-md bg-violet'>
						<Pause
							size='20'
							color='#ffffff'
							variant='Bold'
							className='rotate-90'
						/>
					</button>
					<Menu size='20' color='#787486' />
				</div>
			</div>
		</main>
	)
}
