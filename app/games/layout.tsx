export default function GamesLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
        <div>
            <h1 className='text-8xl text-center font-bold mb-8'>
				Games
			</h1>
            {children}
        </div>
    )
}