'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger)

const HeroCohete = () => {
  const containerRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(0)

  // Array de las rutas de las imágenes
  const images = [
    '/images/coheteFrame/ezgif-frame-001.jpg',
    '/images/coheteFrame/ezgif-frame-004.jpg',
    '/images/coheteFrame/ezgif-frame-007.jpg',
    '/images/coheteFrame/ezgif-frame-010.jpg',
    '/images/coheteFrame/ezgif-frame-013.jpg',
    '/images/coheteFrame/ezgif-frame-016.jpg',
    '/images/coheteFrame/ezgif-frame-019.jpg',  
    '/images/coheteFrame/ezgif-frame-022.jpg',
    '/images/coheteFrame/ezgif-frame-025.jpg',
    '/images/coheteFrame/ezgif-frame-028.jpg',
    '/images/coheteFrame/ezgif-frame-031.jpg',
    '/images/coheteFrame/ezgif-frame-034.jpg',
    '/images/coheteFrame/ezgif-frame-037.jpg',
    '/images/coheteFrame/ezgif-frame-040.jpg',
    '/images/coheteFrame/ezgif-frame-043.jpg',
    '/images/coheteFrame/ezgif-frame-046.jpg',
    '/images/coheteFrame/ezgif-frame-049.jpg',
    '/images/coheteFrame/ezgif-frame-052.jpg',
    '/images/coheteFrame/ezgif-frame-055.jpg',
    '/images/coheteFrame/ezgif-frame-058.jpg',
    '/images/coheteFrame/ezgif-frame-061.jpg',
    '/images/coheteFrame/ezgif-frame-064.jpg',
    '/images/coheteFrame/ezgif-frame-067.jpg',
    '/images/coheteFrame/ezgif-frame-070.jpg',          
    '/images/coheteFrame/ezgif-frame-073.jpg',
    '/images/coheteFrame/ezgif-frame-076.jpg',
    '/images/coheteFrame/ezgif-frame-079.jpg',
    '/images/coheteFrame/ezgif-frame-082.jpg',
    '/images/coheteFrame/ezgif-frame-085.jpg',
    '/images/coheteFrame/ezgif-frame-088.jpg',
    '/images/coheteFrame/ezgif-frame-091.jpg',      
    '/images/coheteFrame/ezgif-frame-094.jpg',
    '/images/coheteFrame/ezgif-frame-097.jpg',
    '/images/coheteFrame/ezgif-frame-100.jpg',
    '/images/coheteFrame/ezgif-frame-103.jpg',
    '/images/coheteFrame/ezgif-frame-106.jpg',          
    '/images/coheteFrame/ezgif-frame-109.jpg',
    '/images/coheteFrame/ezgif-frame-112.jpg',
    '/images/coheteFrame/ezgif-frame-115.jpg',
    '/images/coheteFrame/ezgif-frame-118.jpg',
    '/images/coheteFrame/ezgif-frame-121.jpg',
    '/images/coheteFrame/ezgif-frame-124.jpg',
    '/images/coheteFrame/ezgif-frame-127.jpg',
    '/images/coheteFrame/ezgif-frame-130.jpg',
    '/images/coheteFrame/ezgif-frame-133.jpg',
    '/images/coheteFrame/ezgif-frame-136.jpg',
    '/images/coheteFrame/ezgif-frame-139.jpg',
    '/images/coheteFrame/ezgif-frame-142.jpg',
    '/images/coheteFrame/ezgif-frame-145.jpg',
    '/images/coheteFrame/ezgif-frame-148.jpg',
    '/images/coheteFrame/ezgif-frame-151.jpg',
    '/images/coheteFrame/ezgif-frame-154.jpg' 
    

  ]
  useGSAP(() => {
    const totalFrames = images.length

    // Configurar ScrollTrigger con GSAP
    gsap.to({}, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          // Calcula el frame actual basado en el progreso del scroll
          const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(self.progress * totalFrames)
          );
          setCurrentFrame(frameIndex)
        },
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  })

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full">
      {/* Imagen de fondo del cohete */}
      <img
        src={images[currentFrame]}
        alt="Rocket Launch"
        className="w-screen h-screen object-cover fixed top-0 left-0"
      />
      
      {/* Texto centrado */}
      <div className="fixed inset-0 flex items-center justify-start pointer-events-none">
        <h1 className="text-white text-4xl">Has que tu empresa despegue</h1>
        {/* Puedes reemplazar el h1 por cualquier CTA o contenido */}
      </div>
    </section>
  );
};

export default HeroCohete