import { Category, Message, TaskSquare, Profile2User, Setting2 } from 'iconsax-react'

const links = [
	{ icon: <Category color='#787486' />, title: 'Home', href: '/' },
	{ icon: <Message color='#787486' />, title: 'Messages', href: '/messages' },
	{ icon: <TaskSquare color='#787486' />, title: 'Tasks', href: '/tasks' },
	{
		icon: <Profile2User color='#787486' />,
		title: 'Members',
		href: '/members',
	},
	{ icon: <Setting2 color='#787486' />, title: 'Settings', href: '/settings' },
]

export default function SidebarNavigation() {
	return (
		<nav>
			<ul className='flex flex-col gap-1'>
				{links.map((link, i) => (
					<li key={i}>
						<a
							href={link.href}
							className='flex items-center gap-[14px] rounded-md px-3 py-[10px] transition-colors hover:bg-violet/5'
						>
							{link.icon}
							<span className='text-base font-medium text-gray-700'>
								{link.title}
							</span>
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
