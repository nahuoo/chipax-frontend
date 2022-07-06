import gsap from "gsap"
export const introAnimation = () => {
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
  tl.fromTo('.title', { opacity: 0, stagger: 0.1 }, { opacity: 1 }, '<0.7')
}
