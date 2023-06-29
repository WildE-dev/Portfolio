'use client'

import Carousel from '../components/Carousel'
import Image from 'next/image'

export default function BarnyardBonanza() {
	return (
		<div className="bg-slate-600 p-12">
			<h1 className='text-5xl font-bold'>
                Barnyard Bonanza
			</h1>
            <h3 className='text-xl pt-2'>
                Released 2021
            </h3>
            <p className="my-4">
                Roll away from the oncoming tractor that is trying to capture you! 
                You can collect powerups to deter the tractor or to get away faster 
                and collect coins and gems to get new animal pals!
            </p>
            <Carousel images={["/barnyardbonanza/icon.png", "/barnyardbonanza/promo.png", "/barnyardbonanza/screenshot1.jpg", "/barnyardbonanza/screenshot2.jpg", 
            "/barnyardbonanza/screenshot3.jpg", "/barnyardbonanza/screenshot4.jpg"]}/>
            <div className='flex justify-center mt-4'>
                <a target="_blank" href="https://www.amazon.com/WillyCom-Barnyard-Bonanza-Animal-Game/dp/B09C6P8R6B/ref=sr_1_1" rel="noopener noreferrer">
                    <Image src='/amazon.png' alt={''} width={903} height={296} className='px-1 w-48'/>
                </a>
            </div>
		</div>
	)
}