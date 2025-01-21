import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

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
	const dt = new Date()
	return (
		<html lang="en">
			<body className={inter.className + " bg-slate-900 text-white"}>
				<Navbar />
				<div className='px-[15%] py-6'>
					{children}
				</div>
				<footer className='flex justify-between py-4 px-[15%] bg-slate-700'>
					<div className='flex justify-between space-x-2'>
						<p>Wiley Swikit</p>
						<p>&mdash;</p>
						<a
							className='py-1'
							href="https://www.linkedin.com/in/wiley-swikit/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsLinkedin />
						</a>

						<a
							className='py-1'
							href="https://github.com/WildE-dev"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithubSquare />
						</a>
					</div>
					<p>Copyright © {dt.getFullYear()}</p>
				</footer>
			</body>
		</html>
	)
}
