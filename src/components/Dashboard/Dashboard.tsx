import taskPicture1 from '@assets/images/task-picture1.png'
import taskPicture2 from '@assets/images/task-picture2.png'
import taskPicture3 from '@assets/images/task-picture3.png'
import taskPicture4 from '@assets/images/task-picture4.png'
import Card from '@components/card/Card'
import DashboardColumn from '@components/dashboard/DashboardColumn'
import DashboardHead from '@components/dashboard/DashboardHead'

export default function Dashboard() {
	return (
		<main className='p-10'>
			<DashboardHead />
			<div className='grid h-fit grid-cols-3 gap-4'>
				<DashboardColumn title='To Do' color='violet'>
					<Card
						title='Brainstorming'
						description='Brainstorming brings team members diverse experience into play.'
						priority='low'
					/>
					<Card
						title='Research'
						description='User research helps you to create an optimal product for users.'
						priority='high'
					/>
					<Card
						title='Wireframes'
						description='Low fidelity wireframes include the most basic content and visuals.'
						priority='high'
					/>
				</DashboardColumn>
				<DashboardColumn title='On Progress' color='orange'>
					<Card
						title='Onboarding Illustrations '
						priority='low'
						images={[taskPicture1]}
					/>
					<Card
						title='Moodboard'
						priority='low'
						images={[taskPicture2, taskPicture3]}
					/>
				</DashboardColumn>
				<DashboardColumn title='Done' color='green'>
					<Card
						title='Mobile App Design'
						priority='completed'
						images={[taskPicture4]}
					/>
					<Card
						title='Design System'
						description='It just needs to adapt the UI from what you did before '
						priority='completed'
					/>
				</DashboardColumn>
			</div>
		</main>
	)
}
