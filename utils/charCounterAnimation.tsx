import gsap from 'gsap'
export const charCounterAnimation = () => {
  let tl = gsap.timeline({
    defaults: {
      ease: 'none',
      duration: 1.2,
      stagger: 0.2,
    },
  })
  tl.fromTo('.section', { opacity: 0 }, { opacity: 1 })
  tl.fromTo(
    '.cards',
    { y: '-20%', ease: 'bounce.out', opacity: 0 },
    { y: '0%', ease: 'bounce.out', opacity: 1 },
    '<'
  )
}
