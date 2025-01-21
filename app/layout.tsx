import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: {
		template: 'Wiley\'s Website | %s',
		default: 'Wiley\'s Website', // a default is required when creating a template
	},
	description: 'A portfolio by Wiley',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className + " bg-slate-900 text-white"}>
				<Navbar />
				<div className='px-[15%] py-6'>
					{children}
				</div>
				<Footer />
			</body>
		</html>
	)
}
