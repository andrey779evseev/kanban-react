import SidebarNavigation from '@components/Sidebar/SidebarNavigation'
import SidebarNotice from '@components/Sidebar/SidebarNotice'
import SidebarProjects from '@components/Sidebar/SidebarProjects'

export default function Sidebar() {
	return (
		<aside className='border-r border-gray-300 px-3 py-[30px]'>
			<SidebarNavigation/>
			<div className='mb-[30px] mt-5 h-px w-full bg-gray-300' />
			<SidebarProjects/>
			<SidebarNotice/>
		</aside>
	)
}
