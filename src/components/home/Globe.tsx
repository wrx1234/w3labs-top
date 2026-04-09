'use client'
import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0
    let animationId: number

    const canvas = canvasRef.current!
    const width = canvas.offsetWidth

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.13, 0.77, 0.37],
      glowColor: [0.1, 0.1, 0.1],
      markers: [
        { location: [22.5431, 114.0579], size: 0.08 }, // 深圳
        { location: [28.2282, 112.9388], size: 0.06 }, // 长沙
        { location: [22.3193, 114.1694], size: 0.06 }, // 香港
        { location: [1.3521, 103.8198], size: 0.06 },  // Singapore
        { location: [37.7749, -122.4194], size: 0.06 }, // San Francisco
      ],
    })

    const animate = () => {
      phi += 0.005
      globe.update({ phi })
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full max-w-[500px] aspect-square"
      style={{ contain: 'layout paint size' }}
    />
  )
}
