import Image from 'next/image'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

export default function Home() {
	return (
		<>
			<h1 className='text-8xl text-center py-16 bg-local bg-cover rounded-lg text-slate-900 font-bold main-title'>
				Wiley T. Swikit
			</h1>
			<p className='w-2/3 m-auto text-center p-5'>
				Welcome to my game development portfolio! I&apos;m a self-taught game developer specializing in Unity and C# and
				I&apos;ve been making games since 2019. Currently seeking a position as a software developer.
			</p>
			<div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 pt-2 text-lg font-medium">
				<a
					className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://www.linkedin.com/in/wiley-swikit/"
					target="_blank"
				>
					<BsLinkedin />
					<b>LinkedIn</b>
				</a>
				<a
					className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://github.com/WildE-dev"
					target="_blank"
				>
					<FaGithubSquare />
					<b>GitHub</b>
				</a>
			</div>
		</>
	)
}
