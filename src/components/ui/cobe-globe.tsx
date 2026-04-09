"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

interface Marker { id: string; location: [number, number]; label: string }
interface Arc { id: string; from: [number, number]; to: [number, number]; label?: string }

interface GlobeProps {
  markers?: Marker[]
  arcs?: Arc[]
  className?: string
  markerColor?: [number, number, number]
  baseColor?: [number, number, number]
  arcColor?: [number, number, number]
  glowColor?: [number, number, number]
  dark?: number
  mapBrightness?: number
  markerSize?: number
  speed?: number
  theta?: number
}

export function Globe({
  markers = [],
  arcs = [],
  className = "",
  markerColor = [0.13, 0.77, 0.37],
  baseColor = [1, 1, 1],
  arcColor = [0.13, 0.77, 0.37],
  glowColor = [0.94, 0.93, 0.91],
  dark = 0,
  mapBrightness = 10,
  markerSize = 0.025,
  speed = 0.003,
  theta = 0.2,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number } | null>(null)
  const phiOffset = useRef(0)

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
  }, [])

  const handlePointerUp = useCallback(() => {
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
  }, [])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (pointerInteracting.current) {
      const delta = e.clientX - pointerInteracting.current.x
      phiOffset.current += delta / 300
      pointerInteracting.current = { x: e.clientX }
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let phi = 0
    let animationId: number
    let globe: ReturnType<typeof createGlobe> | null = null

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi: 0,
        theta,
        dark,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        markers: markers.map((m) => ({ location: m.location, size: markerSize, id: m.id })),
        arcs: arcs.map((a) => ({ from: a.from, to: a.to, id: a.id })),
        arcColor,
        arcWidth: 0.5,
        arcHeight: 0.25,
        markerElevation: 0.01,
        opacity: 0.7,
      })

      function animate() {
        if (!pointerInteracting.current) phi += speed
        globe!.update({
          phi: phi + phiOffset.current,
          theta,
          dark,
          mapBrightness,
          markerColor,
          baseColor,
          arcColor,
          markers: markers.map((m) => ({ location: m.location, size: markerSize, id: m.id })),
          arcs: arcs.map((a) => ({ from: a.from, to: a.to, id: a.id })),
        })
        animationId = requestAnimationFrame(animate)
      }
      animate()
      setTimeout(() => { if (canvas) canvas.style.opacity = "1" })
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) { ro.disconnect(); init() }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [markers, arcs, markerColor, baseColor, arcColor, glowColor, dark, mapBrightness, markerSize, speed, theta])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
        style={{ width: "100%", height: "100%", cursor: "grab", opacity: 0, transition: "opacity 1.2s ease", borderRadius: "50%", touchAction: "none" }}
      />
    </div>
  )
}
