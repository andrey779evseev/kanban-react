import { SearchNormal1 } from 'iconsax-react'

export default function SearchInput() {
	return (
		<div className='relative flex h-fit w-fit items-center'>
			<SearchNormal1 size='22' color='#787486' className='absolute left-4' />
			<input
				type='text'
				className='w-[400px] rounded-md bg-gray-200 py-3 pl-[54px] pr-3 text-sm leading-[17px] text-dark outline-none placeholder:text-gray-700'
				placeholder='Search for anything...'
			/>
		</div>
	)
}
