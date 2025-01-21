import BlobGuy from "../components/BlobGuy"


export default function GamesLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
        <div>
            <BlobGuy />
            <h1 className='text-8xl text-center font-bold mb-8'>
				Test
			</h1>
            {children}
        </div>
    )
}