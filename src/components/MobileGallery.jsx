"use client"

import Image from 'next/image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const MobilImg = [
    { src: "/assets/images/iphone_01.png", title: "iPhone01", speed: 10 },
    { src: "/assets/images/iphone_02.png", title: "iPhone02", speed: 20 },
    { src: "/assets/images/iphone_03.png", title: "iPhone03", speed: 10 },
    { src: "/assets/images/iphone_04.png", title: "iPhone04", speed: 20 },
    { src: "/assets/images/iphone_05.png", title: "iPhone05", speed: 10 }
]

function MobileGallery() {
    return (
        <ParallaxProvider>

            <div className="flex lg:h-[39rem] gap-10 mx-auto justify-center items-center overflow-hidden max-w-[1600px] md:h-[26rem] ">
                {MobilImg.map(({ src, title, speed }, index) => (
                    <Parallax speed={speed} key={index}>
                        <Image src={src} alt={title} width={279} height={576}  />
                    </Parallax>
                ))}
            </div>


        </ParallaxProvider>
    )
}

export default MobileGallery