'use client'

import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
	const dt = new Date()

	return (
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
	);
};