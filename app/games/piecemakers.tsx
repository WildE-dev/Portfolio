'use client'

import Carousel from '../components/Carousel'
import Image from 'next/image'

export default function PieceMakers() {
	return (
		<div className="bg-slate-600 p-12">
			<h1 className='text-5xl font-bold'>
				Piece Makers
			</h1>
            <h3 className='text-xl pt-2'>
                Releasing Soon
            </h3>
            <p className="my-4">
                This isn&apos;t just an average first person shooter, it unlocks your creative spirit when it comes to finding ways to eliminate your opponents. 
                Build anything from simple pistols to excessively dangerous bullet hell machines. The only limit is your imagination! 
                (or the bounding box, depending on how creative you are)
            </p>
            <Carousel images={["/piecemakers/duck_icon.png", "/piecemakers/main.png", "/piecemakers/Boom.png", 
            "/piecemakers/Building.png", "/piecemakers/Building2.png", "/piecemakers/Crane.png", "/piecemakers/Scope.png", "/piecemakers/Shipyard.png"]}/>
            <div className='flex justify-center mt-4'>
                <a target="_blank" href="https://store.steampowered.com/app/1868290/Piece_Makers/" rel="noopener noreferrer">
                    <Image src='/steam.png' alt={''} width={988} height={344} className='px-1 w-48'/>
                </a>
            </div>
		</div>
	)
}