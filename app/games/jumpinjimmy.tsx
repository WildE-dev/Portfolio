'use client'

import Carousel from '../components/Carousel'
import Image from 'next/image'

export default function JumpinJimmy() {
	return (
		<div className="bg-slate-600 p-12">
			<h1 className='text-5xl font-bold'>
				Jumpin&apos; Jimmy
			</h1>
            <h3 className='text-xl pt-2'>
                Released 2020
            </h3>
            <p className="my-4">
            Jumpin&apos; Jimmy is a game with lot&apos;s to explore. With over a dozen challenging levels and more to come, 
            there is plenty of fun to be had. Don&apos;t forget about the infinite mode, it literally never ends! 
            Not to mention all the characters you can choose from. You can do it all in Jumpin&apos; Jimmy!
            </p>
            <Carousel images={["/jumpinjimmy/icon.png", "/jumpinjimmy/screenshot1.png", "/jumpinjimmy/screenshot2.png", 
            "/jumpinjimmy/screenshot4.png", "/jumpinjimmy/screenshot5.png", "/jumpinjimmy/screenshot6.png"]}/>
            <div className='flex justify-center mt-4'>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.WillyCom.JumpinJimmy&hl=en&gl=US" rel="noopener noreferrer">
                    <Image src='/google.png' alt={''} width={564} height={168} className='px-1 w-48'/>
                </a>
            </div>
		</div>
	)
}