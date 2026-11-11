import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ThreeBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 0, 7)

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' })
    } catch {
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)

    const group = new THREE.Group()
    group.position.set(2.4, 0.2, 0)
    scene.add(group)

    const particleCount = window.innerWidth < 640 ? 380 : 760
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const accent = new THREE.Color('#55d6ff')
    const violet = new THREE.Color('#a78bfa')

    for (let i = 0; i < particleCount; i += 1) {
      const radius = 2.4 + Math.random() * 2.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      const index = i * 3
      positions[index] = radius * Math.sin(phi) * Math.cos(theta)
      positions[index + 1] = radius * Math.cos(phi)
      positions[index + 2] = radius * Math.sin(phi) * Math.sin(theta)

      const color = accent.clone().lerp(violet, Math.random())
      colors[index] = color.r
      colors[index + 1] = color.g
      colors[index + 2] = color.b
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const particleMaterial = new THREE.PointsMaterial({ size: 0.025, vertexColors: true, transparent: true, opacity: 0.72, depthWrite: false })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    group.add(particles)

    const orb = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.25, 2),
      new THREE.MeshBasicMaterial({ color: '#55d6ff', wireframe: true, transparent: true, opacity: 0.13 }),
    )
    group.add(orb)

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.006, 10, 160),
      new THREE.MeshBasicMaterial({ color: '#a78bfa', transparent: true, opacity: 0.22 }),
    )
    halo.rotation.x = Math.PI / 2.4
    group.add(halo)

    const pointer = { x: 0, y: 0 }
    const targetPointer = { x: 0, y: 0 }
    const onPointerMove = (event: PointerEvent) => {
      targetPointer.x = (event.clientX / window.innerWidth - 0.5) * 0.7
      targetPointer.y = (event.clientY / window.innerHeight - 0.5) * 0.45
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    const render = () => {
      pointer.x += (targetPointer.x - pointer.x) * 0.035
      pointer.y += (targetPointer.y - pointer.y) * 0.035
      group.rotation.y = pointer.x + (prefersReducedMotion ? 0 : frame * 0.00012)
      group.rotation.x = -pointer.y
      particles.rotation.z = prefersReducedMotion ? 0 : frame * 0.00008
      orb.rotation.x = prefersReducedMotion ? 0.25 : frame * 0.00025
      orb.rotation.y = prefersReducedMotion ? -0.35 : frame * 0.00032
      halo.rotation.z = prefersReducedMotion ? 0.35 : frame * 0.00018
      renderer.render(scene, camera)
      frame += 1
      animationFrame = window.requestAnimationFrame(render)
    }
    let animationFrame = window.requestAnimationFrame(render)

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))
      group.position.x = window.innerWidth < 900 ? 1.6 : 2.4
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onPointerMove)
      particleGeometry.dispose()
      particleMaterial.dispose()
      orb.geometry.dispose()
      orb.material.dispose()
      halo.geometry.dispose()
      halo.material.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="three-backdrop" aria-hidden="true" />
}
