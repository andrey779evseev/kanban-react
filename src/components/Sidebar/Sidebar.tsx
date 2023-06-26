import SidebarNavigation from '@components/sidebar/SidebarNavigation'
import SidebarNotice from '@components/sidebar/SidebarNotice'
import SidebarProjects from '@components/sidebar/SidebarProjects'

export default function Sidebar() {
	return (
		<aside className='border-r border-gray-300 px-3 py-[30px]'>
			<SidebarNavigation />
			<div className='mb-[30px] mt-5 h-px w-full bg-gray-300' />
			<SidebarProjects />
			<SidebarNotice />
		</aside>
	)
}
