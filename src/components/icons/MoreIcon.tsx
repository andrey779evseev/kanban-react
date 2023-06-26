type PropsType = {
	color: string
	size?: number | string
}

export default function MoreIcon(props: PropsType) {
	const { color, size = '16' } = props
	return (
		<svg
			width={`${size}px`}
			height={`${size}px`}
			viewBox='0 0 20 20'
			fill='none'
		>
			<path
				fill={color}
				fillRule='evenodd'
				d='M3 8a2 2 0 100 4 2 2 0 000-4zm5 2a2 2 0 114 0 2 2 0 01-4 0zm7 0a2 2 0 114 0 2 2 0 01-4 0z'
			/>
		</svg>
	)
}
