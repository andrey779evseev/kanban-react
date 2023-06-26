import Dashboard from '@components/dashboard/Dashboard'
import Header from '@components/Header'
import Sidebar from '@components/sidebar/Sidebar'

export default function App() {
	return (
		<div className='grid grid-cols-[250px_1fr] grid-rows-[88px_1fr]'>
			<Header />
			<Sidebar />
			<Dashboard />
		</div>
	)
}
