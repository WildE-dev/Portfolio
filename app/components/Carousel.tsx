import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useCallback } from "react"
import Image from 'next/image'

type CarouselType = {
    images: string[]
}

export default function Carousel({images}: CarouselType) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    useEffect(() => {
        if (emblaApi) {
        console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

	return (
        <div className="flex-down">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex h-[256px]">
                    {images.map((value, index) => (
                        <Image key={value} src={value} alt={''} width={500} height={800} className="object-contain px-3"/>
                    ))}
                </div>
            </div>
            <div className='flex justify-center text-2xl p-2'>
                <button className="bg-slate-500 px-2 mr-2 rounded-lg uppercase" onClick={scrollPrev}>
                    Prev
                </button>
                <button className="bg-slate-500 px-2 ml-2 rounded-lg uppercase" onClick={scrollNext}>
                    Next
                </button>
            </div>
        </div>
	)
}