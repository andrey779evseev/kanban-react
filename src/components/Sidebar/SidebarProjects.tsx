import If from '@components/If'
import { cn } from '@utils/cn'
import { AddSquare, More } from 'iconsax-react'

const projects = [
	{
		color: 'bg-lime',
		title: 'Mobile App',
		href: '/mobile-app',
	},
	{
		color: 'bg-orange',
		title: 'Website Redesign',
		href: '/website-redesign',
	},
	{
		color: 'bg-pink',
		title: 'Design System',
		href: '/design-system',
	},
	{
		color: 'bg-blue',
		title: 'Wireframes',
		href: '/wireframes',
	},
]

export default function SidebarProjects() {
	return (
		<div className='mb-[77px]'>
			<div className='mb-5 flex items-center justify-between px-[10px]'>
				<h3 className='text-xs font-bold uppercase text-gray-700'>
					My projects
				</h3>
				<AddSquare size='16' color='#787486' />
			</div>
			<nav>
				<ul className='flex flex-col gap-1'>
					{projects.map((project, i) => (
						<li key={i}>
							<a
								href={project.href}
								className={cn(
									'group flex items-center justify-between rounded-md px-3 py-[10px] transition-colors hover:bg-violet/5',
									{ 'bg-violet/5': i === 0 }
								)}
							>
								<div className='flex items-center gap-4'>
									<div
										className={cn(
											'h-[8px] w-[8px] rounded-full',
											project.color
										)}
									/>
									<span
										className={cn('text-base font-medium text-gray-700', {
											'text-dark': i === 0,
										})}
									>
										{project.title}
									</span>
								</div>
								<If condition={i === 0}>
									<More size='16' color='#787486' />
								</If>
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
