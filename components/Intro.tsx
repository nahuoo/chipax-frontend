import { useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

export const Intro = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 1.3,
      },
    })
    tl.fromTo(
      '.hr',
      { width: '10px', left: '50%' },
      { width: '100vw', left: '0%', opacity: 0 }
    )
    tl.to('.box1', { y: '-100%', ease: 'expo.inOut' })
    tl.to('.box2', { y: '100%', ease: 'expo.inOut' }, '<')
  }, [])

  return (
    <>
      <div className="hr w-[10px] h-[1.7px] bg-slate-400 top-1/2 absolute z-20" />
      <div className="box1 bg-zinc-100 w-full h-1/2 fixed z-10 justify-center flex items-end">
        <Image
          src="/logoChipax.png"
          alt="logo de chipax"
          width={300}
          height={100}
          className="z-20"
        />{' '}
      </div>
      <div className="box2 flex bg-zinc-100 w-full h-1/2 fixed top-1/2 z-10 justify-center items-start">
        <div className="text-cyan-500 size-[1.5rem]">
          Software N°1 de finanzas Pyme
        </div>
      </div>
    </>
  )
}
