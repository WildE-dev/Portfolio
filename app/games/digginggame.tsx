'use client'

import Carousel from '../components/Carousel'
import Image from 'next/image'

export default function DiggingGame() {
	return (
		<div className="bg-slate-600 p-12">
			<h1 className='text-5xl font-bold'>
				Digging Game
			</h1>
            <h3 className='text-xl pt-2'>
                Released 2019
            </h3>
            <p className="my-4">
                Digging is the best part of this game, it&apos;s also the main part of this game. Don&apos;t worry though, 
                there&apos;s plenty more do do than just dig around in the dirt, you can find buried treasure, 
                escape the giant excavator or even try to avoid running into TNT!
            </p>
            <Carousel images={["/digginggame/digginggame.png", "/digginggame/bestimage.png", "/digginggame/screenshot2.png", "/digginggame/screenshot4.png", 
            "/digginggame/screenshot5.png", "/digginggame/screenshot7.png"]}/>
            <div className='flex justify-center mt-4'>
                <a target="_blank" href="https://www.amazon.com/WillyCom-Digging-Game/dp/B07V3GGRS3/ref=sr_1_10?keywords=digging+game&qid=1687890251&s=mobile-apps&sr=1-10" rel="noopener noreferrer">
                    <Image src='/amazon.png' alt={''} width={903} height={296} className='px-1 w-48'/>
                </a>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.WillyCom.DiggingGame&hl=en&gl=US" rel="noopener noreferrer">
                    <Image src='/google.png' alt={''} width={564} height={168} className='px-1 w-48'/>
                </a>
            </div>
		</div>
	)
}